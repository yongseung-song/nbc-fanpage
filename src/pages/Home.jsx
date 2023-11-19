import Footer from "components/Footer";
import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import bgBottom from "../assets/bgbottom.png";
import bgWall from "../assets/bgwall.png";
import React, { useEffect } from "react";
import styled from "styled-components";

export const members = ["이장원", "신재평"];
export const membersMap = new Map(members.entries());

const StBGContainer = styled.div`
  background: url(${bgBottom}), url(${bgWall}), #e3e2ce;
  background-repeat: no-repeat, no-repeat;
  background-position: calc(50% + 300px) calc(100% + 20px),
    calc(50% - 335px) 50%;
  background-size: 400px auto, 300px auto, 100% auto;
`;
const StLetterContainer = styled.div`
  height: calc(100vh - 332px);
  margin: 12px auto 0;
  min-width: 200px;
  width: 480px;
  padding-bottom: 28px;
`;

function Home({
  selectedMember,
  setSelectedMember,
  letters,
  setLetters,
  isEditing,
}) {
  useEffect(() => {
    if (!localStorage.getItem("letters")) {
      fetch("fakeData.json")
        .then((res) => res.json())
        .then((data) =>
          data.forEach((item) => {
            setLetters((prevState) => ({
              ...prevState,
              [item.id]: { ...item, editedAt: "" },
            }));
          })
        );
      const stringifiedLetterMap = JSON.stringify(letters);
      localStorage.setItem("letters", stringifiedLetterMap);
    } else {
      const storageData = JSON.parse(localStorage.getItem("letters"));
      setLetters(storageData);
    }
  }, []);

  useEffect(() => {
    const stringifiedLetterMap = JSON.stringify(letters);
    localStorage.setItem("letters", stringifiedLetterMap);
  }, [letters]);

  return (
    <div>
      <Header
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
        isEditing={isEditing}
      />
      <StBGContainer>
        <StLetterContainer>
          <LetterForm
            letters={letters}
            setLetters={setLetters}
            selectedMember={selectedMember}
            setSelectedMember={setSelectedMember}
          />
          <LetterList letters={letters} selectedMember={selectedMember} />
        </StLetterContainer>
      </StBGContainer>
      <Footer />
    </div>
  );
}

export default Home;

import Footer from "components/Footer";
import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import bgBottom from "../assets/bgbottom.png";
import bgWall from "../assets/bgwall.png";
import bannerBg from "../assets/bannerBg.png";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const members = ["이장원", "신재평"];
export const membersMap = new Map(members.entries());

const StBGContainer = styled.div`
  background: url(${bgBottom}), url(${bgWall}), #e3e2ce;
  background-repeat: no-repeat, no-repeat;
  background-position: calc(50% + 300px) calc(100% + 20px),
    calc(50% - 335px) 50%;
  background-size: 400px auto, 300px auto, 100% auto;
  /* background-blend-mode: darken; */
`;
const StLetterContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center; */
  height: calc(100vh - 332px);
  margin: 12px auto 0;
  min-width: 200px;
  width: 480px;
  padding-bottom: 28px;
  /* background-color: #f0f0f0; */
`;

function Home({ selectedMember, setSelectedMember, letters, setLetters }) {
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
    // localStorage.setItem()
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
      />
      <StBGContainer>
        <StLetterContainer>
          <LetterForm
            letters={letters}
            setLetters={setLetters}
            selectedMember={selectedMember}
            setSelectedMember={setSelectedMember}
          />
          <LetterList
            letters={letters}
            setLetters={setLetters}
            selectedMember={selectedMember}
          />
        </StLetterContainer>
      </StBGContainer>
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}

export default Home;

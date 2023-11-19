import Footer from "components/Footer";
import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import bgBottom from "../assets/bgbottom.png";
import bgWall from "../assets/bgwall.png";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "context/Context";
import { useDispatch, useSelector } from "react-redux";
import { addLetter, setLetter } from "redux/modules/letters";

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

function Home() {
  // const data = useContext(Context);
  const letters = useSelector((state) => state.letters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("letters")) {
      fetch("fakeData.json")
        .then((res) => res.json())
        .then((result) =>
          result.forEach((item) => {
            dispatch(addLetter(item));
          })
        );
      const stringifiedLetterMap = JSON.stringify(letters.letters);
      localStorage.setItem("letters", stringifiedLetterMap);
    } else {
      const storageData = JSON.parse(localStorage.getItem("letters"));
      dispatch(setLetter(storageData));
    }
  }, []);

  useEffect(() => {
    const stringifiedLetterMap = JSON.stringify(letters.letters);
    localStorage.setItem("letters", stringifiedLetterMap);
  }, [letters.letters]);

  return (
    <div>
      <Header />
      <StBGContainer>
        <StLetterContainer>
          <LetterForm />
          <LetterList />
        </StLetterContainer>
      </StBGContainer>
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}

export default Home;

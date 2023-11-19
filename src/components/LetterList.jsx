import React from "react";
import Letter from "./Letter";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StLetterListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-top: 6px;
`;

function LetterList() {
  const letters = useSelector((state) => state.letters);
  const member = useSelector((state) => state.member);

  const letterEntries = Object.entries(letters.letters).reverse();
  const filterLetters = () => {
    return letterEntries.filter(
      (letter) => letter[1].writedTo === member.selectedMember
    );
  };

  return (
    <StLetterListContainer>
      <ul>
        {filterLetters().map((item) => {
          return <Letter key={item[0]} letter={item[1]} />;
        })}
      </ul>
    </StLetterListContainer>
  );
}

export default LetterList;

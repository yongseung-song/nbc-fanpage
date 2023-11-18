import React from "react";
import Letter from "./Letter";
import styled from "styled-components";

const StLetterListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-top: 6px;
  /* flex-wrap: no-wrap; */
`;

function LetterList({ letters, selectedMember }) {
  // console.log(letters);
  const letterEntries = Object.entries(letters).reverse();

  const filterLetters = () => {
    return letterEntries.filter(
      (letter) => letter[1].writedTo === selectedMember
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

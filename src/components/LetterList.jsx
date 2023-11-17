import React, { useEffect, useState } from "react";
import Letter from "./Letter";
import styled from "styled-components";

const StLetterListContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  /* flex-wrap: no-wrap; */
  padding: 12px;
`;

function LetterList({ letterMap, setLetterMap, selectedMember }) {
  // console.log(letterMap);
  const letterEntries = Object.entries(letterMap).reverse();
  console.log(letterMap);
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

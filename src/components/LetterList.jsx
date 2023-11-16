import React, { useEffect, useState } from "react";
import Letter from "./Letter";
import styled from "styled-components";

const StLetterListContainer = styled.div`
  border: 2px dotted black;
  width: 100%;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  /* flex-wrap: no-wrap; */
  padding: 12px;
`;

function LetterList({ letterList, setLetterList, selectedMember }) {
  useEffect(() => {
    if (!letterList.length) {
      fetch("fakeData.json")
        .then((res) => res.json())
        .then((data) => setLetterList((prevList) => [...data, ...prevList]));
    }
  }, []);

  const filterLetters = (letterList) => {
    return letterList.filter((letter) => letter.writedTo === selectedMember);
  };

  return (
    <StLetterListContainer>
      <ul>
        {filterLetters(letterList).map((letter) => {
          return <Letter key={letter.id} letter={letter} />;
        })}
      </ul>
    </StLetterListContainer>
  );
}

export default LetterList;

import React from "react";
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

function LetterList() {
  return (
    <StLetterListContainer>
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
    </StLetterListContainer>
  );
}

export default LetterList;

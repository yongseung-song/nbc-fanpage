import React, { useContext } from "react";
import Letter from "./Letter";
import styled from "styled-components";
import { Context } from "context/Context";

const StLetterListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-top: 6px;
`;
const StEmptyListContainer = styled.div`
  background-color: #fff;
  padding: 12px;
  border: 1px solid #0008;
  border-radius: 12px;
  height: 160px;
  display: flex;
  justify-content: center;
  p {
    text-align: center;
  }
`;

function LetterList() {
  const { letters, selectedMember } = useContext(Context);
  const letterEntries = Object.entries(letters).reverse();
  const filterLetters = () => {
    return letterEntries.filter(
      (letter) => letter[1].writedTo === selectedMember
    );
  };

  return (
    <StLetterListContainer>
      <ul>
        {filterLetters().length ? (
          filterLetters().map((item) => {
            return <Letter key={item[0]} letter={item[1]} />;
          })
        ) : (
          <StEmptyListContainer>
            <p>{selectedMember}에게 남겨진 팬레터가 없습니다.</p>
          </StEmptyListContainer>
        )}
      </ul>
    </StLetterListContainer>
  );
}

export default LetterList;

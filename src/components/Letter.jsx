import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const StLetterContainer = styled.div`
  padding: 12px;
  border: 1px solid black;
  margin-bottom: 12px;
  background-color: white;
  display: flex;
`;

const StImg = styled.img`
  background-color: #aaa;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  margin-right: 12px;
  border-radius: 100%;
`;

const StLetterMsg = styled.p`
  width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StLetterContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px;
`;

function Letter({ letter }) {
  const letterClickHandler = () => {};
  // console.log(letter);

  return (
    <StLetterContainer onClick={letterClickHandler}>
      <StImg src={letter.avatar} alt="img" />
      <StLetterContents>
        <h3>{letter.nickname}</h3>
        <p>{dayjs(letter.createdAt).format("YYYY년 MM월 DD일 hh:mm")}</p>
        <StLetterMsg>{letter.content}</StLetterMsg>
      </StLetterContents>
    </StLetterContainer>
  );
}

export default Letter;

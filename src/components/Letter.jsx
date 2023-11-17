import React, { useRef } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const StLetterContainer = styled.li`
  padding: 12px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 12px;
  background-color: white;
  display: flex;
  align-items: center;
`;

const StImg = styled.img`
  background-color: #aaa;
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  margin-right: 12px;
  border-radius: 100%;
`;

const StLetterContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px;
  padding: 8px 0;
`;

const StLetterDate = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: #888;
`;

const StLetterMsg = styled.p`
  width: 82%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 0;
`;

function Letter({ letter }) {
  const navigate = useNavigate();
  const letterRef = useRef();
  const letterClickHandler = () => {
    const id = letterRef.current.id;
    navigate(`details/${id}`);
  };
  // console.log(letter);

  return (
    <StLetterContainer
      ref={letterRef}
      id={letter?.id}
      onClick={letterClickHandler}
    >
      <StImg src={letter?.avatar} alt={letter?.nickname} />
      <StLetterContents>
        <h3>{letter?.nickname}</h3>
        <StLetterDate>
          {`${dayjs(letter?.createdAt).format(
            "YYYY년 MM월 DD일 hh:mm"
          )} 에 작성`}
        </StLetterDate>
        <StLetterMsg>{letter?.content}</StLetterMsg>
      </StLetterContents>
    </StLetterContainer>
  );
}

export default Letter;

import React from "react";
import styled from "styled-components";

const StLetterContainer = styled.div`
  padding: 12px;
  border: 1px solid black;
  margin-bottom: 12px;
  background-color: white;
  display: flex;
`;

const StImg = styled.img`
  background-color: magenta;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  margin-right: 12px;
`;

const StLetterMsg = styled.p`
  width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StLetterContents = styled.p`
  width: 100%;
`;

function Letter() {
  return (
    <StLetterContainer>
      <StImg src="" alt="img" />
      <StLetterContents>
        <h3>양재인</h3>
        <p>231116</p>
        <StLetterMsg>
          쩐다쩐다쩐다쩐다쩐다쩐다 쩐다쩐다쩐다쩐다쩐다쩐다쩐다쩐다쩐다
        </StLetterMsg>
      </StLetterContents>
    </StLetterContainer>
  );
}

export default Letter;

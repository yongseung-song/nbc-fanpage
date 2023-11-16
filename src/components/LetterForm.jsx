import React from "react";
import styled from "styled-components";

const StLetterFormContainer = styled.div`
  min-width: 200px;
  max-width: 520px;
  width: 100%;
  margin: 12px;
  padding: 12px;
  border: 2px dotted black;
`;

const StInputContainer = styled.div`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;
const StSelectContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;
const StBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function LetterForm() {
  return (
    <StLetterFormContainer>
      <form action="">
        <StInputContainer>
          <label htmlFor="">닉네임:</label>
          <input type="text" />
        </StInputContainer>
        <StInputContainer>
          <label htmlFor="">내용:</label>
          <input type="text" />
        </StInputContainer>
        <StSelectContainer>
          <label htmlFor="">누구에게 보내실 건가요?</label>
          <select name="" id="">
            <option value="">신재평</option>
            <option value="">이장원</option>
          </select>
        </StSelectContainer>
        <StBtnContainer>
          <button>팬레터 등록</button>
        </StBtnContainer>
      </form>
    </StLetterFormContainer>
  );
}

export default LetterForm;

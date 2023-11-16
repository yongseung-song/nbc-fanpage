import React, { useRef } from "react";
import styled from "styled-components";
import { members } from "pages/Home";

const StLetterFormContainer = styled.div`
  min-width: 200px;
  max-width: 520px;
  width: 100%;
  margin-bottom: 12px;
  padding: 12px;
  /* border: 1px solid black; */
  background-color: #ddd;
  border-radius: 12px;
`;

const StInputContainer = styled.div`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;

  textarea {
    width: 80%;
  }
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

const StMaxLengthIndicator = styled.span`
  display: block;
  text-align: right;
`;

function LetterForm({ selectedMember }) {
  const textRef = useRef();
  const textAreaRef = useRef();
  const selectRef = useRef();

  const letterSubmitHandler = (e) => {
    e.preventDefault();
    const letter = {
      nickname: textRef.current.value,
      content: textAreaRef.current.value,
      writedTo: selectRef.current.value,
    };
    const test = { ...letter };
    // TODO 함수로 분리하기
    const testString = JSON.stringify(test);
    const possibleStr = testString.replace(/\n/gi, "\\r\\n");
    console.log(JSON.parse(possibleStr));
    console.log(testString);

    textRef.current.value = "";
    console.log(letter);
  };

  return (
    <StLetterFormContainer>
      <form action="">
        <StInputContainer>
          <label htmlFor="text">닉네임:</label>
          <input ref={textRef} required autoFocus id="text" type="text" />
        </StInputContainer>
        <StInputContainer>
          <label htmlFor="textarea">내용:</label>
          <textarea
            ref={textAreaRef}
            required
            id="textarea"
            name="textarea"
            rows={5}
            maxLength={150}
          />
        </StInputContainer>
        <StMaxLengthIndicator>0/150</StMaxLengthIndicator>
        <StSelectContainer>
          <label htmlFor="member-select">누구에게 보내실 건가요?</label>
          <select
            ref={selectRef}
            id="member-select"
            defaultValue={selectedMember}
            name=""
          >
            <option value="이장원">이장원</option>
            <option value="신재평">신재평</option>
          </select>
        </StSelectContainer>
        <StBtnContainer>
          <button onClick={letterSubmitHandler}>팬레터 등록</button>
        </StBtnContainer>
      </form>
    </StLetterFormContainer>
  );
}

export default LetterForm;

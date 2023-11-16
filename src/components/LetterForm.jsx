import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { members } from "pages/Home";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

const lengthLimit = 100;

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
  position: relative;

  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
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
  position: absolute;
  bottom: 2px;
  right: 2px;
  font-size: 0.75rem;
  text-align: right;
  color: ${(props) => (props.isMax ? "black" : "red")};
`;

function LetterForm({ setLetterList, selectedMember, setSelectedMember }) {
  const [textLength, setTextLength] = useState(0);
  const textRef = useRef();
  const textAreaRef = useRef();
  const selectRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, [selectedMember]);
  const letterSubmitHandler = (e) => {
    e.preventDefault();
    const letter = {
      id: uuid(),
      createdAt: dayjs().toJSON(),
      nickname: textRef.current.value,
      content: textAreaRef.current.value,
      writedTo: selectRef.current.value,
      avatar: "logo192.png",
    };
    const test = { ...letter };
    console.log(dayjs(test.createdAt).format("YYYY-MM-DD hh:mm"));
    // TODO 함수로 분리하기
    // const testString = JSON.stringify(test);
    // const possibleStr = testString.replace(/\n/gi, "\\r\\n");
    // console.log(JSON.parse(possibleStr));
    // console.log(testString);
    setLetterList((prevList) => [letter, ...prevList]);

    // TODO 뭔가 이상하다
    setSelectedMember((prevMember) =>
      prevMember === "이장원" ? "신재평" : "이장원"
    );
    textRef.current.value = "";
    textAreaRef.current.value = "";

    console.log(letter);
  };

  const textAreaChangeHandler = () => {
    setTextLength(textAreaRef.current.value.length);
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
            autoCorrect="false"
            id="textarea"
            name="textarea"
            rows={5}
            maxLength={lengthLimit}
            onChange={textAreaChangeHandler}
          />
          <StMaxLengthIndicator isMax={textLength < lengthLimit}>
            {textLength}/{lengthLimit}
          </StMaxLengthIndicator>
        </StInputContainer>
        <StSelectContainer>
          <label htmlFor="member-select">누구에게 보내실 건가요?</label>
          <select
            ref={selectRef}
            id="member-select"
            defaultValue={selectedMember}
            name="member-select"
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
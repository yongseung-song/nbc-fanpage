import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// TODO 사용하지 않는 변수 없애기
import { members } from "pages/Home";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

const nicknameLimit = 20;
const contentLimit = 100;

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

function LetterForm({ setLetterMap, selectedMember, setSelectedMember }) {
  const [contentLength, setContentLength] = useState(0);
  const [nicknameLength, setNicknameLength] = useState(0);
  const textRef = useRef();
  const textAreaRef = useRef();
  const selectRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, [selectedMember]);
  const letterSubmitHandler = (e) => {
    e.preventDefault();
    if (textRef.current.value && textAreaRef.current.value) {
      const letter = {
        id: uuid(),
        createdAt: dayjs().toJSON(),
        nickname: textRef.current.value,
        content: textAreaRef.current.value,
        writedTo: selectRef.current.value,
        avatar: "logo192.png",
      };
      setLetterMap((prevState) => ({
        [letter.id]: { ...letter },
        ...prevState,
      }));

      setSelectedMember(selectRef.current.value);
      textRef.current.value = "";
      textAreaRef.current.value = "";
      setContentLength(textAreaRef.current.value.length);
      setNicknameLength(textRef.current.value.length);
    } else {
      // HMM 모달 넣기?
      alert("닉네임과 내용을 입력해주세요.");
    }
  };

  const textChangeHandler = () => {
    setContentLength(textAreaRef.current.value.length);
    setNicknameLength(textRef.current.value.length);
  };

  return (
    <StLetterFormContainer>
      <form action="">
        <StInputContainer>
          <label htmlFor="text">닉네임:</label>
          <input
            ref={textRef}
            required
            autoFocus
            autoComplete="off"
            id="text"
            type="text"
            maxLength={nicknameLimit}
            onChange={textChangeHandler}
          />
          <StMaxLengthIndicator isMax={nicknameLength < nicknameLimit}>
            {nicknameLength}/{nicknameLimit}
          </StMaxLengthIndicator>
        </StInputContainer>
        <StInputContainer>
          <label htmlFor="textarea">내용:</label>
          <textarea
            ref={textAreaRef}
            required
            autoCorrect="off"
            id="textarea"
            name="textarea"
            rows={5}
            maxLength={contentLimit}
            onChange={textChangeHandler}
          />
          <StMaxLengthIndicator isMax={contentLength < contentLimit}>
            {contentLength}/{contentLimit}
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

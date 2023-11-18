import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// TODO 사용하지 않는 변수 없애기
import { members } from "pages/Home";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

const DEFAULT_IMG_URL = "http://www.peppertones.net/P_%20copy.jpg";
const NICKNAME_LIMIT = 20;
const CONTENT_LIMIT = 100;
const BORDER_COLOR = "#0008";
const BACKGROUND_COLOR = "#feffd0bf";

const StLetterFormContainer = styled.div`
  min-width: 200px;
  max-width: 520px;
  width: 100%;
  margin-bottom: 12px;
  padding: 12px;
  border: 1px solid ${BORDER_COLOR};
  border-radius: 12px;
  background-color: white;
`;

const StInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
  font-size: 0.8rem;
  label {
    padding-top: 6px;
  }
  input {
    padding: 4px 2px;
    border: 1px solid ${BORDER_COLOR};
  }
  textarea {
    border: 1px solid ${BORDER_COLOR};
  }
  input:focus {
    outline: none;
    background-color: ${BACKGROUND_COLOR};
  }
  textarea:focus {
    outline: none;
    background-color: ${BACKGROUND_COLOR};
  }
`;

const StSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 12px;
  label {
    margin-top: 2px;
  }
`;

const StBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StSubmitBtn = styled.button`
  cursor: pointer;
  background-color: white;
  text-align: center;
  border: 1px solid ${BORDER_COLOR};
  padding: 6px;
  border-radius: 6px;
  &:hover {
    background-color: yellow;
  }
`;

const StMaxLengthIndicator = styled.span`
  display: block;
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 0.75rem;
  text-align: right;
  color: ${(props) => (props.$isMax ? "#aaa" : "#f00a")};
`;

function LetterForm({
  letters,
  setLetters,
  selectedMember,
  setSelectedMember,
}) {
  const [contentLength, setContentLength] = useState(0);
  const [nicknameLength, setNicknameLength] = useState(0);
  const textRef = useRef();
  const textAreaRef = useRef();
  const selectRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, [selectedMember, letters]);

  const letterSubmitHandler = (e) => {
    e.preventDefault();

    if (textRef.current.value && textAreaRef.current.value) {
      const submittedLetter = {
        id: uuid(),
        createdAt: dayjs().toJSON(),
        nickname: textRef.current.value,
        content: textAreaRef.current.value,
        writedTo: selectRef.current.value,
        avatar: DEFAULT_IMG_URL,
      };

      setLetters((prevState) => ({
        ...prevState,
        [submittedLetter.id]: { ...submittedLetter },
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
          <label htmlFor="text">닉네임 :</label>
          <input
            ref={textRef}
            required
            autoFocus
            autoComplete="off"
            id="text"
            type="text"
            maxLength={NICKNAME_LIMIT}
            onChange={textChangeHandler}
          />
          {/* HMM transient props가 뭐지? 알아보기 */}
          <StMaxLengthIndicator $isMax={nicknameLength < NICKNAME_LIMIT}>
            {nicknameLength}/{NICKNAME_LIMIT}
          </StMaxLengthIndicator>
        </StInputContainer>
        <StInputContainer>
          <label htmlFor="textarea">내용 :</label>
          <textarea
            ref={textAreaRef}
            required
            autoCorrect="off"
            id="textarea"
            name="textarea"
            rows={5}
            maxLength={CONTENT_LIMIT}
            onChange={textChangeHandler}
          />
          <StMaxLengthIndicator $isMax={contentLength < CONTENT_LIMIT}>
            {contentLength}/{CONTENT_LIMIT}
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
          <StSubmitBtn onClick={letterSubmitHandler}>팬레터 등록</StSubmitBtn>
        </StBtnContainer>
      </form>
    </StLetterFormContainer>
  );
}

export default LetterForm;

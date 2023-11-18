import Footer from "components/Footer";
import Header from "components/Header";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import styled from "styled-components";

const defaultImage = "http://www.peppertones.net/P_%20copy.jpg";

const StBGContainer = styled.div`
  background-color: #e3e2ce;
  height: calc(100vh - 320px);
`;

const StDetailContainer = styled.div`
  width: 600px;
  margin: 36px auto 16px;
  padding: 12px;
  min-width: 200px;
  border: 1px solid #0008;
  border-radius: 8px;
  height: 300px;
  background-color: #eee;
  h4 {
    margin: 12px 16px;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  textarea {
    border: none;
    background-color: #eee;
  }
  textarea:focus {
    outline: none;
  }
`;

const StDetailInfo = styled.div`
  padding: 12px;
  gap: 6px;
  align-items: end;
  margin-top: auto;

  img {
    width: 64px;
    border-radius: 100%;
  }
  h3 {
    font-size: 1.3rem;
  }
  p {
    font-size: 0.8em;
    margin-left: auto;
    line-height: 1.3;
    text-align: end;
  }
  span {
    display: block;
    font-size: 0.7rem;
    color: #0005;
  }
`;
const StBtnContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  button {
    padding: 12px;
    border: 1px solid #0008;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.1s all;
    &:hover {
      background-color: #f9f984;
    }
  }
`;

function Detail({ letters, setLetters, isEdited, setIsEdited }) {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("letters") || Object.keys(params).length === 0) {
      alert("올바르지 않은 접근입니다. 홈 페이지로 이동합니다.");
      navigate("/");
    } else {
      const storageData = JSON.parse(localStorage.getItem("letters"));
      setLetters(storageData);
    }
  }, []);

  // useEffect(() => {}, [isEdited]);
  console.log(isEdited);
  const selectedLetter = letters[params.id];

  const editBtnClickHandler = (e) => {
    setIsEdited((prevState) => !prevState);
  };
  const deleteBtnClickHandler = (e) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      console.log("letter is Deleted");
    }
  };

  return (
    <div>
      <Header />
      <StBGContainer>
        <StDetailContainer>
          <h4>{`To. ${selectedLetter?.writedTo}`}</h4>
          {isEdited ? (
            <textarea
              // ref={textAreaRef}
              autoFocus
              required
              autoCorrect="off"
              id="textarea"
              name="textarea"
              rows={5}
              // maxLength={CONTENT_LIMIT}
              // onChange={textChangeHandler}
            >
              {selectedLetter?.content}
            </textarea>
          ) : (
            <p>{selectedLetter?.content}</p>
          )}
          <StDetailInfo>
            <img
              src={selectedLetter?.avatar}
              alt={selectedLetter?.nickname}
              width="199px"
            />
            <h3>{selectedLetter?.nickname}</h3>
            <p>
              {dayjs(selectedLetter?.createdAt).format(
                "YYYY년 MM월 DD일 hh:mm"
              )}{" "}
              에 작성
              <span>2023년 11월 23일 21:23 에 편집됨</span>
            </p>
          </StDetailInfo>
        </StDetailContainer>
        {isEdited ? (
          <StBtnContainer>
            <button>수정 완료</button>
            <button onClick={() => setIsEdited(false)}>취소</button>
          </StBtnContainer>
        ) : (
          <StBtnContainer>
            <button onClick={editBtnClickHandler}>수정</button>
            <button onClick={deleteBtnClickHandler}>삭제</button>
          </StBtnContainer>
        )}
      </StBGContainer>
      <Footer />
    </div>
  );
}

export default Detail;

import Footer from "components/Footer";
import Header from "components/Header";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

function Detail({ letterMap, setLetterMap }) {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("letters") || Object.keys(params).length === 0) {
      alert("올바르지 않은 접근입니다. 홈 페이지로 이동합니다.");
      navigate("/");
    } else {
      const data = JSON.parse(localStorage.getItem("letters"));
      setLetterMap(data);
    }
  }, []);
  console.log(letterMap[params.id]);
  const letter = letterMap[params.id];

  return (
    <div>
      <Header />
      <h1>{letter?.writedTo}</h1>
      <div>
        <img src={`../../public/${letter?.avatar}`} alt={letter?.nickname} />
        <div>
          <h3>{letter?.nickname}</h3>
          <p>
            {dayjs(letter?.createdAt).format("YYYY년 MM월 DD일 hh:mm")} 에 작성
          </p>
          <p>{letter?.content}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;

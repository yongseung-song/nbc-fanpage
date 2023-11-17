import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { useParams } from "react-router-dom";

function Detail({ letterMap, setLetterMap }) {
  const params = useParams();
  console.log(params);
  // const letter = letterMap.get(params.id);
  // const letter = new Map();
  // console.log(letter);
  console.log(letterMap);
  return (
    <div>
      <Header />
      <p>detail</p>
      <Footer />
    </div>
  );
}

export default Detail;

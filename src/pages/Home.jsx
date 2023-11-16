import Footer from "components/Footer";
import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StMainContainer = styled.div``;

const StLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 24px auto 36px;
  min-width: 300px;
  width: 480px;
  height: 63vh;
  /* background-color: #f0f0f0; */
`;

function Home() {
  return (
    <StMainContainer>
      <Header />
      <StLetterContainer>
        <LetterForm />
        <LetterList />
      </StLetterContainer>
      {/* <Outlet /> */}
      <Footer />
    </StMainContainer>
  );
}

export default Home;

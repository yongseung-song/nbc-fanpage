import Footer from "components/Footer";
import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const members = ["이장원", "신재평"];
export const membersMap = new Map(members.entries());

const StMainContainer = styled.div``;
const StLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 12px auto 36px;
  min-width: 300px;
  width: 480px;
  height: calc(100vh - 368px);
  /* background-color: #f0f0f0; */
`;
function Home({ selectedMember, setSelectedMember, letterMap, setLetterMap }) {
  return (
    <StMainContainer>
      <Header
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
      <StLetterContainer>
        <LetterForm
          setLetterMap={setLetterMap}
          selectedMember={selectedMember}
          setSelectedMember={setSelectedMember}
        />
        <LetterList
          letterMap={letterMap}
          setLetterMap={setLetterMap}
          selectedMember={selectedMember}
        />
      </StLetterContainer>
      {/* <Outlet /> */}
      <Footer />
    </StMainContainer>
  );
}

export default Home;

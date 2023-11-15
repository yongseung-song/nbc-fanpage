import React from "react";
import styled from "styled-components";
import bannerBg from "../assets/bannerBg.png";
import bannerLogo from "../assets/bannerLogo.png";
import bgRightImg from "../assets/pyung.png";
import bgLeftImg from "../assets/jang.png";

const StHeader = styled.div`
  background-image: url(${bannerLogo}), url(${bgRightImg}), url(${bgLeftImg}),
    url(${bannerBg});
  background-position: 50% 0%, 100% 30%, 0 50%, 50% 50%;
  background-size: auto 160px, auto 200px, auto 200px, auto 204px;
  background-repeat: no-repeat;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 8px;
  padding: 4px;
  box-sizing: border-box;
`;

const StNavBtn = styled.button`
  border: none;
  padding: 12px;
  cursor: pointer;
`;
function Header() {
  return (
    <>
      <StHeader>
        <StNavBtn onClick={(e) => console.log(e)}>Schedule</StNavBtn>
        <StNavBtn>Letters</StNavBtn>
      </StHeader>
    </>
  );
}

export default Header;

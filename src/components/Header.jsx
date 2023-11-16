import React, { useState } from "react";
import styled from "styled-components";
import bannerBg from "../assets/bannerBg.png";
import bannerLogo from "../assets/bannerLogo.png";
import bgRightImg from "../assets/pyung.png";
import bgLeftImg from "../assets/jang.png";
import { membersMap, members } from "pages/Home";
import { click } from "@testing-library/user-event/dist/click";

const StHeader = styled.div`
  background-image: url(${bannerLogo}), url(${bgRightImg}), url(${bgLeftImg}),
    url(${bannerBg});
  background-position: 50% 0%, 100% 30%, 0 50%, 50% 50%;
  background-size: auto 140px, auto 200px, auto 200px, 100% 204px;
  background-repeat: no-repeat;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 8px;
  padding: 12px;
  box-sizing: border-box;
`;

const StNavBtn = styled.button`
  border: none;
  width: 100px;
  padding: 12px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "yellow" : "white")};
`;
function Header({ selectedMember, setSelectedMember }) {
  const selectButtonHandler = (e) => {
    e.preventDefault();
    const id = +e.target.id;
    setSelectedMember(membersMap.get(id));
    // console.log(e.target.id);
  };

  return (
    <>
      <StHeader>
        {members.map((member, idx) => {
          return (
            <StNavBtn
              selected={member === selectedMember}
              id={idx}
              key={idx}
              onClick={selectButtonHandler}
            >
              {member}
            </StNavBtn>
          );
        })}
      </StHeader>
    </>
  );
}

export default Header;

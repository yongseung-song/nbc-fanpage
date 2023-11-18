import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { Context } from "context/Context";

function Router() {
  const [selectedMember, setSelectedMember] = useState("이장원");
  const [letters, setLetters] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  return (
    <BrowserRouter>
      <Context.Provider
        value={{
          selectedMember,
          setSelectedMember,
          letters,
          setLetters,
          isEditing,
          setIsEditing,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<Detail />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default Router;

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

function Router() {
  const [selectedMember, setSelectedMember] = useState("이장원");
  const [letters, setLetters] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedMember={selectedMember}
              setSelectedMember={setSelectedMember}
              letters={letters}
              setLetters={setLetters}
              isEditing={isEditing}
            />
          }
        />
        <Route
          path="details/:id"
          element={
            <Detail
              letters={letters}
              setLetters={setLetters}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

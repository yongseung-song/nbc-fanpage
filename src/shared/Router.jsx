import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Schedule from "../pages/Schedule";

function Router() {
  const [selectedMember, setSelectedMember] = useState("이장원");
  const [letters, setLetters] = useState({});
  const [isEdited, setIsEdited] = useState(false);
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
              isEdited={isEdited}
              setIsEdited={setIsEdited}
            />
          }
        />
        <Route
          path="details/:id"
          element={
            <Detail
              letters={letters}
              setLetters={setLetters}
              isEdited={isEdited}
              setIsEdited={setIsEdited}
            />
          }
        />
        <Route path="schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

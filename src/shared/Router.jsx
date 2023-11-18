import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Schedule from "../pages/Schedule";

function Router() {
  const [selectedMember, setSelectedMember] = useState("이장원");
  const [letters, setLetters] = useState({});
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
            />
          }
        />
        <Route
          path="details/:id"
          element={<Detail letters={letters} setLetters={setLetters} />}
        />
        <Route path="schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

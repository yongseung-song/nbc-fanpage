import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { Context } from "context/Context";
import { Provider } from "react-redux";
import store from "redux/config/configStore";

function Router() {
  const [selectedMember, setSelectedMember] = useState("이장원");
  const [letters, setLetters] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<Detail />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default Router;

import React from "react";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}
// TODO App 안에 Router 넣기
export default App;

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

export default App;

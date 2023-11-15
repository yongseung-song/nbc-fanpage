import React from "react";
import Header from "./Header";
import Router from "../shared/Router";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default Layout;

import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header/Header";
import Main from "./components/main/Main/Main";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

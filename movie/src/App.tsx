import React from "react";
import Footer from "./components/Footer";
import Main from './components/main';
import Header from "./components/Header";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

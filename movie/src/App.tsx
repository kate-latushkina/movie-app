import React from "react";
import Footer from "./components/Footer";
import Header from "./components/header";
import Main from './components/main';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

import React, { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import DeleteModalContext from "./context/DeleteModalContext";
import DeleteMovieModal from "./components/modals/DeteleMovieModal";
import ViewModalContext from "./context/ViewMovieModalContext";

export const App: React.FC = () => {
  const [context, setContext] = useState(false);
  const [viewMovieContext, setViewMovieContext] = useState(false);

  const toggleShowHeading = () => {
    setContext(!context);
  };

  const toggleShowMovieModal = () => {
    setViewMovieContext(!viewMovieContext);
  };

  return (
    <>
      <ViewModalContext.Provider
        value={{
          viewMovieContext,
          toggleShowMovieModal,
        }}
      >
        <DeleteModalContext.Provider value={{ context, toggleShowHeading }}>
          <DeleteMovieModal />
          <Header />
          <Main />
          <Footer />
        </DeleteModalContext.Provider>
      </ViewModalContext.Provider>
    </>
  );
};

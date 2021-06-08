import React, { useState } from "react";
import DeleteModalContext from "./context/DeleteModalContext";
import DeleteMovieModal from "./components/modals/DeteleMovieModal";
import ViewModalContext from "./context/ViewMovieModalContext";
import HomePage from "./pages/Home";

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
          <HomePage />
        </DeleteModalContext.Provider>
      </ViewModalContext.Provider>
    </>
  );
};

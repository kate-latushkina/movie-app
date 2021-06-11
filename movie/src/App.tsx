import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DeleteModalContext from "./context/DeleteModalContext";
import DeleteMovieModal from "./components/modals/DeteleMovieModal";
import ViewModalContext from "./context/ViewMovieModalContext";
import HomePage from "./pages/Home";
import DetailsPage from "./pages/Details";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ViewMovieModal from "./components/modals/ViewMovieModal";

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
          <ViewMovieModal />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/details" component={DetailsPage} />
            <Redirect to="/" />
          </Switch>
          <Main />
          <Footer />
        </DeleteModalContext.Provider>
      </ViewModalContext.Provider>
    </>
  );
};

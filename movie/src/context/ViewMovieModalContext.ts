import React from "react";

export const ViewMovieContextValue = {
  viewMovieContext: false,
  toggleShowMovieModal() {},
};

const ViewModalContext = React.createContext(ViewMovieContextValue);

export default ViewModalContext;

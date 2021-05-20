import React from "react";

export const initialContextValue = {
  context: false,
  toggleShowHeading() {},
};

const DeleteModalContext = React.createContext(initialContextValue);

export default DeleteModalContext;

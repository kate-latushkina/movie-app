import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import ViewMovieModal from "../../modals/ViewMovieModal";
import ViewModalContext from "../../../context/ViewMovieModalContext";

const AddMovieButton: React.FC = () => {
  const { viewMovieContext, toggleShowMovieModal } = useContext(
    ViewModalContext,
  );

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={toggleShowMovieModal}
      >
        + Add movie
      </Button>
      {viewMovieContext ? <ViewMovieModal /> : null}
    </>
  );
};

export default AddMovieButton;

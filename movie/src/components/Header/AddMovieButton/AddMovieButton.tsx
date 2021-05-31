import React, { Dispatch, useContext } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import ViewMovieModal from "../../modals/ViewMovieModal";
import ViewModalContext from "../../../context/ViewMovieModalContext";
import defaultValueForm from "../../../variables/defaultMovie";
import { MovieActions } from "../../../state/actions/movieAction";

const AddMovieButton: React.FC = () => {
  const { viewMovieContext, toggleShowMovieModal } = useContext(
    ViewModalContext,
  );
  const movieDispatch = useDispatch<Dispatch<MovieActions>>();

  const handleClickAddMovieModal = () => {
    toggleShowMovieModal();
    movieDispatch({
      type: "SET_MOVIE",
      payload: {
        ...defaultValueForm,
      },
    });
  };

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickAddMovieModal}
      >
        + Add movie
      </Button>
      {viewMovieContext ? <ViewMovieModal /> : null}
    </>
  );
};

export default AddMovieButton;

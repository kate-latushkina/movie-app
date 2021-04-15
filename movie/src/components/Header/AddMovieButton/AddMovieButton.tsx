import React from "react";
import { Button } from "@material-ui/core";

const AddMovieButton: React.FC = () => {
  return (
    <Button variant="outlined" color="secondary">
      + Add movie
    </Button>
  );
};

export default AddMovieButton;

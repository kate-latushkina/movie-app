import React, { useCallback, useState } from "react";
import { Button } from "@material-ui/core";
import AddMovieModal from "../../modals/AddMovieModal";

const AddMovieButton: React.FC = () => {
  const [isAddMovieModalShow, setAddMovieModalShow] = useState(false);

  const handleClick = useCallback(() => {
    setAddMovieModalShow(!isAddMovieModalShow);
  }, [isAddMovieModalShow]);

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={handleClick}>
        + Add movie
      </Button>
      {isAddMovieModalShow ? <AddMovieModal onClose={handleClick} /> : null}
    </>
  );
};

export default AddMovieButton;

import { Button, Grid, makeStyles, createStyles } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import "./SearchMovie.scss";
import { useDispatch } from "react-redux";
import {
  getAllMovies,
  getSearchMovies,
} from "../../../state/reducers/actionCreators";

const useStyles = makeStyles(() =>
  createStyles({
    btnDelete: {
      position: "absolute",
      left: "60%",
    },
  }),
);

const SearchMovie: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const changeInputValue = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearchMovie();
    }
  };

  const onSearchMovie = async () => {
    if (!inputValue) {
      dispatch(getAllMovies());
    } else {
      dispatch(getSearchMovies(inputValue));
      resetInpValue();
    }
  };

  const resetInpValue = () => {
    setInputValue("");
  };

  return (
    <SearchPanel container justify="space-between">
      <Input
        className="search-panel_input"
        placeholder="What do you want to watch?"
        autoFocus
        value={inputValue}
        onChange={changeInputValue}
        onKeyUp={handleEnterClick}
      />
      {inputValue ? (
        <Button className={classes.btnDelete} onClick={resetInpValue}>
          X
        </Button>
      ) : null}
      <Button
        variant="contained"
        color="secondary"
        className="search-panel_button"
        onClick={onSearchMovie}
      >
        Search
      </Button>
    </SearchPanel>
  );
};

const SearchPanel = styled(Grid)`
  width: 100%;
  height: 40px;
`;

const Input = styled.input`
  width 70%;
  height: 100%;
  border-radius: 2px;
  border: none;
  position: relative;
`;

export default SearchMovie;

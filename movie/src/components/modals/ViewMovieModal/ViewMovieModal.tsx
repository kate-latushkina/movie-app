import { Modal, TextField, Select, MenuItem } from "@material-ui/core";
import React from "react";
import { ImovieItem } from "../../Main/Posters/components/Poster.types";
import useStyles from "./styles";

interface IViewMovieModalProps {
  onClose: () => void;
  movie: ImovieItem | boolean;
}

const ViewMovieModal: React.FC<IViewMovieModalProps> = (
  props: IViewMovieModalProps,
) => {
  const { onClose, movie } = props;
  const classes = useStyles();
  const genre = ["Select Genre", "Select Genre"];

  return (
    <Modal open className={classes.modalBody} onClose={onClose}>
      <>
        <div className={classes.modalTitleBlock}>
          <h2 className={classes.modalTitle}>
            {movie ? "Edit movie" : "Add movie"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className={classes.closeButton}
          >
            X
          </button>
        </div>
        <form noValidate autoComplete="off" className={classes.form}>
          <TextField
            label="Title"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{
              classes: {
                root: classes.textFieldColor,
              },
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.textFieldColor,
              },
            }}
          />
          <TextField
            label="Release Date"
            type="date"
            variant="outlined"
            defaultValue="2021-01-01"
            className={classes.textField}
            InputLabelProps={{
              classes: {
                root: classes.textFieldColor,
              },
            }}
            InputProps={{
              classes: {
                root: classes.textFieldColor,
                notchedOutline: classes.textFieldColor,
              },
            }}
          />
          <TextField
            label="Movie URL"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{
              classes: {
                root: classes.textFieldColor,
              },
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.textFieldColor,
              },
            }}
          />
          <Select
            defaultValue={genre[0]}
            variant="outlined"
            color="secondary"
            className={classes.textField}
            inputProps={{
              classes: {
                select: classes.textFieldColor,
                iconOutlined: classes.textFieldColor,
              },
            }}
          >
            {genre.map(name => (
              <MenuItem value={name} key={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="Overview"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{
              classes: {
                root: classes.textFieldColor,
              },
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.textFieldColor,
              },
            }}
          />
        </form>

        <div className={classes.buttonsBlock}>
          <button
            type="button"
            className={`${classes.buttonReset} ${classes.btn}`}
          >
            Reset
          </button>
          <button
            type="button"
            className={`${classes.buttonSubmit} ${classes.btn}`}
          >
            Submit
          </button>
        </div>
      </>
    </Modal>
  );
};

export default ViewMovieModal;

import React, { useContext, Dispatch } from "react";
import { Formik } from "formik";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../styles";
import validationModal from "../../../../utils/validation";
import ViewModalContext from "../../../../context/ViewMovieModalContext";
import defaultValueForm from "../../../../variables/defaultMovie";
import { AppState } from "../../../../state/reducers/rootRedicer";
import { MovieActions } from "../../../../state/actions/movieAction";
import addInputToState from "../../../../utils/addInputToState";

const ModalForm: React.FC = () => {
  const classes = useStyles();
  const genreDefault = ["Comedy", "Horror", "Documentary", "Thriller"];
  const { toggleShowMovieModal } = useContext(ViewModalContext);

  const { id } = useSelector((state: AppState) => state.id);
  const { overview } = useSelector((state: AppState) => state.overview);
  const { title } = useSelector((state: AppState) => state.title);
  const { release_date } = useSelector((state: AppState) => state.release_date);
  const { movieUrl } = useSelector((state: AppState) => state.movieUrl);
  const { genre } = useSelector((state: AppState) => state.genre);
  const movieDispatch = useDispatch<Dispatch<MovieActions>>();

  return (
    <Formik
      initialValues={
        Number(id) !== 0
          ? { id, title, overview, release_date, genre, movieUrl }
          : defaultValueForm
      }
      validationSchema={validationModal}
      onSubmit={values => {
        console.log(JSON.stringify(values, null, 2));

        const correct = addInputToState({ ...values });

        movieDispatch({
          type: "SET_MOVIE",
          payload: {
            ...correct,
          },
        });
        toggleShowMovieModal();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            label="ID"
            name="id"
            variant="outlined"
            className={classes.textField}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.id}
            disabled
            InputLabelProps={{
              classes: {
                root: classes.textFieldColor,
                disabled: classes.textFieldColor,
              },
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.textFieldColor,
                disabled: classes.textFieldColor,
              },
              className: classes.textFieldColor,
            }}
          />
          <TextField
            label="Title"
            name="title"
            variant="outlined"
            className={classes.textField}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            InputLabelProps={{
              classes: {
                root: classes.textFieldColor,
              },
            }}
            InputProps={{
              classes: {
                notchedOutline: errors.title
                  ? classes.textFieldError
                  : classes.textFieldColor,
              },
              className: classes.textFieldColor,
            }}
          />
          {errors.title && touched.title && (
            <div className={classes.feedback}>{errors.title}</div>
          )}
          <TextField
            type="date"
            name="release_date"
            variant="outlined"
            className={classes.textField}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.release_date}
            InputLabelProps={{
              classes: {
                root: classes.textFieldColor,
              },
              className: classes.textFieldColor,
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
            name="movieUrl"
            className={classes.textField}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.movieUrl}
            InputLabelProps={{
              classes: {
                root: classes.textFieldColor,
              },
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.textFieldColor,
              },
              className: classes.textFieldColor,
            }}
          />
          {errors.movieUrl && touched.movieUrl && (
            <div className={classes.feedback}>{errors.movieUrl}</div>
          )}
          <FormControl fullWidth>
            <InputLabel
              id="select-label"
              className={classes.inputLabel}
              color="secondary"
            >
              Select Genre
            </InputLabel>
            <Select
              variant="outlined"
              color="secondary"
              name="genre"
              displayEmpty
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.genre}
              inputProps={{
                classes: {
                  root: classes.selectColor,
                  iconOutlined: classes.textFieldColor,
                },
                className: classes.textFieldColor,
              }}
            >
              {genreDefault.map((name: string) => (
                <MenuItem value={name} key={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
            {errors.genre && touched.genre && (
              <div className={classes.feedback}>{errors.genre}</div>
            )}
          </FormControl>
          <TextField
            label="Overview"
            variant="outlined"
            name="overview"
            className={classes.textField}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.overview}
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
              className: classes.textFieldColor,
            }}
          />
          {errors.overview && touched.overview && (
            <div className={classes.feedback}>{errors.overview}</div>
          )}

          <div className={classes.buttonsBlock}>
            <button
              type="button"
              onClick={handleReset}
              className={`${classes.buttonReset} ${classes.btn}`}
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${classes.buttonSubmit} ${classes.btn}`}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ModalForm;

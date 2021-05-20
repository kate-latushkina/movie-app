import React, { useContext } from "react";
import { Formik } from "formik";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import useStyles from "../styles";
import validationModal from "../../../../utils";
import ViewModalContext from "../../../../context/ViewMovieModalContext";
import defaultValueForm from "../../../../variables/defaultMovie";

const ModalForm: React.FC = () => {
  const classes = useStyles();
  const genre = ["Comedy", "Horror", "Documentary", "Thriller"];
  const { toggleShowMovieModal } = useContext(ViewModalContext);

  return (
    <Formik
      initialValues={defaultValueForm}
      validationSchema={validationModal}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(true);
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
              {genre.map((name: string) => (
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

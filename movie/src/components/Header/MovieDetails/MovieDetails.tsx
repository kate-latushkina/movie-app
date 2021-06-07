import { Box, createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectMovie } from "../../../state/reducers/selectors";
import { API_IMG } from "../../../variables/Api";

const useStyles = makeStyles(() =>
  createStyles({
    poster: {
      width: "300px",
      marginRight: "40px",
    },
  }),
);

const MovieDetails: React.FC = () => {
  const classes = useStyles();
  const { id, overview, title, release_date, movieUrl, genre } = useSelector(
    selectMovie,
  );

  return (
    <Box justifyContent="space-between" display="flex" marginTop="30px">
      <img
        src={API_IMG + movieUrl}
        alt={title}
        data-id={id}
        className={classes.poster}
      />
      <div>
        <h2>{title}</h2>
        <span>{String(release_date).slice(0, 4)}</span>
        <p>{overview}</p>
        <p>{genre}</p>
      </div>
    </Box>
  );
};

export default MovieDetails;

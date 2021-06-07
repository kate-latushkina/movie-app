import { Box, createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectMovie } from "../../../state/reducers/selectors";
import { API_IMG } from "../../../variables/Api";
import colors from "../../../variables/colors";

const useStyles = makeStyles(() =>
  createStyles({
    poster: {
      width: "300px",
      marginRight: "40px",
    },
    vote: {
      color: colors.white,
      fontSize: "20px",
      padding: "10px",
      border: `1px solid ${colors.white}`,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
    },
    posterTitle: {
      margin: 0,
    },
  }),
);

const MovieDetails: React.FC = () => {
  const classes = useStyles();
  const {
    id,
    overview,
    title,
    release_date,
    movieUrl,
    genre,
    vote_average,
  } = useSelector(selectMovie);

  return (
    <Box justifyContent="space-between" display="flex" marginTop="30px">
      <img
        src={API_IMG + movieUrl}
        alt={title}
        data-id={id}
        className={classes.poster}
      />
      <div>
        <Box justifyContent="space-between" display="flex" margin="0 0 15px">
          <h2 className={classes.posterTitle}>{title}</h2>
          <span className={classes.vote}>{vote_average}</span>
        </Box>
        <span>{String(release_date).slice(0, 4)}</span>
        <p>{overview}</p>
        <p>{genre}</p>
      </div>
    </Box>
  );
};

export default MovieDetails;

import { Grid, makeStyles, createStyles } from "@material-ui/core";
import React, { Dispatch, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ImovieItem } from "./Poster.types";
import { API_IMG } from "../../../../variables/Api";
import colors from "../../../../variables/colors";
import PosterMenu from "../../../modals/PosterMenu";
import addInputToState from "../../../../utils/addInputToState";
import { setMovie } from "../../../../state/reducers/actionCreators";
import { MovieActions } from "../../../../state/actions/movieAction";
import getGenreName from "../../../../utils/getGenreName";

const useStyles = makeStyles(() =>
  createStyles({
    posterItem: {
      maxWidth: "30%",
      marginBottom: "30px",
      position: "relative",
    },
    posterImg: {
      width: "100%",
      cursor: "pointer",
    },
    releaseDate: {
      border: `1px solid ${colors.darkGrey}`,
      borderRadius: "5px",
      color: colors.darkGrey,
      fontSize: "16px",
      padding: "5px 10px",
      height: "20px",
    },
    genreBlock: {
      display: "flex",
      flexWrap: "wrap",
      padding: 0,
    },
    genre: {
      border: `1px solid ${colors.darkGrey}`,
      borderRadius: "5px",
      color: colors.darkGrey,
      fontSize: "11px",
      padding: "4px 7px",
      listStyle: "none",
      margin: "5px 10px 0 0",
    },
    title: {
      paddingRight: "10px",
    },
  }),
);

const Poster: React.ComponentType<ImovieItem> = ({
  title,
  vote_average,
  poster_path,
  release_date,
  id,
  genre_ids,
  overview,
}: ImovieItem) => {
  const classes = useStyles();
  const [isPosterMenuShow, setPosterMenuShow] = useState(false);
  const movieDispatch = useDispatch<Dispatch<MovieActions>>();
  const correctGenre = getGenreName(genre_ids);

  const mouseLeave = useCallback(() => {
    setPosterMenuShow(false);
  }, [isPosterMenuShow]);

  const mouseEnter = useCallback(() => {
    setPosterMenuShow(true);
  }, [isPosterMenuShow]);

  const setMovieDetails = () => {
    const correctMovie = addInputToState({
      title,
      movieUrl: poster_path,
      release_date,
      id,
      genre: String(correctGenre),
      overview,
      vote_average,
    });
    movieDispatch(setMovie(correctMovie));
  };

  return (
    <Grid item xs={4} className={classes.posterItem}>
      <div onMouseLeave={mouseLeave} onMouseEnter={mouseEnter}>
        <NavLink to="/details">
          <img
            src={API_IMG + poster_path}
            alt={title}
            className={classes.posterImg}
            data-id={id}
            onClick={setMovieDetails}
            role="presentation"
          />
        </NavLink>
        {isPosterMenuShow ? (
          <PosterMenu
            title={title}
            poster_path={poster_path}
            release_date={release_date}
            id={id}
            genre_ids={genre_ids}
            overview={overview}
            vote_average={vote_average}
          />
        ) : null}
      </div>
      <MovieInfo>
        <span className={classes.title}>{title}</span>
        <span className={classes.releaseDate}>{release_date?.slice(0, 4)}</span>
      </MovieInfo>
      <span>{vote_average}</span>
      <ul className={classes.genreBlock}>
        {genre_ids
          ? correctGenre.map((genreName: string) => {
              return (
                <li className={classes.genre} key={genreName + String(id)}>
                  {genreName}
                </li>
              );
            })
          : null}
      </ul>
    </Grid>
  );
};

const MovieInfo = styled(Grid)`
  display: flex;
  justify-content: space-between;
`;

export default Poster;

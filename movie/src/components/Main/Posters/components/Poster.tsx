import { Grid, makeStyles, createStyles } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ImovieItem } from "./Poster.types";
import { API_IMG } from "../../../../variables/Api";
import colors from "../../../../variables/colors";
import PosterMenu from "../../../modals/PosterMenu";
import GENRE from "../../../../variables/genre";

const useStyles = makeStyles(() =>
  createStyles({
    posterItem: {
      maxWidth: "30%",
      marginBottom: "30px",
      position: "relative",
    },
    posterImg: {
      width: "100%",
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

  const mouseLeave = useCallback(() => {
    setPosterMenuShow(false);
  }, [isPosterMenuShow]);

  const mouseEnter = useCallback(() => {
    setPosterMenuShow(true);
  }, [isPosterMenuShow]);

  return (
    <Grid item xs={4} className={classes.posterItem}>
      <div onMouseLeave={mouseLeave} onMouseEnter={mouseEnter}>
        <img
          src={API_IMG + poster_path}
          alt={title}
          className={classes.posterImg}
          data-id={id}
        />
        {isPosterMenuShow ? (
          <PosterMenu
            title={title}
            poster_path={poster_path}
            release_date={release_date}
            id={id}
            genre_ids={genre_ids}
            overview={overview}
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
          ? genre_ids.map((genre: number, index: number) => {
              const ind = index;
              return GENRE.filter(value => value.id === genre).map(
                genreName => {
                  return (
                    <li className={classes.genre} key={id + ind}>
                      {genreName.name}
                    </li>
                  );
                },
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

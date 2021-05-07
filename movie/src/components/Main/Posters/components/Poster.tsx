import { Grid, makeStyles, createStyles } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ImovieItem } from "./Poster.types";
import { API_IMG } from "../../../../variables/Api";
import colors from "../../../../variables/colors";
import PosterMenu from "../../../modals/PosterMenu";

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
        {isPosterMenuShow ? <PosterMenu id={id} /> : null}
      </div>
      <MovieInfo>
        <span className={classes.title}>{title}</span>
        <span className={classes.releaseDate}>{release_date?.slice(0, 4)}</span>
      </MovieInfo>
      <span>{vote_average}</span>
    </Grid>
  );
};

const MovieInfo = styled(Grid)`
  display: flex;
  justify-content: space-between;
`;

export default Poster;

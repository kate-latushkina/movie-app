import { createStyles, makeStyles } from "@material-ui/core";
import React, { Dispatch, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import dotsImage from "../../../img/ellipsis-v-solid.svg";
import { MovieActions } from "../../../state/actions/movieAction";
import { setMovie } from "../../../state/reducers/actionCreators";
import addInputToState from "../../../utils/addInputToState";
import colors from "../../../variables/colors";
import { ImovieItem } from "../../Main/Posters/components/Poster.types";
import PosterMenuList from "../PosterMenuList";

const useStyles = makeStyles(() =>
  createStyles({
    dotsMenu: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "initial",
      border: "none",
    },
    dotsImageBlock: {
      height: "25px",
      width: "25px",
      padding: "5px",
      border: `1px solid ${colors.darkGrey}`,
      borderRadius: "50%",
      backgroundColor: colors.darkGrey,
      cursor: "pointer",
    },
  }),
);

const PosterMenu: React.FC<ImovieItem> = ({
  title,
  poster_path,
  release_date,
  id,
  genre_ids,
  overview,
}: ImovieItem) => {
  const classes = useStyles();
  const [isPosterMenuListShow, setPosterMenuListShow] = useState(false);
  const movieDispatch = useDispatch<Dispatch<MovieActions>>();

  const handleClick = useCallback(() => {
    setPosterMenuListShow(true);
    const correctMovie = addInputToState({
      title,
      movieUrl: poster_path,
      release_date,
      id,
      genre: "Horror",
      overview,
    });
    movieDispatch(setMovie(correctMovie));
  }, [isPosterMenuListShow]);

  const onClose = useCallback(() => {
    setPosterMenuListShow(false);
  }, [isPosterMenuListShow]);

  return (
    <>
      <button type="button" onClick={handleClick} className={classes.dotsMenu}>
        <img src={dotsImage} alt="dots" className={classes.dotsImageBlock} />
      </button>
      {isPosterMenuListShow ? <PosterMenuList onClose={onClose} /> : null}
    </>
  );
};

export default PosterMenu;

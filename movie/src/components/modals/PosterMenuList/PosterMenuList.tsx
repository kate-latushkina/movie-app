import { createStyles, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import DeleteModalContext from "../../../context/DeleteModalContext";
import ViewModalContext from "../../../context/ViewMovieModalContext";
import colors from "../../../variables/colors";

const useStyles = makeStyles(() =>
  createStyles({
    dotsButtonsBlock: {
      width: "120px",
      padding: "0 0 10px",
      margin: 0,
      position: "absolute",
      right: 0,
      top: "10px",
      listStyle: "none",
      backgroundColor: colors.darkGrey,
    },
    closeButton: {
      backgroundColor: "initial",
      marginLeft: "75%",
      border: "none",
      cursor: "pointer",
      color: colors.white,
    },
    dotsButtons: {
      cursor: "pointer",
      padding: "10px",
      color: colors.white,
      fontSize: "20px",
      backgroundColor: "inherit",
      border: "none",
      width: "100%",
      textAlign: "left",
    },
    dotButtonDelete: {
      "&:hover": {
        backgroundColor: "red",
      },
    },
  }),
);

export type IPosterMenuListProps = {
  id: number;
  onClose: () => void;
};

const PosterMenuList: React.FC<IPosterMenuListProps> = (
  props: IPosterMenuListProps,
) => {
  const { id, onClose } = props;
  const { toggleShowHeading } = useContext(DeleteModalContext);
  const { toggleShowMovieModal } = useContext(ViewModalContext);
  const classes = useStyles();

  console.log("PosterMenu", id);

  return (
    <>
      <div className={classes.dotsButtonsBlock}>
        <button type="button" className={classes.closeButton} onClick={onClose}>
          X
        </button>
        <button
          type="button"
          className={classes.dotsButtons}
          onClick={toggleShowMovieModal}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={toggleShowHeading}
          className={`${classes.dotButtonDelete} ${classes.dotsButtons}`}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default PosterMenuList;

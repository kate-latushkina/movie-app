import { createStyles, makeStyles } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import dotsImage from "../../../img/ellipsis-v-solid.svg";
import colors from "../../../variables/colors";

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
    dotsListBlock: {
      width: "100px",
      padding: "0 0 10px",
      margin: 0,
      position: "absolute",
      right: 0,
      top: "10px",
      listStyle: "none",
      backgroundColor: colors.darkGrey,
      color: colors.white,
    },
    closeButton: {
      backgroundColor: "initial",
      marginLeft: "75%",
      border: "none",
      cursor: "pointer",
      color: colors.white,
    },
    dotsList: {
      cursor: "pointer",
      padding: "5px",
    },
    dotListDelete: {
      "&:hover": {
        backgroundColor: "red",
      },
    },
  }),
);

type IPosterMenuProps = {
  id: number;
};

const PosterMenu: React.FC<IPosterMenuProps> = ({ id }: IPosterMenuProps) => {
  const classes = useStyles();
  const [isPosterMenuListShow, setPosterMenuListShow] = useState(false);

  const PosterMenuList: React.FC = () => {
    const onClose = useCallback(() => {
      setPosterMenuListShow(false);
    }, [isPosterMenuListShow]);
    console.log("PosterMenu", id);

    return (
      <ul className={classes.dotsListBlock}>
        <button type="button" className={classes.closeButton} onClick={onClose}>
          X
        </button>
        <li className={classes.dotsList}>Edit</li>
        <li className={`${classes.dotsList} ${classes.dotListDelete}`}>
          Delete
        </li>
      </ul>
    );
  };

  const handleClick = useCallback(() => {
    setPosterMenuListShow(true);
  }, [isPosterMenuListShow]);

  return (
    <>
      <button type="button" onClick={handleClick} className={classes.dotsMenu}>
        <img src={dotsImage} alt="dots" className={classes.dotsImageBlock} />
      </button>
      {isPosterMenuListShow ? <PosterMenuList /> : null}
    </>
  );
};

export default PosterMenu;

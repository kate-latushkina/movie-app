import { createStyles, makeStyles } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import dotsImage from "../../../img/ellipsis-v-solid.svg";
import colors from "../../../variables/colors";
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

interface IPosterMenuProps {
  id: number;
}

const PosterMenu: React.FC<IPosterMenuProps> = ({ id }: IPosterMenuProps) => {
  const classes = useStyles();
  const [isPosterMenuListShow, setPosterMenuListShow] = useState(false);

  const handleClick = useCallback(() => {
    setPosterMenuListShow(true);
  }, [isPosterMenuListShow]);

  const onClose = useCallback(() => {
    setPosterMenuListShow(false);
  }, [isPosterMenuListShow]);

  return (
    <>
      <button type="button" onClick={handleClick} className={classes.dotsMenu}>
        <img src={dotsImage} alt="dots" className={classes.dotsImageBlock} />
      </button>
      {isPosterMenuListShow ? (
        <PosterMenuList id={id} onClose={onClose} />
      ) : null}
    </>
  );
};

export default PosterMenu;

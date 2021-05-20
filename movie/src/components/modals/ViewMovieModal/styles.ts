import { createStyles, makeStyles } from "@material-ui/core";
import colors from "../../../variables/colors";

const useStyles = makeStyles(() =>
  createStyles({
    modalBody: {
      width: "70%",
      maxWidth: "1000px",
      padding: "40px 40px",
      border: `1px solid ${colors.darkGrey}`,
      backgroundColor: colors.darkGrey,
      margin: "50px auto",
    },
    modalTitle: {
      fontSize: "23px",
      textTransform: "uppercase",
      color: colors.white,
      fontWeight: "lighter",
    },
    modalTitleBlock: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    closeButton: {
      backgroundColor: "initial",
      border: "none",
      cursor: "pointer",
      color: colors.white,
    },
    inputLabel: {
      color: colors.white,
      margin: "15px",
    },
    textField: {
      width: "100%",
      marginTop: "20px",
    },
    textFieldColor: {
      color: colors.white,
      borderColor: `${colors.white} !important`,
    },
    textFieldError: {
      borderColor: `${colors.pink} !important`,
    },
    selectColor: {
      border: `1px solid ${colors.white}`,
      "&:hover": {
        borderColor: colors.white,
      },
    },
    buttonsBlock: {
      marginTop: "30px",
    },
    buttonReset: {
      backgroundColor: "inherit",
      marginRight: "20px",
      color: colors.pink,
    },
    buttonSubmit: {
      color: colors.white,
      backgroundColor: colors.pink,
    },
    btn: {
      width: "200px",
      fontSize: "16px",
      padding: "15px 10px",
      border: `1px solid ${colors.pink}`,
      borderRadius: "5px",
      cursor: "pointer",
    },
    feedback: {
      color: colors.pink,
      fontSize: "18px",
    },
  }),
);
export default useStyles;

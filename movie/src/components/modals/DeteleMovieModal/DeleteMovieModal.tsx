import { createStyles, makeStyles, Modal } from "@material-ui/core";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import DeleteModalContext from "../../../context/DeleteModalContext";
import { selectMovie } from "../../../state/reducers/selectors";
import { deleteMovie } from "../../../variables/Api";
import colors from "../../../variables/colors";

const useStyles = makeStyles(() =>
  createStyles({
    modalBody: {
      width: "50%",
      maxWidth: "800px",
      margin: "300px auto",
      padding: "10px 60px",
      backgroundColor: colors.darkGrey,
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
    modalText: {
      color: colors.white,
      fontWeight: "lighter",
    },
    closeButton: {
      backgroundColor: "initial",
      border: "none",
      cursor: "pointer",
      color: colors.white,
      fontSize: "20px",
    },
    buttonSubmit: {
      color: colors.white,
      backgroundColor: colors.pink,
      width: "200px",
      fontSize: "16px",
      padding: "15px 10px",
      textTransform: "uppercase",
      border: `1px solid ${colors.pink}`,
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "20px",
    },
  }),
);

const DeleteMovieModal: React.FC = () => {
  const classes = useStyles();
  const { context, toggleShowHeading } = useContext(DeleteModalContext);
  const { id } = useSelector(selectMovie);

  const handleDelete = () => {
    console.log(`movie with id ${id} was deleted`);
    deleteMovie.then();
    toggleShowHeading();
  };

  return (
    <>
      {context ? (
        <Modal open className={classes.modalBody} onClose={toggleShowHeading}>
          <>
            <div className={classes.modalTitleBlock}>
              <h2 className={classes.modalTitle}>Delete movie</h2>
              <button
                type="button"
                className={classes.closeButton}
                onClick={toggleShowHeading}
              >
                X
              </button>
            </div>

            <div className={classes.modalText}>
              Are you sure you want to delete this movie?
            </div>
            <button
              type="button"
              className={classes.buttonSubmit}
              onClick={handleDelete}
            >
              Confirm
            </button>
          </>
        </Modal>
      ) : null}
    </>
  );
};

export default DeleteMovieModal;

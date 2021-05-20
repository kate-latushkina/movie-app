import { Modal } from "@material-ui/core";
import React, { useContext } from "react";
import ViewModalContext from "../../../context/ViewMovieModalContext";
import ModalForm from "./components/ModalForm";
import useStyles from "./styles";

const ViewMovieModal: React.FC = () => {
  const classes = useStyles();
  const { toggleShowMovieModal } = useContext(ViewModalContext);

  return (
    <Modal open className={classes.modalBody} onClose={toggleShowMovieModal}>
      <>
        <div className={classes.modalTitleBlock}>
          <h2 className={classes.modalTitle}>Add movie</h2>
          <button
            type="button"
            onClick={toggleShowMovieModal}
            className={classes.closeButton}
          >
            X
          </button>
        </div>
        <ModalForm />
      </>
    </Modal>
  );
};

export default ViewMovieModal;

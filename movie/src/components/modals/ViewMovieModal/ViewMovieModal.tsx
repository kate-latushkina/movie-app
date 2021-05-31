import { Modal } from "@material-ui/core";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import ViewModalContext from "../../../context/ViewMovieModalContext";
import { AppState } from "../../../state/reducers/rootRedicer";
import ModalForm from "./components/ModalForm";
import useStyles from "./styles";

const ViewMovieModal: React.FC = () => {
  const classes = useStyles();
  const { toggleShowMovieModal } = useContext(ViewModalContext);
  const { id } = useSelector((state: AppState) => state.id);

  return (
    <Modal open className={classes.modalBody} onClose={toggleShowMovieModal}>
      <>
        <div className={classes.modalTitleBlock}>
          <h2 className={classes.modalTitle}>
            {Number(id) !== 0 ? "Edit movie" : "Add movie"}
          </h2>
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

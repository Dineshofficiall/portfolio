import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Alert.css";
// import { WebViewModal } from "../../../viewModal/Projects/WebViewModal";

interface AlertProp {
  show: boolean;
  projectId: number;
  modalTile: string;
  modalBody: string | null;
  handleAlertClose: () => void;
  togglePage: (number: number) => void;
}

const Alert: React.FC<AlertProp> = ({
  show,
  projectId,
  modalTile,
  modalBody,
  handleAlertClose,
  togglePage,
}) => {
  // const {selectedProject} = WebViewModal();
  return (
    <>
      <Modal
        show={show}
        onHide={handleAlertClose}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTile}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" onClick={handleAlertClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => togglePage(projectId)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Alert;

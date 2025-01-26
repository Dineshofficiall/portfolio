import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface AlertProp {
  show: boolean;
  modalTile: string;
  modalBody: string;
  handleAlertClose: () => void;
  handleAlertShow: () => void;
}

const Alert: React.FC<AlertProp> = ({
  show,
  modalTile,
  modalBody,
  handleAlertClose,
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleAlertClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTile}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleAlertClose}>
            Cancel
          </Button>
          <Button variant="error">Ok</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Alert;

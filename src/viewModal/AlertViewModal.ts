import { useState } from "react";

interface AlertProp {
  show: boolean;
  handleAlertClose: () => void;
  handleAlertShow: () => void;
}

export const AlertViewModal = (): AlertProp => {
  const [show, setShow] = useState(false);

  const handleAlertClose = () => setShow(false);
  const handleAlertShow = () => setShow(true);
  return {
    show,
    handleAlertClose,
    handleAlertShow,
  };
};

import React from "react";
import Button from "react-bootstrap/Button";

interface ButtonProp {
  defaultText: string;
  reDirectToWeb: (link: string) => void;
  reDirectLink: string;
}

export const ButtonComponent: React.FC<ButtonProp> = ({
  defaultText,
  reDirectToWeb,
  reDirectLink,
}) => {
  
  return (
    <Button
      variant="success"
      className="rounded-3 mx-2"
      onClick={() => reDirectToWeb(reDirectLink)}
    >
      {defaultText}
    </Button>
  );
};

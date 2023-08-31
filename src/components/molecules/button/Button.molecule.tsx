import React from "react";

import classes from "./button.module.css";

type ButtonProps = {
  text: string;
  transparent?: boolean;
  icon?: JSX.Element;
  reverse?: boolean;
};

const ButtonMolecule: React.FC<ButtonProps> = ({
  text,
  reverse,
  transparent,
  icon,
}) => {
  return (
    <button
      className={`${classes.button} ${reverse ? classes.reverse : ""} ${
        transparent ? classes.transparent : ""
      }`}
    >
      {icon}
      {text}
    </button>
  );
};

export default ButtonMolecule;

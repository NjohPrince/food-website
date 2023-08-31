import React from "react";

import classes from "./button.module.css";

type ButtonProps = {
  text: string;
  icon?: JSX.Element;
};

const ButtonMolecule: React.FC<ButtonProps> = ({ text, icon }) => {
  return (
    <button className={classes.button}>
      {icon}
      {text}
    </button>
  );
};

export default ButtonMolecule;

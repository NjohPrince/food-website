import React from "react";

import classes from "./landing.module.css";

import FoodiLogoIcon from "../../components/atoms/icons/FoodiLogo.icon";

const LandingPage = () => {
  return (
    <div className={classes.home}>
      <FoodiLogoIcon />
    </div>
  );
};

export default LandingPage;

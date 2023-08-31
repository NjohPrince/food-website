import React from "react";

import classes from "./landing.module.css";

import NavbarOrganism from "../../components/organisms/navbar/Navbar.organism";
import ButtonMolecule from "../../components/molecules/button/Button.molecule";

const LandingPage = () => {
  return (
    <div className={classes.home}>
      <NavbarOrganism />

      <ButtonMolecule text="Order Now" />
    </div>
  );
};

export default LandingPage;

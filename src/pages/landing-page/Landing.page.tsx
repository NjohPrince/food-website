import React from "react";

import classes from "./landing.module.css";

import NavbarOrganism from "../../components/organisms/navbar/Navbar.organism";
import HeroTemplate from "../../components/templates/home/hero/Hero.template";

const LandingPage = () => {
  return (
    <div className={classes.home}>
      <NavbarOrganism />
      <HeroTemplate />
    </div>
  );
};

export default LandingPage;

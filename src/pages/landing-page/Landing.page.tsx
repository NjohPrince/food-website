import React from "react";


import classes from "./landing.module.css";
import { Categories } from "../../components/organisms/categories/categories.organism";
import NavbarOrganism from "../../components/organisms/navbar/Navbar.organism";
import HeroTemplate from "../../components/templates/home/hero/Hero.template";
import { SpecialDishers } from "../../components/organisms/specialdishes/specialdishes.organisms";
import { Testimonials } from "../../components/organisms/testimonials/testimonials.organism";

const LandingPage = () => {
  return (
    <div className={classes.home}>
      <NavbarOrganism />
      <HeroTemplate />
      <Categories />
      <SpecialDishers />
      <Testimonials />
    </div>
  );
};

export default LandingPage;

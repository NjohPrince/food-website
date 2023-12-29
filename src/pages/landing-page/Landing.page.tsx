import React from "react";


import classes from "./landing.module.css";
import { Categories } from "../../components/organisms/categories/categories.organism";
import NavbarOrganism from "../../components/organisms/navbar/Navbar.organism";
import HeroTemplate from "../../components/templates/home/hero/Hero.template";
import { SpecialDishers } from "../../components/organisms/specialdishes/specialdishes.organisms";
import { Testimonials } from "../../components/organisms/testimonials/testimonials.organism";
import { StoryAndServices } from "../../components/organisms/storyandservices/storyandservices.organism";
import { Footer } from "../../components/organisms/footer/footer.organism";

const LandingPage = () => {
  return (
    <div className={classes.home}>
      <NavbarOrganism />
      <HeroTemplate />
      <Categories />
      <SpecialDishers />
      <Testimonials />
      <StoryAndServices />
      <Footer />
    </div>
  );
};

export default LandingPage;

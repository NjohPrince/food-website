import React from "react";

import classes from "./hero.module.css";

import { Assets } from "../../../../assets";
import ButtonMolecule from "../../../molecules/button/Button.molecule";
import PlayIcon from "../../../atoms/icons/Play.icon";

const HeroTemplate = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.text}>
        <h1>
          Dive into Delights Of Delectable <span>Food</span>
        </h1>
        <h2>
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </h2>
        <div className={classes.btns}>
          <ButtonMolecule text="Order Now" />
          <ButtonMolecule
            transparent
            reverse
            text="Watch Video"
            icon={
              <span style={{ marginTop: "24px" }}>
                <PlayIcon size="96" />
              </span>
            }
          />
        </div>
      </div>
      <div>
        <img src={Assets.home.hero} alt="hero image" />
      </div>
    </section>
  );
};

export default HeroTemplate;

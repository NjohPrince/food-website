import React from "react";
import { NavLink } from "react-router-dom";

// stylesheet
import styles from "./navbar.module.css";
import { menuItems } from "../../repository/menu-data";

const Navbar = () => {
  return (
    <nav role="navigation" className={styles.navbar}>
      <div className=""></div>
    </nav>
  );
};

export default Navbar;

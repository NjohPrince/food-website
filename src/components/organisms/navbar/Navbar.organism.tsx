import React from "react";
import { Link } from "react-router-dom";

// stylesheet
import styles from "./navbar.module.css";

import { menuItems } from "../../repository/menu-data";
import FoodiLogoIcon from "../../atoms/icons/FoodiLogo.icon";
import SearchIcon from "../../atoms/icons/Search.icon";
import ShoppingCartIcon from "../../atoms/icons/ShoppingCart.icon";
import ButtonMolecule from "../../molecules/button/Button.molecule";
import PhoneCallIcon from "../../atoms/icons/PhoneCall.icon";
import CaretIcon from "../../atoms/icons/Caret.icon";
import { Container } from "../../molecules/container/container.molecules";

const NavbarOrganism = () => {
  return (
    <Container>
      <nav role="navigation" className={styles.navbar}>
        <div className={styles.logo}>
          <FoodiLogoIcon />
        </div>
        <ul className={styles.menu}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url}>
                  {item.title} {item.hasIcon ? <CaretIcon /> : ""}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.call__to__actions}>
          <SearchIcon />
          <ShoppingCartIcon />
          <ButtonMolecule text="Contact" icon={<PhoneCallIcon size="20" />} />
        </div>
      </nav>
    </Container>
  );
};

export default NavbarOrganism;

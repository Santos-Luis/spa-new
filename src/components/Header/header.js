import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";
import UniplacesLogo from "../../assets/images/uniplaces-logo.svg";

const Header = () => {
  return(
    <header className={styles.header}>
      <Link to="/">
        <UniplacesLogo />
      </Link>
      <div className={styles.header__right}>
        123
      </div>
    </header>
  );
}

export default Header;

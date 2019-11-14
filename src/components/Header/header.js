import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";
import UniplacesLogo from "@assets/images/svgs/uniplaces-logo.svg";

const Header = () => (
  <header className={styles.header}>
    <Link to="/" className={styles.header__elements} key="logo" aria-label="Homepage">
      <UniplacesLogo />
    </Link>
    <ul>
      <li key="how-it-works">
        <a href="https://find.uniplaces.com/how-it-works/">
          How it works
        </a>
      </li>
      <li key="list-your-place">
        <a href="http://rent.staging-uniplaces.com">
          List your place
        </a>
      </li>
      <li key="assisted-booking">
        <a href="https://find.uniplaces.com/find-accommodation-europe/">
          Assisted booking
        </a>
      </li>
      <li key="help">
        <a href="https://help.uniplaces.com/help/s">
          Help
        </a>
      </li>
      <li key="log-in">
        <a href="#">
          Log in
        </a>
      </li>
      <li key="sign-up">
        <a href="#">
          Sign up
        </a>
      </li>
    </ul>
    
  </header>
)

export default Header;

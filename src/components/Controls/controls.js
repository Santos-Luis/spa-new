import React from "react";
import { Link } from "gatsby";
import scrollTo from 'gatsby-plugin-smoothscroll';
import styles from "./controls.module.scss";
import ArrowUp from "@assets/images/svgs/arrow-up.svg";
import UniplacesIcon from "@assets/images/svgs/uniplaces-icon.svg";

const Controls = () => (
  <div className={styles.controls}>
    <Link to="/" className={styles.controls__button} aria-label="Homepage">
      <UniplacesIcon />
    </Link>
    <button
      aria-label="Scroll to top"
      className={styles.controls__button}
      onClick={ () => { scrollTo('#top-of-page') } }
    >
      <ArrowUp />
    </button>
  </div>
);

export default Controls;

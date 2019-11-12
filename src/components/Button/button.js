import React from "react";
import { Link } from "gatsby";
import styles from "./button.module.scss";

const Button = ({ href, text }) => {
  return(
    <Link to={href} className={styles.button}> {text} </Link>
  )
}

export default Button;

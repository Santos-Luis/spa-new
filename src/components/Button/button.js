import React from "react";
import styles from "./button.module.scss";

const Button = ({ href, text }) => {
  return(
    <a href={href} className={styles.button}>
      {text}
    </a>
  )
}

export default Button;

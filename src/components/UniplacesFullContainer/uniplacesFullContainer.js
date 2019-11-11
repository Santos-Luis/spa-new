import React from "react";
import styles from "./uniplacesFullContainer.module.scss";

const UniplacesFullContainer = ({ children }) => {
  return (
    <div className={styles.uniplacesFullContainer}>
      <div className={styles.uniplacesContainer}>
        {children}
      </div>
    </div>
  );
}

export default UniplacesFullContainer;

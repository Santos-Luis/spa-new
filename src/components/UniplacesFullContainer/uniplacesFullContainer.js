import React from "react";
import styles from "./uniplacesFullContainer.module.scss";

const UniplacesFullContainer = ({ children }) => (
  <div className={styles.uniplacesFullContainer}>
    <div className={styles.uniplacesContainer}>
      <section className={styles.accommodationCountries}>
        {children}
      </section>
    </div>
  </div>
)

export default UniplacesFullContainer;

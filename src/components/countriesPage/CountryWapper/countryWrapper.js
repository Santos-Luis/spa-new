import React from "react";
import styles from "./countryWrapper.module.scss";

const CountryWrapper = ({ children, countryName }) => {
  return (
    <div className={`${styles.country} ${styles.fullBorderBottom}`}>
      <h1 className={styles.country__title}>
        <span>Hello </span>
        {countryName}
      </h1>
      {children}
    </div>
  );
}

export default CountryWrapper;

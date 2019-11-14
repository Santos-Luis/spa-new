import React from "react";
import styles from "./heroImage.module.scss";

const HeroImage = () => {
  return(
    <div className={styles.hero}>
      <div className={styles.hero__claim}>
        <h1 className={styles.hero__claim__heading}>The world we are in.</h1>
        <h2 className={styles.hero__claim__subheading}>Discover it. Book it.</h2>
      </div>
    </div>
  );
}

export default HeroImage;

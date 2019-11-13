import React from "react";
import Img from "gatsby-image";
import styles from "./countrySection.module.scss";

const CountrySection = (props) => {
  const {
    data: {
      capitalName,
      currencySymbol,
      currencyCode,
      callingCode,
      html,
      countryImage,
      flagImage
    }
  } = props;

  return (
    <div className={styles.intro} key={capitalName}>
      <div className={styles.intro__image}>
        <Img 
          imgStyle={{ objectFit: 'fill' }}
          style={{ height: '100%', width: '100%'}}
          fluid={countryImage.childImageSharp.fluid}
        />
      </div>
      <div className={styles.intro__info}>
        <div className={styles.intro__info__attributes}>
          <div className={styles.intro__info__attributes__leftBlock}>
            <div className={styles.intro__info__attributes__leftBlock__key}>
              <p>Capital city </p>
              <p>Currency </p>
              <p>Calling code </p>
            </div>
            <div className={styles.intro__info__attributes__leftBlock__value}>
              <p>{capitalName}</p>
              <p>{currencySymbol} <span>({currencyCode})</span></p>
              <p>{callingCode}</p>
            </div>
          </div>
          <div className={styles.intro__info__attributes__rightBlock}>
            <Img
              imgStyle={{ objectFit: 'fill' }}
              style={{ height: '100%', width: '100%'}} 
              fluid={flagImage.childImageSharp.fluid}
            />
          </div>    
        </div>
        <div 
          className={styles.intro__info__description}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export default CountrySection;

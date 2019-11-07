import React from "react";
import Button from "../../Button/button"
import styles from "./footerSection.module.scss";

const footersSection = ({ data: { countryName, node } }) => {
  const { html, frontmatter: { countrySlug } } = node;
  const text = `More about ${countryName}`;

  return html
    ? (
      <div className={styles.footer}>
        <div 
          className={styles.footer__description}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Button href={countrySlug} text={text}/>
      </div>
    ) : (
      <div className={styles.footerWithoutDescription}>
        <Button href={countrySlug} text={text}/>
      </div>
    )
}

export default footersSection;

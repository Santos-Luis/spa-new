import React from "react";
import Button from "@components/Button/button"
import styles from "./footerSection.module.scss";

const footersSection = ({ data: { countryName, node } }) => {
  const { html, frontmatter: { countrySlug } } = node;

  if (!html) {
    return (
      <div className={styles.footerWithoutDescription}>
        <Button href={ `/accommodation/${countrySlug}` } text={ `More about ${countryName}` }/>
      </div>
    );
  }

  return (
    <div className={styles.footer}>
      <div 
        className={styles.footer__description}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Button href={ `/accommodation/${countrySlug}` } text={ `More about ${countryName}` }/>
    </div>
  );
}

export default footersSection;

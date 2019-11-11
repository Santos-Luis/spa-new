import React from "react";
import Img from "gatsby-image";
import styles from "./citySection.module.scss";

const CitiesSection = ({ data: cityNodes }) => {
  const createTable = () => {
    const table = [];

    for (const cityNode of cityNodes) {
      const {
        node: {
          frontmatter: {
            name,
            slug,
            image
          } 
        }
      } = cityNode;
      const title = `Accommodation in ${name}`;
      const href = `accommodation/${slug}`;

      table.push(
        <li key={slug}>
          <a href={href} title={title}>
            <Img 
              imgStyle={{ objectFit: 'fill' }} 
              style={{ height: '100%', width: '100%' }} 
              sizes={image.childImageSharp.sizes}
            />
            <h4> {name} </h4>
          </a>
        </li>
      );
    }

    return table;
  }

  return (
    <ul className={styles.citiesSection}>
      {createTable()}
    </ul>
  );
}

export default CitiesSection;

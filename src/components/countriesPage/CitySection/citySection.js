import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styles from "./citySection.module.scss";

const CitiesSection = ({ data: cityNodes }) => {
  return (
    <ul className={styles.citiesSection}>
      {
        cityNodes.map(({ node: { frontmatter: { name, slug, image } } }) => (
          <li key={slug}>
            <Link to={`/accommodation/${slug}`} title={`Accommodation in ${name}`}>
              <Img 
                imgStyle={{ objectFit: 'fill' }} 
                style={{ height: '100%', width: '100%' }} 
                fluid={image.childImageSharp.fluid}
              />
              <h4> {name} </h4>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export default CitiesSection;

import React from "react"
import Img from "gatsby-image"

const CitiesSection = ({ data: cityNodes }) => {
  const createTable = () => {
    const table = [];

    for (const cityNode of cityNodes) {
      console.log(cityNode);
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

      table.push(  
        <li>
          <a href={slug} title={title}>
            <Img 
              imgStyle={{ objectFit: 'fill' }} 
              style={{ height: '100%', width: '100%' }} 
              fluid={image.childImageSharp.fluid}
            />
            <h4> {name} </h4>
          </a>
        </li>
      )
    }

    return table;
  }

  return (
    <ul className="country__cities-section">
      {createTable()}
    </ul>
  );
}

export default CitiesSection;

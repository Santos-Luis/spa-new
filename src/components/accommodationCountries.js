import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const AccommodationCountries = () => {
  const data = useStaticQuery(graphql`
    query AccommodationCountriesQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const createTable = () => {
    let table = [];

    for (let i = 0; i < 1; i++) {
      let children = [];
      for (let j = 0; j < 1; j++) {
        children.push(
          <div class="country__row--intro">
            <div class="row__block">
              <img src="https://cdn-static-new.uniplaces.com/spa/cities/united-kingdom/united-kingdom-medium.jpg" class="medium-width" />
            </div>
            <div class="row__block row__block--info">
              <div class="left-block">
                <span>Capital city</span>
                <span>Currency</span>
                <span>Calling code</span>
              </div>
              <div class="right-block">
                <span>London</span>
                <span data-after="(GBP)">£</span>
                <span>+44</span>
              </div>
              <div class="flag flag--uk"></div>
              <p>Attracted by the great universities and the promise of future prospects, people from all over the world come to study in the UK. Halls of residence, student societies and sports clubs are at the centre of the British student way of life. These help every student meet other people with similar interests, and a pint or two later, they’ll be your new best friends.</p>
              </div>
          </div>
        );
      }
      
      table.push(
        <div class="country full-border-bottom">
          <h1 class="country__title">
            <span>Hello</span>
            United Kingdom
          </h1>
          {children}
        </div>
      );
    }
    return table;
  }
  
  return(
    <div>
      {createTable()}
    </div>
  );
}

export default AccommodationCountries;

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CountrySection from "../components/countrySection"
import CitiesSection from "../components/citiesSection"

import './accommodation.scss'

const IndexPage = ({ 
  data: { 
    countries: { edges: countryEdges }, 
    cities : { edges: cityEdges }
  } 
}) => {
  const createTable = () => {
    const table = [];

    for (const countryEdge of countryEdges) {
      const { 
        node: {
          html,
          frontmatter: countryFrontmatter,
        }
      } = countryEdge;
      const { countryCode, name } = countryFrontmatter;
      
      const countrySectionData = { html, ...countryFrontmatter };
      const citySectionData = cityEdges.filter(
        function({ node: { frontmatter: { countryCode } } }) {
          return this === countryCode;
        },
        countryCode
      );

      table.push(
        <div className="country full-border-bottom">
          <h1 className="country__title">
            <span>Hello </span>
            {name}
          </h1>
          <CountrySection data={countrySectionData} />
          <CitiesSection data={citySectionData}/>
        </div>
      )
    }

    return table;
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="page-wrapper">
        <div className="hero">
          <div className="hero__claim">
            <h1 className="hero__claim__heading"> The world we are in. </h1>
            <h2 className="hero__claim__subheading"> Discover it. Book it. </h2>
          </div>
        </div>

        <div className="uniplaces-full-container">
          <div className="uniplaces-container">
            <section className="accommodation-countries">
              {createTable()}
            </section>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export const fluidImage = graphql`
  fragment flagsImageFrag on File {
    publicURL
    childImageSharp {
      sizes(maxWidth: 30 ) {
        srcSet
      }
    }
  },
  fragment countriesImageFrag on File {
    publicURL
    childImageSharp {
      sizes(maxWidth: 700 ) {
        srcSet
      }
    }
  },
  fragment citiesImageFrag on File {
    publicURL
    childImageSharp {
      sizes(maxWidth: 400 ) {
        srcSet
      }
    }
  }
`;

export const countriesQuery = graphql`
  query {
    countries: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/markdown-pages\/countries/"} }
    ) {
      edges {
        node {
          html
          frontmatter {
            countryCode
            name
            capitalName
            currencySymbol
            currencyCode
            callingCode
            countryImage {
              ...countriesImageFrag
            }
            flagImage {
              ...flagsImageFrag
            }
          }

        }
      }
    },
    cities: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/markdown-pages\/cities/"} }
    ) {
      edges {
        node {
          frontmatter {
            countryCode
            name
            slug
            image {
              ...citiesImageFrag
            }
          }
        }
      }
    }
  }
`;

export default IndexPage

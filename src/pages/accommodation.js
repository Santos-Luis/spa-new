import React from "react";
import { graphql } from "gatsby";
import CitySection from "../components/countriesPage/CitySection/citySection";
import CountrySection from "../components/countriesPage/CountrySection/countrySection";
import CountryWrapper from "../components/countriesPage/CountryWapper/countryWrapper";
import FooterSection from "../components/countriesPage/FooterSection/footerSection";
import HeroImage from "../components/countriesPage/HeroImage/heroImage";
import Layout from "../components/layout";
import SEO from "../components/seo";
import UniBreadcrumb from "../components/UniBreadcrumb/uniBreadcrumb";
import UniplacesFullContainer from "../components/UniplacesFullContainer/uniplacesFullContainer";

const IndexPage = ({ 
  data: { 
    countries: { edges: countryEdges }, 
    cities: { edges: cityEdges },
    footers: { edges: footerEdges }
  },
  pageContext: {
    breadcrumb: { crumbs },
  },
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
      const { countryCode, name: countryName } = countryFrontmatter;
      
      const countrySectionData = { html, ...countryFrontmatter };
      const citySectionData = cityEdges.filter(
        function({ node: { frontmatter: { countryCode } } }) {
          return this === countryCode;
        },
        countryCode
      );
      const footerSectionForCountry = footerEdges.filter(
        function({ node: { frontmatter: { countryCode } } }) {
          return this === countryCode;
        },
        countryCode
      );
      const footerSectionData = { ...footerSectionForCountry[0], countryName };

      table.push(
        <CountryWrapper key={countryName} countryName={countryName} children={(
          <React.Fragment>
            <CountrySection data={countrySectionData} />
            <CitySection data={citySectionData}/>
            <FooterSection data={footerSectionData} />
          </React.Fragment>
        )} />
      );
    }

    return table;
  }

  return (
    <Layout>
      <SEO title="Accommodation" />
      <HeroImage />
      <UniplacesFullContainer children={(
        <React.Fragment>
          <UniBreadcrumb label="Apartments for rent: Rooms and Student Accommodation - Uniplaces" crumbs={crumbs} />
          {createTable()}
        </React.Fragment>
      )} />
    </Layout>
  );
}

export const countriesQuery = graphql`
  query {
    countries: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/markdown-pages\/countriesPage\/countries/"} }
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
              publicURL
              childImageSharp {
                fluid(maxWidth: 700) {
                  srcSet
                }
              }
            }
            flagImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 30) {
                  srcSet
                }
              }
            }
          }

        }
      }
    },
    cities: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/markdown-pages\/countriesPage\/cities/"} }
    ) {
      edges {
        node {
          frontmatter {
            countryCode
            name
            slug
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 400) {
                  srcSet
                }
              }
            }
          }
        }
      }
    },
    footers: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/markdown-pages\/countriesPage\/footers/"} }
    ) {
      edges {
        node {
          html
          frontmatter {
            countryCode
            countrySlug
          }
        }
      }
    }
  }
`;

export default IndexPage

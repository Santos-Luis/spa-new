import React from "react";
import { graphql } from "gatsby";
import loadable from '@loadable/component'
import CountryWrapper from "../../components/countriesPage/CountryWapper/countryWrapper";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import UniplacesFullContainer from "../../components/UniplacesFullContainer/uniplacesFullContainer";

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

      const CitySection = loadable(() => import('../../components/countriesPage/CitySection/citySection'));
      const CountrySection = loadable(() => import('../../components/countriesPage/CountrySection/countrySection'));
      const FooterSection = loadable(() => import('../../components/countriesPage/FooterSection/footerSection'));;

      table.push(
        <CountryWrapper key={countryName} countryName={countryName} children={(
          <React.Fragment>
            <CountrySection data={countrySectionData} />
            <CitySection data={citySectionData} />
            <FooterSection data={footerSectionData} />
          </React.Fragment>
        )} />
      );
    }

    return table;
  }

  const Controls = loadable(() => import('../../components/Controls/controls'));
  const HeroImage = loadable(() => import('../../components/countriesPage/HeroImage/heroImage'));
  const UniBreadcrumb = loadable(() => import('../../components/UniBreadcrumb/uniBreadcrumb'));

  return (
    <Layout>
      <SEO title="Accommodation" />
      <HeroImage />
      <UniplacesFullContainer children={(
        <React.Fragment>
          <UniBreadcrumb label="Apartments for rent: Rooms and Student Accommodation - Uniplaces" crumbs={crumbs} />
          {createTable()}
          <Controls />
        </React.Fragment>
      )} />
    </Layout>
  );
}

export const countriesQuery = graphql`
  query {
    countries: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] }
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
                sizes(maxWidth: 580) {
                  srcSet
                  src
                  sizes
                  aspectRatio
                }
              }
            }
            flagImage {
              publicURL
              childImageSharp {
                sizes(maxWidth: 30) {
                  srcSet
                  src
                  sizes
                  aspectRatio
                }
              }
            }
          }
        }
      }
    },
    cities: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___name] }
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
                sizes(maxWidth: 400) {
                  srcSet
                  src
                  sizes
                  aspectRatio
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

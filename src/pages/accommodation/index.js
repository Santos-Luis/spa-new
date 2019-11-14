import React from "react";
import { graphql } from "gatsby";
import CitySection from "@components/countriesPage/CitySection/citySection";
import Controls from "@components/Controls/controls";
import CountrySection from "@components/countriesPage/CountrySection/countrySection";
import CountryWrapper from "@components/countriesPage/CountryWapper/countryWrapper";
import FooterSection from "@components/countriesPage/FooterSection/footerSection";
import HeroImage from "@components/countriesPage/HeroImage/heroImage";
import Layout from "@components/layout";
import SEO from "@components/seo";
import UniBreadcrumb from "@components/UniBreadcrumb/uniBreadcrumb";
import UniplacesFullContainer from "@components/UniplacesFullContainer/uniplacesFullContainer";

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
  const list = countryEdges.map( ({ node: { html, frontmatter: countryFrontmatter } }) => {
    const { countryCode, name: countryName } = countryFrontmatter;
    const countrySectionData = { html, ...countryFrontmatter };

    const citySectionData = cityEdges.filter(
      ({ node: { frontmatter: { countryCode: cityCountryCode } } }) => {
        return cityCountryCode === countryCode
      }
    );
    const footerSectionForCountry = footerEdges.filter(
      ({ node: { frontmatter: { countryCode: footerEdgeCountryCode } } }) => {
        return footerEdgeCountryCode === countryCode
      }
    );
    console.log(footerSectionForCountry);
    const footerSectionData = { ...footerSectionForCountry[0], countryName };

    return (
      <CountryWrapper key={countryName} countryName={countryName} children={(
        <React.Fragment>
          <CountrySection data={countrySectionData} />
          <CitySection data={citySectionData} />
          <FooterSection data={footerSectionData} />
        </React.Fragment>
      )} />
    );
  });

  return (
    <Layout>
      <SEO title="Accommodation" />
      <HeroImage />
      <UniplacesFullContainer children={(
        <React.Fragment>
          <UniBreadcrumb label="Apartments for rent: Rooms and Student Accommodation - Uniplaces" crumbs={crumbs} />
          {list}
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
              childImageSharp {
                fluid(maxWidth: 576, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            flagImage {
              childImageSharp {
                fluid(maxWidth: 30, quality: 100) {
                  ...GatsbyImageSharpFluid
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
              childImageSharp {
                fluid(maxWidth: 384, quality: 100) {
                  ...GatsbyImageSharpFluid
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

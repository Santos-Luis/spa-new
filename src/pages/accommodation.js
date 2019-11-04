import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CountrySection from "../components/countrySection"

import './accommodation.scss'

const IndexPage = ({ data }) => {
  const createTable = () => {
    let table = [];
    const { allMarkdownRemark: { edges } } = data;

    for (const edge of edges) {
      const { 
        node: {
          html,
          frontmatter,
        }
      } = edge;
      const { countryCode } = frontmatter;
      const countryFlag = data[`${countryCode}Flag`];
      
      const countrySectionData = { html, countryFlag, ...frontmatter };

      table.push(
        <CountrySection data={countrySectionData} />
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

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            countryCode
            name
            imageUrl
            capitalName
            currencySymbol
            currencyCode
            callingCode
          }
        }
      }
    },
    deFlag: file(relativePath: { eq: "flags/de.png" }) {
      childImageSharp {
        fluid(maxWidth: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    esFlag: file(relativePath: { eq: "flags/es.png" }) {
      childImageSharp {
        fluid(maxWidth: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    frFlag: file(relativePath: { eq: "flags/fr.png" }) {
      childImageSharp {
        fluid(maxWidth: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    gbFlag: file(relativePath: { eq: "flags/gb.png" }) {
      childImageSharp {
        fluid(maxWidth: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    itFlag: file(relativePath: { eq: "flags/it.png" }) {
      childImageSharp {
        fluid(maxWidth: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    ptFlag: file(relativePath: { eq: "flags/pt.png" }) {
      childImageSharp {
        fluid(maxWidth: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import './accommodation.scss'

const IndexPage = ({ data }) => {
  const createTable = () => {
    let table = [];
    const { allMarkdownRemark: { edges } } = data;

    for (const edge of edges) {
      const { 
        node: {
          html,
          frontmatter: {
            name,
            imageUrl,
            capitalName,
            currency,
            callingCode
          }
        }
      } = edge;

      table.push(
        <div className="country full-border-bottom">
          <h1 className="country__title">
            <span>Hello </span>
            {name}
          </h1>
          <div className="country__row--intro">
            <div className="row__block">
              <img src={imageUrl} className="medium-width" />
            </div>
            <div className="row__block row__block--info">
              <div className="left-block">
                <span>Capital city </span>
                <span>Currency </span>
                <span>Calling code </span>
              </div>
              <div className="right-block">
                <span>{capitalName}</span>
                <span data-after="(GBP)">{currency}</span>
                <span>{callingCode}</span>
              </div>
              <div className="flag flag--uk"></div>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
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

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            name
            imageUrl
            capitalName
            currency
            callingCode
          }
        }
      }
    }
  }
`

export default IndexPage

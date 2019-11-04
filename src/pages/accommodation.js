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
            currencySymbol,
            currencyCode,
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
          <div className="country__intro">
            <div className="country__intro__image">
              <img src={imageUrl} className="medium-width" />
            </div>
            <div className="country__intro__info">
              <div className="country__intro__info__attributes">
                <div className="country__intro__info__attributes__left-block">
                  <div className="country__intro__info__attributes__left-block__key">
                    <p>Capital city </p>
                    <p>Currency </p>
                    <p>Calling code </p>
                  </div>
                  <div className="country__intro__info__attributes__left-block__value">
                    <p>{capitalName}</p>
                    <p>{currencySymbol} <span>({currencyCode})</span></p>
                    <p>{callingCode}</p>
                  </div>
                </div>
                <div className="country__intro__info__attributes__right-block">
                  <p> <image></image> </p>
                </div>
              </div>
              <div className="country__intro__info__description">
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
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
            currencySymbol
            currencyCode
            callingCode
          }
        }
      }
    }
  }
`

export default IndexPage

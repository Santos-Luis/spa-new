import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AccommodationCountries from "../components/accommodationCountries"

import './accommodation.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="page-wrapper">
      <div class="hero">
        <div class="hero__claim">
          <h1 className="hero__claim__heading"> The world we are in. </h1>
          <h2 className="hero__claim__subheading"> Discover it. Book it. </h2>
        </div>
      </div>

      <div class="uniplaces-full-container">
        <div class="uniplaces-container">
          <section class="accommodation-countries">
            <AccommodationCountries /> 
          </section>
        </div>
      </div>
    

    </div>
  </Layout>
)

export default IndexPage

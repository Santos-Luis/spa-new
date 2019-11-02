import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="page-wrapper">
      <div class="hero">
        <div class="hero__claim">
          <h1 class="hero__claim__heading"> The world we are in. </h1>
          <h2 class="hero__claim__subheading"> Discover it. Book it. </h2>
        </div>
      </div>
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage

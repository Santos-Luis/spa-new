import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import loadable from '@loadable/component'
import Header from "./Header/header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const Footer = loadable(() => import('./Footer/footer'));

  return (
    <div id="top-of-page">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main> 
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

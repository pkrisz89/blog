/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {ReactNode} from "react"
import {StaticQuery, graphql} from "gatsby"

import "./layout.css"

interface Props {
  children : ReactNode;
  fullHeight
    ?
    : Boolean;
}

const Layout = ({
  children,
  fullHeight = false
} : Props) => (<StaticQuery
  query={graphql ` query SiteTitleQuery { site { siteMetadata { title } } } `}
  render={() => (
  <div
    style={{
    margin: `0 auto`,
    maxWidth: 960,
    display: `flex`,
    justifyContent: 'center',
    alignItems: 'center',
    height: fullHeight
      ? `100vh`
      : `auto`,
    padding: `1.45rem`
  }}>
    <main style={{}}>{children}</main>
  </div>
)}/>)

export default Layout

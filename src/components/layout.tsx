/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import "./layout.css";

interface Props {
  children: ReactNode;
  fullHeight?: Boolean;
}

const LayoutComponent = styled.div<Props>`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.fullHeight ? "100vh" : "auto")};
  padding: 1.45rem;
`;

const Layout = ({ children, fullHeight = false }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <LayoutComponent fullHeight={fullHeight}>
        <main>{children}</main>
      </LayoutComponent>
    )}
  />
);

export default Layout;

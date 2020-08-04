import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FFECE8;
    font-family: 'lato', serif;
    color: #01161E;

  }
  h1,h2,h3,h4 {
    font-family: 'Montserrat', sans-serif;
    color: #2F323A;
    margin: 1.414em 0 0.5em;
	  font-weight: 700;
	  line-height: 1.2;
    letter-spacing: -.45rem;
    font-size: 6.853em;/
    width: 90vw;
    text-shadow: rgba(0, 0, 0, 0.1) -7.38px 1.475px;
    text-align: center;
  }
`;

const Navigation = styled.div`
    position: absolute;
    left: 2em;
    top 1em;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: space-between;
    width: 18em;
`;

const StyledLink = styled(Link)`
  :link,
  :visited,
  :hover,
  :active {
    color: #01161e;
    text-decoration: none;
  }
`;

export default () => (
  <Navigation>
    <GlobalStyle />
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/blog">Blog</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
  </Navigation>
);

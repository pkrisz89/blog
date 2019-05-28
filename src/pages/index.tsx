import React from "react"
import styled, {createGlobalStyle} from "styled-components"
import "lato-font"
import "typeface-montserrat"
import Layout from "../components/layout"

const GlobalStyle = createGlobalStyle `
  body {
    background-color: #FFECE8;
    font-family: 'lato-font', serif;
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
`

const Thin = styled.h2 `
  font-weight: normal;
  letter-spacing: 1;
  font-size: 5em;
  margin: 0;
  text-shadow: none;
  text-align: center;
`

const Name = styled.h1 `
  margin: 0;
`;

const Divider = styled.hr `
  height: .25em;
  background-color: #2F323A;
  margin: 0;
`

export default() => {
  return (
    <Layout>
      <GlobalStyle/>
      <Name>Kris Pinter.</Name>
      <Divider/>
      <Thin>JavaScript developer</Thin><br/>
    </Layout>
  )
}
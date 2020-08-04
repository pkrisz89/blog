import React from "react";
import styled from "styled-components";
import "lato-font";
import "typeface-montserrat";
import Layout from "../components/layout";
import Nav from "../components/nav";

const Name = styled.h1`
  margin: 0;
`;

const Divider = styled.hr`
  height: 0.25em;
  background-color: #2f323a;
  margin: 0;
`;

const Thin = styled.h2`
  font-weight: normal;
  letter-spacing: 1;
  font-size: 5em;
  margin: 0;
  text-shadow: none;
  text-align: center;
`;

export default () => {
  return (
    <React.Fragment>
      <Nav />
      <Layout fullHeight>
        <Name>Kris Pinter.</Name>
        <Divider />
        <Thin>JavaScript developer</Thin>
        <br />
      </Layout>
    </React.Fragment>
  );
};

import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Nav from "../components/nav";

const ContentBox = styled.div`
  background: #f9f9f9;
  padding: 5%;
  box-shadow: rgba(0, 0, 0, 0.1) 15px 15px;
  font-size: 19px;
  line-height: 1.6;
  color: #555;

  & > p:first-child:first-letter {
    font-weight: 800;
    font-size: 60px;
    line-height: 1;
    float: left;
    padding-right: 10px;
    padding-left: 2px;
    text-transform: uppercase;
`;

const About = () => (
  <React.Fragment>
    <Nav />
    <Layout>
      <h1>About</h1>
      <ContentBox>
        <p>
          Welcome to my blog. My name is Kris Pinter. I am a Javascript
          developer, based in Manchester, UK.
        </p>
        <p>
          I am originally from Hungary and I have lived in the UK since 2012. I
          have a first class honours degree in BSc Web Development from
          Manchester Metropolitan University.
        </p>
        <p>
          I am currently employed at Booking.com as a Software engineer, working
          with NodeJS/TypeScript/React. I am passionate about building highly
          usable interfaces following user centered design process.
        </p>
        <p>
          I have made this space with the intention of creating a catalog of my
          thoughts, experiments and learnings in the world of Javascript
          development. If you have any queries please feel free to contact me.
        </p>
      </ContentBox>
    </Layout>
  </React.Fragment>
);

export default About;

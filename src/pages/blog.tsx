import React from "react";
import { Link, graphql } from "gatsby";
import styled, { css } from "styled-components";
import Layout from "../components/layout";
import Nav from "../components/nav";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 7px 7px;
  box-sizing: border-box;
  flex: 1 0 100%;
  margin: 1rem 0.25em;
  padding: 1rem;

  @media screen and (min-width: 40em) {
    flex: 1 0 calc(25% - 1em);
  }
`;

const TitleStyle = css`
  margin: 0;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-shadow: none;
  text-decoration: none;
  text-align: left;
`;

const Title = styled.h3`
  ${TitleStyle}
`;

const LinkTitle = styled(Link)`
  ${TitleStyle}
`;

const Date = styled.span`
  color: #bbb;
  font-size: 0.5rem;
  display: block;
`;

const Divider = styled.hr`
  margin: 1rem 0;
`;

export default ({ data }: any) => {
  return (
    <React.Fragment>
      <Nav />
      <Layout>
        <div>
          <h4>Blog</h4>
          <p>
            {data.allMarkdownRemark.totalCount}
            Posts
          </p>
          <Container>
            {data.allMarkdownRemark.edges.map(({ node }: any) => (
              <Card key={node.id}>
                <LinkTitle to={node.fields.slug} className="card-title">
                  <Title>
                    {node.frontmatter.title}
                    <Date>— {node.frontmatter.date}</Date>
                  </Title>
                </LinkTitle>
                <Divider />
                <p>{node.excerpt}</p>
              </Card>
            ))}
          </Container>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

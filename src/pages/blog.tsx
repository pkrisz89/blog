import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav";

export default ({ data }: any) => {
  return (
    <React.Fragment>
      <Nav />
      <Layout>
        <div>
          <h4
            style={{
              display: "inline-block",
              borderBottom: "1px solid"
            }}>
            Blog
                    </h4>
          <p>{data.allMarkdownRemark.totalCount}
                        Posts</p>
          {data
            .allMarkdownRemark
            .edges
            .map(({ node }: any) => (
              <div key={node.id}>
                <Link to={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: "0.1rem",
                      fontSize: "1rem",
                      letterSpacing: ".1rem",
                      textShadow: "none"
                    }}>
                    {node.frontmatter.title}{" "}
                    <span
                      style={{
                        color: "#bbb"
                      }}>— {node.frontmatter.date}</span>
                  </h3>
                </Link>
              </div>
            ))}
        </div>
      </Layout>
    </React.Fragment>

  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
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
`

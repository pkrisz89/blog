import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav";
import "./blog.css";

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
          <div className="card-container">
            {data
              .allMarkdownRemark
              .edges
              .map(({ node }: any) => (
                <div key={node.id} className="card">
                  <Link to={node.fields.slug} className="card-title">
                    <h3
                      className="card-title--inner">
                      {node.frontmatter.title}{" "}
                      <span
                        className="card-date">— {node.frontmatter.date}</span>
                    </h3>
                  </Link>
                  <hr className="card-divider" />
                  <p>{node.excerpt}</p>
                </div>
              ))}
          </div>
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
`

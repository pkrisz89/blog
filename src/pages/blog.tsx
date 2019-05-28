import React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"

export default({data} : any) => {
    return (
        <Layout>
            <div>
                <h1
                    style={{
                    display: "inline-block",
                    borderBottom: "1px solid"
                }}>
                    Amazing Pandas Eating Things
                </h1>
                <h4>{data.allMarkdownRemark.totalCount}
                    Posts</h4>
                {data
                    .allMarkdownRemark
                    .edges
                    .map(({node} : any) => (
                        <div key={node.id}>
                            <Link to={node.fields.slug}>
                                <h3
                                    style={{
                                    marginBottom: "0.25rem"
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
    )
}

export const query = graphql `
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

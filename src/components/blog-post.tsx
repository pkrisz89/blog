import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav";

export default({data} : any) => {
  const post = data.markdownRemark
  return ( <> <Nav/> < Layout > <h1>{post.frontmatter.title}</h1> < div className = "inner" dangerouslySetInnerHTML = {{ __html: post.html }}/>
    </Layout > </>)
}

export const query = graphql `
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

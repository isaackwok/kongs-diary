import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import hljs from "highlight.js"
import "highlight.js/scss/atom-one-dark.scss"

const BlogPost = ({ data }) => {
    const blogPost = data.contentfulBlogPost
    useEffect(() => {
        hljs.highlightAll()
    }, [])
    return (
        <article className="prose prose-green">
            <h1>{blogPost.title}</h1>
            <h3>{blogPost.publishDate}</h3>
            <MDXRenderer className="prose">{blogPost.body.childMdx.body}</MDXRenderer>
        </article>
    )
}

export const query = graphql`
  query ($id: String) {
    contentfulBlogPost (id: {eq: $id}) {
        id
        title
        publishDate
        tags
        heroImage {
            description
            gatsbyImageData
        }
        body {
            childMdx {
                body
            }
        }
    }
  }
`
export default BlogPost
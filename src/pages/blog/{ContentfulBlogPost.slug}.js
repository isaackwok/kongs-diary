import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import hljs from "highlight.js"
import "highlight.js/scss/atom-one-dark.scss"
import { ArrowLeftIcon } from "@heroicons/react/solid"
import { Link } from "gatsby";

const BlogPost = ({ data }) => {
    const blogPost = data.contentfulBlogPost
    useEffect(() => {
        hljs.highlightAll()
    }, [])
    return (
        <div className="flex flex-col gap-4 max-w-prose mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 hover:text-primary">
                <ArrowLeftIcon className="h-4 w-4 inline" />
                Blogs
            </Link>
            <article className="prose prose-green">
                <h1>{blogPost.title}</h1>
                <h3>{blogPost.publishDate}</h3>
                <MDXRenderer className="prose">{blogPost.body.childMdx.body}</MDXRenderer>
            </article>
        </div>
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
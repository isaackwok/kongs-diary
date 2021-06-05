import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import hljs from "highlight.js"
import "highlight.js/scss/atom-one-dark.scss"
import { ArrowLeftIcon } from "@heroicons/react/solid"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const BlogPost = ({ data }) => {
    const blogPost = data.contentfulBlogPost
    useEffect(() => {
        hljs.highlightAll()
    }, [])
    return (
        <div className="flex flex-col gap-4 max-w-prose mx-auto">
            <Helmet>
                <title>{`${blogPost.title} ｜ ${process.env.SITE_TITLE}`}</title>
            </Helmet>
            <Link to="/blog" className="inline-flex items-center gap-2 hover:text-primary">
                <ArrowLeftIcon className="h-4 w-4 inline" />
                Blogs
            </Link>
            <article className="prose prose-green mt-4">
                <h1>
                    {blogPost.title}
                    <div className="mt-2 text-base text-gray-400 font-normal">{blogPost.publishDate}</div>
                </h1>

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
        publishDate(locale: "zh-tw", fromNow: true)
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
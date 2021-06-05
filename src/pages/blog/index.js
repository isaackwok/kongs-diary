import React from "react"
import BlogCard from "../../components/page/blog/blogCard";
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {blogPosts.map(blog => (
        <BlogCard blog={blog.node} key={blog.node.slug} />
      ))}
    </div>
  )
}

export const query = graphql`
query MyQuery {
    allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
      edges {
        node {
          id
          title
          tags
          slug
          publishDate(locale: "zh-tw", fromNow: true)
          heroImage {
            title
            gatsbyImageData(height: 100, width: 100, cropFocus: CENTER, placeholder: BLURRED)
          }
description {
    description
}
        }
      }
    }
  }
`

export default BlogPage
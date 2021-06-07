import React from "react"
import BlogCard from "../../components/page/blog/blogCard"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

const BlogPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <>
      <Helmet>
        <title>{`Blog | ${process.env.SITE_TITLE}`}</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {blogPosts.map(blog => (
          <BlogCard blog={blog.node} key={blog.node.slug} />
        ))}
      </div>
    </>
  )
}

export const query = graphql`
query {
    allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
      edges {
        node {
          id
          title
          tags
          slug
          publishDate(formatString: "YYYY-MM-DD")
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
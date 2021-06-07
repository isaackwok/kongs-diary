import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import InformationCard from '../components/global/informationCard'
import BlogCard from "../components/page/blog/blogCard"
import React from 'react'

const HomePage = ({ data }) => {
  const info = { ...data.allContentfulAbout.edges[0].node }
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <>
      <Helmet>
        <title>{process.env.SITE_TITLE}</title>
      </Helmet>
      <div className="flex flex-col mx-auto divide-y">
        <InformationCard info={info} />
        <div className="py-4">
          <p className="mt-4 mb-8 text-xl text-center text-gray-500">Blogs</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {blogPosts.map(blog => (
              <BlogCard blog={blog.node} key={blog.node.slug} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
query {
  allContentfulAbout {
    edges {
      node {
        name
        company
        jobTitle
        location
        eMail
        facebook
        instagram
        github
        avator {
          title
          gatsbyImageData
        }
      }
    }
  }
  allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, limit: 6) {
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
export default HomePage
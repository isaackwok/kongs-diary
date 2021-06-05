import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import InformationCard from '../components/global/informationCard'
import React from 'react'

const AboutPage = ({ data }) => {
  const info = { ...data.allContentfulAbout.edges[0].node }
  return (
    <div className="flex flex-col max-w-prose mx-auto divide-y">
      <Helmet>
        <title>{`About | ${process.env.SITE_TITLE}`}</title>
      </Helmet>
      <InformationCard info={info} />
      <article className="py-4 prose">
        <MDXRenderer>{info.intro.childMdx.body}</MDXRenderer>
      </article>
    </div>
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
        intro {
          childMdx {
            body
          }
        }
        avator {
          title
          gatsbyImageData
        }
      }
    }
  }
}
`

export default AboutPage
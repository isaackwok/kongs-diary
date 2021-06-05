import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import InformationCard from '../components/global/informationCard'
import React from 'react'

const HomePage = ({ data }) => {
  const info = { ...data.allContentfulAbout.edges[0].node }
  return (
    <div className="flex flex-col max-w-prose mx-auto divide-y">
      <Helmet>
        <title>{process.env.SITE_TITLE}</title>
      </Helmet>
      <InformationCard info={info} />
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
        avator {
          title
          gatsbyImageData
        }
      }
    }
  }
}
`
export default HomePage
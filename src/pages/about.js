import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const AboutPage = ({ data }) => {
  const info = { ...data.allContentfulAbout.edges[0].node }
  return (
    <div className="flex flex-col max-w-prose mx-auto divide-y">
      <Helmet>
        <title>{`About | ${process.env.SITE_TITLE}`}</title>
      </Helmet>
      <Information info={info} />
      <article className="py-4 prose">
        <MDXRenderer>{info.intro.childMdx.body}</MDXRenderer>
      </article>
    </div>
  )
}

const Information = ({ info }) => {
  const avator = getImage(info.avator)
  return (
    <div className="p-4 flex md:flex-col items-center gap-4">
      <div>
        <GatsbyImage
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-primary shadow-lg"
          image={avator}
          alt={info.name} />
      </div>
      <div className="flex flex-col text-sm text-gray-500 md:items-center">
        <p className="text-xl text-gray-700">{info.name}</p>
        <p>{info.jobTitle}</p>
        <p>{info.company}</p>
        <p>{info.location}</p>
        <p className="mt-4 flex gap-4 text-xl">
          <a className="hover:text-primary" target="_blank" rel="noreferrer" href={`mailto:${info.eMail}`}><FontAwesomeIcon icon={faEnvelope} /></a>
          <a className="hover:text-primary" target="_blank" rel="noreferrer" href={info.github}><FontAwesomeIcon icon={faGithub} /></a>
          <a className="hover:text-primary" target="_blank" rel="noreferrer" href={info.facebook}><FontAwesomeIcon icon={faFacebook} /></a>
        </p>
      </div>
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
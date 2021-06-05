import React from 'react'
import { Helmet } from "react-helmet"

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{process.env.SITE_TITLE}</title>
      </Helmet>
      <h1>Coming soon!</h1>
    </>
  )
}

export default HomePage
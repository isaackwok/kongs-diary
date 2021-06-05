import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import React from 'react'

const InformationCard = ({ info }) => {
    const avator = getImage(info.avator)
    return (
        <div className="p-4 flex md:flex-col items-center">
            <div className="mb-4">
                <GatsbyImage
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-lg"
                    imgClassName="object-cover rounded-full"
                    image={avator}
                    alt={info.name} />
            </div>
            <div className="flex flex-col text-sm text-gray-500 md:items-center px-4">
                <p className="text-xl text-gray-700">{info.name}</p>
                <p>{info.jobTitle}</p>
                <p>{info.company}</p>
                <p>{info.location}</p>
                <p className="mt-4 flex text-xl">
                    <a className="hover:text-primary mr-4" target="_blank" rel="noreferrer" href={`mailto:${info.eMail}`}><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a className="hover:text-primary mr-4" target="_blank" rel="noreferrer" href={info.github}><FontAwesomeIcon icon={faGithub} /></a>
                    <a className="hover:text-primary mr-4" target="_blank" rel="noreferrer" href={info.facebook}><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className="hover:text-primary mr-4" target="_blank" rel="noreferrer" href={info.instagram}><FontAwesomeIcon icon={faInstagram} /></a>
                </p>
            </div>
        </div>
    )
}

export default InformationCard
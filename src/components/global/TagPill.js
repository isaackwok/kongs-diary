import React from 'react'

const TagPill = ({ tagName }) => {
    return (
        <span className="px-2 py-1 mr-1 bg-gray-100 rounded-full">{tagName}</span>
    )
}

export default TagPill
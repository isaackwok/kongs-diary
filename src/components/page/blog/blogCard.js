import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const BlogCard = ({ blog }) => {
    const heroImage = getImage(blog.heroImage)
    return (
        <div className="flex justify-between">
            <div className="flex flex-col pr-4 justify-between">
                <div>
                    <Link to={`/blog/${blog.slug}`}>
                        <p className="text-lg hover:underline">{blog.title}</p>
                    </Link>
                    <p className="text-gray-500 text-justify tracking-tight leading-tight">{blog.description.description}</p>
                </div>
                <p className="mt-4 text-sm text-gray-400">{blog.publishDate}</p>
            </div>
            <GatsbyImage className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] self-center rounded" image={heroImage} alt={blog.heroImage.title} />
        </div>
    )
}

export default BlogCard
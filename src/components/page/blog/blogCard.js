import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import TagPill from "../../global/TagPill";

const BlogCard = ({ blog }) => {
    const heroImage = getImage(blog.heroImage)
    return (
        <div className="flex justify-between">
            <div className="flex flex-col pr-4 justify-between">
                <div>
                    <Link to={`/blog/${blog.slug}`}>
                        <p className="hover:underline">{blog.title}</p>
                    </Link>
                    <p className="text-gray-500 text-justify tracking-tight leading-tight text-sm">{blog.description.description}</p>
                </div>
                <p className="mt-4 text-xs text-gray-400">{blog.publishDate}．{blog.tags.map(tag => <TagPill tagName={tag} key={tag} />)}</p>
            </div>
            <GatsbyImage className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] self-center" imgClassName="rounded" image={heroImage} alt={blog.heroImage.title} />
        </div>
    )
}

export default BlogCard
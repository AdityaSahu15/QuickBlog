import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer overflow-hidden group flex flex-col h-full"
    >
      {/* Blog Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-video w-full object-cover transform group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Blog Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Category Tag */}
        <div className="flex items-center mb-3">
          <span className="text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </div>

        {/* Title */}
        <h5 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
          {title}
        </h5>

        {/* Description Preview */}
        <p
          className="text-sm text-gray-600 line-clamp-3 flex-grow"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }}
        ></p>

        {/* Read More */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-blue-600 text-sm font-medium group-hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

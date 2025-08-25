import React from 'react'
import { assets } from '../../assets/assets';

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border-y border-gray-300 text-sm sm:text-base">
      {/* Index */}
      <th className="px-2 py-3 sm:py-4 text-left">{index}</th>

      {/* Title */}
      <td className="px-2 py-3 sm:py-4 font-medium break-words max-w-[150px] sm:max-w-none">
        {title}
      </td>

      {/* Date - hidden on small screens */}
      <td className="px-2 py-3 sm:py-4 hidden md:table-cell">
        {BlogDate.toDateString()}
      </td>

      {/* Publish Status */}
      <td className="px-2 py-3 sm:py-4 hidden sm:table-cell">
        <p className={`${blog.isPublished ? "text-green-700" : "text-orange-600"} font-semibold`}>
          {blog.isPublished ? 'Published' : 'Unpublished'}
        </p>
      </td>

      {/* Actions */}
      <td className="px-2 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
        <button
          className={`px-2 py-1 rounded-md text-xs sm:text-sm font-medium border 
          ${blog.isPublished ? "border-orange-500 text-orange-600" : "border-green-600 text-green-700"}`}
        >
          {blog.isPublished ? 'Unpublish' : 'Publish'}
        </button>
        <img
          src={assets.cross_icon}
          className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition"
          alt="delete"
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;

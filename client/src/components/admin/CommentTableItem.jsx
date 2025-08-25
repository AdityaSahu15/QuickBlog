import React from 'react'
import { assets } from '../../assets/assets';

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt } = comment;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border border-gray-200/60 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white/60 backdrop-blur-sm">
      {/* Blog, Name, Comment */}
      <td className="px-4 py-4 rounded-l-lg">
        <b className="text-gray-700">Blog:</b> {blog.title}
        <br className="max-sm:hidden" />
        <br className="max-sm:hidden" />
        <b className="text-gray-700">Name:</b> {comment.name}
        <br />
        <b className="text-gray-700">Comment:</b> {comment.content}
      </td>

      {/* Date - hidden on small screens */}
      <td className="px-4 py-4 max-sm:hidden text-gray-500">
        {BlogDate.toLocaleDateString()}
      </td>

      {/* Actions */}
      <td className="px-4 py-4 rounded-r-lg">
        <div className="flex items-center gap-3 max-sm:flex-col max-sm:items-start">
          {!comment.isApproved ? (
            <img
              src={assets.tick_icon}
              className="w-6 cursor-pointer hover:scale-110 transition-transform"
              alt="Approve"
            />
          ) : (
            <p className="text-green-600 font-medium">Approved</p>
          )}
          <img
            src={assets.bin_icon}
            className="w-6 cursor-pointer hover:scale-110 transition-transform"
            alt="Delete"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;

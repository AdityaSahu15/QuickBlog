import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt,_id } = comment;
  const BlogDate = new Date(createdAt);

  const {axios} =useAppContext();

  const approveComment=async()=>{
    try {
      const {data} = await axios.post(`/api/admin/approve-comment`,{id:_id})
      if(data.success)
      {
        toast.success(data.message)
        fetchComments()
      }
      else
      {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteComment=async()=>{
    try {
      const {data}= await axios.post(`/api/admin/delete-comment`,{id:_id})
      if(data.success)
      {
        toast.success(data.message)
        fetchComments()
      }
      else
      {
        toast.error(data.message)
      }
    } catch (error) {
        toast.error(error.message)
    }
  }

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
            <img onClick={approveComment}
              src={assets.tick_icon}
              className="w-6 cursor-pointer hover:scale-110 transition-transform"
              alt="Approve"
            />
          ) : (
            <p className="text-green-600 font-medium">Approved</p>
          )}
          <img onClick={deleteComment}
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

import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

  const {axios}=useAppContext();

  const deleteBlog=async()=>{
    const confirm=window.confirm('Are you sure you want to delete this blog ?')
    if(!confirm)
    return
  try {
    const {data}=await axios.post(`/api/blog/delete`,{id:blog._id})
    if(data.success)
    {
      toast.success(data.message)
      await fetchBlogs()
    }
    else 
    {
      toast.error(data.message)
    }
  } catch (error) {
     toast.error(error.message)
  }
  }

  const togglePublish=async()=>{
   try {
     const {data}=await axios.post(`/api/blog/toggle-publish`,{id:blog._id})
     if(data.success)
    {
      toast.success(data.message)
      await fetchBlogs()
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
        <button onClick={togglePublish}
          className={`px-2 py-1 rounded-md text-xs sm:text-sm font-medium border cursor-pointer
          ${blog.isPublished ? "border-orange-500 text-orange-600" : "border-green-600 text-green-700"}`}
        >
          {blog.isPublished ? 'Unpublish' : 'Publish'}
        </button>
        <img onClick={deleteBlog}
          src={assets.cross_icon}
          className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition"
          alt="delete"
        />
      </td>
    </tr>
  ); 
};

export default BlogTableItem;

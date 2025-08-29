import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';
import { useAppContext } from '../../context/AppContext';

const ListBlog = () => {

  const [blogs, setBlogs] = useState([]);

  const{axios}=useAppContext()

  const fetchBlogs = async () => {
    try {
      const {data}=await axios.get(`/api/admin/blogs`)
      if(data.success)
      {
        setBlogs(data.blogs)
      }
      else
      {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, [])


  return (
    <div className=''>
      <h1 className='text-2xl mb-5 text-center font-semibold'>All Blogs</h1>

      <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                <th scope="col" className="py-2 px-4">#</th>
                <th scope="col" className="py-2 px-4">Blog Title</th>
                <th scope="col" className="py-2 px-4 max-sm:hidden">Date</th>
                <th scope="col" className="py-2 px-4 max-sm:hidden">Status</th>
                <th scope="col" className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ListBlog
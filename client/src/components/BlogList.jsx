import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {
  const [menu, setMenu] = useState('All')
  const {blogs,input}=useAppContext()

  const filteredBlogs=()=>{
    if(input === '')
    {
      console.log(blogs)
      return blogs
    }
    console.log(blogs);
    return blogs.filter((blog)=>blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
   



  }

  return (
    <div className="mt-12">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`relative px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer
                ${
                  menu === item
                    ? 'text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
            >
              {item}
              {/* Active Background with Motion */}
              {menu === item && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-indigo-600 shadow-md -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Cards Section */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {filteredBlogs()
            .filter((blog) => (menu === 'All' ? true : blog.category.toLowerCase() === menu.toLowerCase()))
            .map((blog) => (
              <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
              <BlogCard blog={blog} />
            </motion.div>

            ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default BlogList

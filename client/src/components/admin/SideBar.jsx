import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const SideBar = () => {
  return (
    <div className="w-48 min-h-screen  shadow-md p-4 gap-y-5 flex flex-col">
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer 
          ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-100"}`
        }
      >
        <img src={assets.home_icon} alt="Dashboard" className="w-6 h-6" />
        <p className="hidden md:inline-block">Dashboard</p>
      </NavLink>

        <NavLink
        end={true}
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer 
          ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-100"}`
        }
      >
        <img src={assets.add_icon} alt="Dashboard" className="w-6 h-6" />
        <p className="hidden md:inline-block">Add Blogs</p>
      </NavLink>

      <NavLink
        end={true}
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer 
          ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-100"}`
        }
      >
        <img src={assets.list_icon} alt="Dashboard" className="w-6 h-6" />
        <p className="hidden md:inline-block">Blog Lists</p>
      </NavLink>

      <NavLink
        end={true}
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer 
          ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-100"}`
        }
      >
        <img src={assets.comment_icon} alt="Dashboard" className="w-6 h-6" />
        <p className="hidden md:inline-block">Comments</p>
      </NavLink>

    </div>
  )
}

export default SideBar

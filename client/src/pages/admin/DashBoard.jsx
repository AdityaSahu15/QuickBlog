import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  const fetchDashboard = async () => {
    setDashboardData(dashboard_data)
  }

  useEffect(() => {
    fetchDashboard();
  }, [])

  return (
    <div className="p-6 space-y-8">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blogs */}
        <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4">
          <img src={assets.dashboard_icon_1} alt="blogs" className="w-12 h-12" />
          <div>
            <p className="text-2xl font-bold text-gray-800">{dashboardData.blogs}</p>
            <p className="text-gray-500">Blogs</p>
          </div>
        </div>

        {/* Comments */}
        <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4">
          <img src={assets.dashboard_icon_2} alt="comments" className="w-12 h-12" />
          <div>
            <p className="text-2xl font-bold text-gray-800">{dashboardData.comments}</p>
            <p className="text-gray-500">Comments</p>
          </div>
        </div>

        {/* Drafts */}
        <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4">
          <img src={assets.dashboard_icon_3} alt="drafts" className="w-12 h-12" />
          <div>
            <p className="text-2xl font-bold text-gray-800">{dashboardData.drafts}</p>
            <p className="text-gray-500">Drafts</p>
          </div>
        </div>
      </div>

      {/* Latest Blogs Section */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <img src={assets.dashboard_icon_4} alt="latest blogs" className="w-8 h-8" />
          <p className="text-xl font-semibold text-gray-800">Latest Blogs</p>
        </div>

        {/* Table */}
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
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

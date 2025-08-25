import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../../components/admin/SideBar';

const Layout = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-6 py-3 shadow-md">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="h-8 ml-10 cursor-pointer"
          onClick={() => navigate('/')}
        />

        {/* Logout button */}
        <button
          className="bg-blue-500 text-white px-3 py-1.5 rounded-lg mr-10 hover:bg-blue-600 transition"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="flex">
        {/* Sidebar on the left */}
        <SideBar />

        {/* Dashboard Content on the right */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;

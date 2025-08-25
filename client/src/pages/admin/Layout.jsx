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
    
    <div className="flex items-center justify-between px-6 py-3 shadow-xs ">
      {/* Logo on the left */}
      <img
        src={assets.logo}
        alt="Logo"
        className="h-8 ml-10 cursor-pointer"   // smaller image (h-8) + margin from left (ml-4)
        onClick={() => navigate('/')}
      />

      {/* Logout button on the right */}
      <button
        className="bg-blue-500 text-white px-3 py-1.5 rounded-lg mr-10 hover:bg-blue-600 transition"
        onClick={logout}
      >
        Logout
      </button>
    </div>

    <div>
        <SideBar/>
        <Outlet/>
    </div>
    
    </>
  );
};

export default Layout;

import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

    const {navigate,token}=useAppContext()

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
        <img onClick={()=>{ navigate('/')}} src={assets.logo} alt="logo" className='w-32 sm:w-44' />

       <button onClick={()=>{navigate('/admin')}} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl shadow-md hover:bg-indigo-700 transition duration-200 cursor-pointer">
  {token? 'Dashboard':'Login'}
  <img src={assets.arrow} alt="arrow" className="w-4 h-4" />
</button>

    </div>
  )
}

export default Navbar
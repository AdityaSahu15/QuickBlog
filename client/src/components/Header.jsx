import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

    const onClear=async()=>{
      setInput('');
      inputRef.current.value='';
    }


  return (
    <div className="relative mx-6 sm:mx-12 lg:mx-20 xl:mx-32">
      {/* Content */}
      <div className="text-center mt-24 mb-16 relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          Your Own Blogging Platform
        </h1>
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          QuickBlog is your <span className="font-semibold text-blue-600">AI-powered blogging companion</span> that helps you create, edit, and publish blogs effortlessly. Whether you’re a student, professional, or business owner, QuickBlog makes writing fast, creative, and stress-free.
        </p>

        {/* Search Bar */}
        <form onSubmit={onSubmitHandler} className="mt-10 flex items-center justify-center max-w-xl mx-auto bg-white shadow-md rounded-full overflow-hidden border border-gray-200">
          <input ref={inputRef}
            type="text"
            placeholder="Search for blogs"
            required
            className="flex-1 px-4 py-3 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <button onClick={onSubmitHandler}
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium text-sm sm:text-base hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      <div className="text-center mt-4">
        {input && (
          <button
            onClick={onClear}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md 
                 hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>


      {/* Background Gradient */}
      <img
        src={assets.gradientBackground}
        alt="gradient background"
        className="absolute top-0 left-0 w-full min-h-screen object-cover z-0 opacity-60 pointer-events-none"
      />
    </div>
  )
}

export default Header

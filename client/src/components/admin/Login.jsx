import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {

  const {axios,setToken,navigate}=useAppContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle login logic here

    try {
      const {data} =await axios.post('/api/admin/login',{email,password})
      if(data.success)
      {
        toast.success(data.message)
        setToken(data.token)
        localStorage.setItem('token',data.token)
        axios.defaults.headers.common['Authorization']=data.token;
        navigate('/admin')
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
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="font-bold text-3xl text-gray-800">
            Admin <span className="text-indigo-600">Login</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Enter your credentials to access the admin panel
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Email</label>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              type="email" 
              required 
              placeholder="abc@gmail.com" 
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Password</label>
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              type="password" 
              required 
              placeholder="••••••••" 
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
            />
          </div>

          {/* Button */}
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-200 cursor-pointer hover:scale-105"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  )
}

export default Login

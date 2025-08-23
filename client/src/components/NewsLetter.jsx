import React from 'react'

const NewsLetter = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 text-center space-y-4 mt-20">
      <h2 className="text-2xl font-bold text-gray-800">Never Miss a Blog!</h2>
      <p className="text-gray-600">
        Subscribe to our newsletter and get the latest blogs & updates directly in your inbox.
      </p>

      <form className="flex flex-col sm:flex-row items-center gap-3 mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetter

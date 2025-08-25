import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blog_data, assets, comments_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

const Blog = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [comments, setComments] = useState([])

  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const fetchBlogData = async () => {
    const blog = blog_data.find(item => item._id === id)
    setData(blog)
  }

  const fetchComments = async () => {
    setComments(comments_data)
  }

  const addComment = async (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    fetchBlogData()
    fetchComments()
  }, [id])

  return data ? (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      {/* Gradient Background (z-0) */}
      <img
        src={assets.gradientBackground}
        alt="gradient background"
        className="absolute top-0 left-0 w-full min-h-screen object-cover z-0 opacity-60 pointer-events-none"
      />

      {/* Navbar fixed at top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Blog Wrapper (content above bg) */}
      <div className="relative z-10 pt-28 pb-20 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Meta Info */}
        <div className="text-center">
          <p className="text-gray-500 text-sm sm:text-base mb-3">
            Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
          </p>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-snug mb-6">
            {data.title}
          </h1>

          <h2 className="text-2xl sm:text-3xl text-gray-600 italic font-light mb-6">
            {data.subTitle}
          </h2>

          <p className="text-gray-700 font-medium text-lg">
            By <span className="font-semibold">Alexander Lucifer</span>
          </p>
        </div>

        {/* Blog Image */}
        <div className="mt-12">
          <img
            src={data.image}
            alt="Blog main"
            className="rounded-2xl shadow-xl mx-auto max-h-[480px] object-cover w-full"
          />
        </div>

        {/* Article Body */}
        <article
          className="
            mt-14 prose prose-xl prose-gray max-w-none mx-auto
            leading-loose tracking-wide text-justify
            prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-6
            prose-p:text-gray-700 prose-p:leading-9 prose-p:mb-6
            prose-img:rounded-xl prose-img:shadow-lg
            prose-a:text-blue-600 hover:prose-a:underline
            prose-strong:text-gray-900
          "
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></article>

        {/* Comments Section */}
        <section className="mt-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Comments <span className="text-gray-500 text-sm">({comments.length})</span></h3>
              <p className="text-sm text-gray-500">Be kind — no spam or hate.</p>
            </div>



            {/* Comments list */}
            <div className="space-y-4">
              {comments.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <img src={assets.user_icon} alt={item.name} className="w-10 h-10 rounded-full object-cover" />

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-400">· {Moment(item.createdAt).fromNow()}</p>
                      </div>


                    </div>

                    <p className="mt-2 text-gray-700 text-sm">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/*comment box*/}
        <div className="mt-10 bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Add your comment</h2>

          <form onSubmit={addComment} className="space-y-4">
            <input onChange={(e) => setName(e.target.value)} value={name}
              type="text"
              placeholder="Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 "
            />

            <textarea onChange={(e) => setContent(e.target.value)} value={content}
              placeholder="Comment"
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 resize-none"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200 cursor-pointer hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>

              {/*Social media icons */}
              
              <div className="text-center mt-6">
  <p className="mb-3 text-lg font-medium text-gray-700">
    Share this on social media
  </p>
  <div className="flex justify-center gap-6">
    <img src={assets.facebook_icon} alt="Facebook" />
    <img src={assets.twitter_icon} alt="Twitter" />
    <img src={assets.googleplus_icon} alt="Google Plus" />
  </div>
</div>

      </div>
      <Footer/>
    </div>
  ) : <Loader/>
}

export default Blog

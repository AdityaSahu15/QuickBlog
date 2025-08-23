import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { blog_data } from '../assets/assets';

const Blog = () => {

const {id}=useParams();
const [data,setData]=useState(null);

const fetchBlogData=async()=>{
    blog_data
}

  return (
    <div>
        <h1>blog</h1>
    </div>
  )
}
export default Blog
import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import {parse} from "marked"

const AddBlog = () => {

  const {axios}=useAppContext();
  const[isAdding,setIsAdding]=useState(false);
  const[loading,setLoading]=useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (e) => {
   
    try {
      e.preventDefault();
      setIsAdding(true);

      const blog={title,subTitle,description:quillRef.current.root.innerHTML,category,isPublished}

      const formData=new FormData();
      formData.append('blog',JSON.stringify(blog))
      formData.append('image',image)

      const {data}=await axios.post(`/api/blog/add`,formData);

      if(data.success)
      {
        toast.success(data.message)
        setImage(false);
        setTitle('');
        quillRef.current.root.innerHTML=''
        setCategory('Startup');
      }
      else
      {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }finally{
      setIsAdding(false)
    }
  };

  const generateContent = async () => {
    if(!title) return toast.error('Please enter a title')

      try {
        setLoading(true);
        const {data}=await axios.post(`/api/blog/generate`,{prompt:title})
        if(data.success)
        {
          quillRef.current.root.innerHTML=parse(data.content)
        }
        else
        {
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }finally{
        setLoading(false)
      }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col gap-6 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl"
    >
      {/* Upload Thumbnail */}
      <div>
        <p className="text-lg font-medium mb-2">Upload Thumbnail</p>
        <label
          htmlFor="image"
          className="block w-48 h-32 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg overflow-hidden flex items-center justify-center hover:border-blue-400 transition"
        >
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="Upload Thumbnail"
            className="object-cover w-full h-full"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>
      </div>

      {/* Blog Title */}
      <div>
        <p className="text-lg font-medium mb-2">Blog Title</p>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
          placeholder="Type here"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      {/* Subtitle */}
      <div>
        <p className="text-lg font-medium mb-2">Sub Title</p>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
          placeholder="Type here"
          required
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />
      </div>

      {/* Blog Description */}
      <div>
        <p className="text-lg font-medium mb-2">Blog Description</p>
        <div className=" rounded-lg p-2">
          <div ref={editorRef} className="min-h-80 border border-gray-300" />
        </div>
        <button 
        disabled={loading}
          type="button"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer 
                     hover:scale-105 transform transition-all duration-200 text-sm"
          onClick={generateContent}
        >
          {loading?"Generating..." : "Generate with AI"}
        </button>
      </div>

      {/* Blog Category */}
      <div>
        <p className="text-lg font-medium mb-2">Blog Category</p>
        <select
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          className="w-40 cursor-pointer border border-gray-300 rounded-lg p-3 focus:outline-none"
        >
          <option value="" className="">Select Category</option>
          {blogCategories.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Publish Now */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isPublished}
          onChange={(e) => setIsPublished(e.target.checked)}
          className="w-5 h-5 accent-blue-500 cursor-pointer"
        />
        <p className="text-lg font-medium">Publish Now</p>
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button disabled={isAdding}
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-md font-medium 
                     cursor-pointer hover:scale-105 transform transition-all duration-200"
        >
          {isAdding?'Adding...':'Add Blog'}
        </button>
      </div>
    </form>
  );
};

export default AddBlog;

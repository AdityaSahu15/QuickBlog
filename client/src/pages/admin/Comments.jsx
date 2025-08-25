import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets';
import CommentTableItem from '../../components/admin/CommentTableItem';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState('Not Approved');

  const fetchComments = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className='p-4'>
      {/* Header */}
      <div className='flex justify-between items-center max-w-3xl mx-auto mb-6'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <div className='flex gap-4'>
          <button 
            onClick={() => setFilter('Approved')} 
            className={`cursor-pointer font-medium ${filter === 'Approved' ? 'text-green-700' : 'text-gray-700'}`}
          >
            Approved
          </button>

          <button 
            onClick={() => setFilter('Not Approved')} 
            className={`cursor-pointer font-medium ${filter === 'Not Approved' ? 'text-red-700' : 'text-gray-700'}`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='w-full border'>
          <thead className='bg-gray-100'>
            <tr>
              <th scope='col' className='px-6 py-3 text-left'>Blog Title & Comments</th>
              <th scope='col' className='px-6 py-3 max-sm:hidden text-left'>Date</th>
              <th scope='col' className='px-6 py-3 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {comments
              .filter((comment) => {
                if (filter === 'Approved') return comment.isApproved === true;
                return comment.isApproved === false;
              })
              .map((comment, index) => (
                <CommentTableItem 
                  key={comment._id} 
                  comment={comment} 
                  index={index + 1} 
                  fetchComments={fetchComments} 
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;

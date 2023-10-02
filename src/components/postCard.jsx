import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/conf'


const postCard = ({$id, title,  featuredImages }) => {
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-200 rounded-lg'>
        <div className=' w-full justify-center '>
            <img src={service.getfilePreview(featuredImages)} alt={title} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
    </div>
    </Link>
  )
}

export default postCard
import React,  {useEffect, useState} from 'react'
import { Container, Postcard } from '../components'
import { appwriteService } from '../appwrite/conf'
const AllPost = () => {
    const [posts, setPosts] = useState([])

    
    useEffect(() =>{
        appwriteService.getPosts([]).then((posts) =>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, []) 

  

  return (
    <div>
        <Container>
            <div className='flex flex-wrap'>
                {
                    posts.map((post) =>{
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard post={post}/>
                        </div>
                    })
                }
            </div>
        </Container>
    </div>
  )
}

export default AllPost
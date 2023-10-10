import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Logo, LogoutBtn} from "../index"
import { useNavigate } from 'react-router-dom'


const Headers = () => {
  const autStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navList = [
    {
      name:"Home",
      slug:"/",
      active:true
    },
    {
      name:"Login",
      slug: "/login",
      active: !autStatus
      
    },
    {
      name:"Signup",
      slug: "/signup",
      active: !autStatus
      
    },
    {
      name:"All Posts",
      slug: "/all-posts",
      active: autStatus
      
    },
  ]
  return (
    <header className='py-3 shadow bg-gray-400'>

    <Container>
      <nav className='flex'>
        <div className=''><Logo/></div>

        <ul className='flex ml-auto'>

        {
          navList.map((items) =>(
            items.active?(
              <li key={items.name}>
                <button
                onClick={() => navigate(items.slug)}
                >{items.name}</button>
              </li>
              ):null
              ))
            }
            {
              autStatus && (
                <li>
                  <LogoutBtn/>
                </li>
              )
            }

            </ul>
      </nav>
    </Container>
    </header>
  )
}

export default Headers
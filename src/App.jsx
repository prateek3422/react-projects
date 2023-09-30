import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Headers } from './components'


function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() =>{
    authService.getUser()
    .then((userData) =>{
      if(userData){
        dispatch(login({userData}))

      }else{
        dispatch(logout())
      }
    })
    .finally(() =>setLoading(false))

  },[])

  return loading ?null:(<div className='min-h-screen flex flex-wrap bg-gray-400 content-between'>
    <div className="w-full block">
      <Headers/>
      <Footer/>
      
    </div>
  </div>);
}

export default App

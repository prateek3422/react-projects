import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'



const LogoutBtn = () => {
    // const {} = useSelector((state) => state.auth.status)
    const dispatch = useDispatch()

    const handleLogout = () =>{
        authService.logout().then(() =>{
            dispatch(logout())
        })
    }
  return (
    <Button>Logout</Button>
  )
}

export default LogoutBtn
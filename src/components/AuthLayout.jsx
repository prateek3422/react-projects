import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Selector, useSelector } from 'react-redux'


export default function protect(children, authentication=true) {
    const authStatus = useSelector((state) => state.auth.status)
    const [loader, setLoader] = useState(true)
    const navigate =useNavigate()


    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if( !authentication &&  authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authentication, authStatus,navigate ])


    return loader ? <h1>loading ...</h1> : <>{children}</>
}f
import React from 'react'

const Button = ({children, type=button, bgcolor=bg-blue-600, className="", ...props}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${type} ${bgcolor} ${className}`} {...props}>{children}</button>
  )
}
  

export default Button
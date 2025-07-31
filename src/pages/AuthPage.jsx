import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../components/Login'

const AuthPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
        <Outlet/>
    </div>
  )
}

export default AuthPage
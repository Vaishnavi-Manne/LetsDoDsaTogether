import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import ThemeToggle from './ThemeToggle'

const MainLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
        <Navbar/>
        <Outlet/>
        <ThemeToggle/>
        <Footer/>
    </div>
  )
}

export default MainLayout
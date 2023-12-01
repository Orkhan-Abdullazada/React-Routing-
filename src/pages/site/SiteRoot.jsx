import React from 'react'
import Navbar from '../../layout/site/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../layout/site/Footer/Footer'

const SiteRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default SiteRoot
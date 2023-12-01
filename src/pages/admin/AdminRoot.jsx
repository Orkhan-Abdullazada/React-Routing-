import React, { useState } from 'react'
import Navbar from '../../layout/admin/Navbar/Navbar'
import { Outlet } from 'react-router'

const AdminRoot = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <Navbar counter={counter}/>
      <Outlet context={[counter, setCounter]} />

    </>
  )
}

export default AdminRoot
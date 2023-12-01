import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {



  return (
<>
    <div className='header-site'>
      <div className='logo'>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1fafbbc6-41b8-4b54-97b6-9edcf6725560/d7t4mdm-a38e3582-7d57-417a-841f-28fd430ef47f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmYWZiYmM2LTQxYjgtNGI1NC05N2I2LTllZGNmNjcyNTU2MFwvZDd0NG1kbS1hMzhlMzU4Mi03ZDU3LTQxN2EtODQxZi0yOGZkNDMwZWY0N2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fmDBFcI4bdVXBS_F9MFk-BKNUduFzDDr6aSQmJMFtPY" alt="" />
      </div>
      <div className='navbar-site'>
        <ul>
        <li>
        <Link to="/admin">Admin</Link>
        </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          
        <li>
        <Link to="/products">Products</Link>
        </li>
   
        </ul>
        </div>
      </div>
      </>
  )
}

export default Navbar
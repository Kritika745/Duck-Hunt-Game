import React from 'react'
import {Container,  LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import myImage from './duckcup.png'

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
    name: "Trynow",
    slug: "/trynow",
    active: authStatus,
},
  ]


  return (
    <header className='py-1  bg-gradient-radial w-full '>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <img className='w-12 ml-4' src={myImage} alt="" />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className=' font-poppins inline-bock  text-white px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header
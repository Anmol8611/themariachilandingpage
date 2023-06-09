import React from 'react'

const NavBar = () => {
  return (
    <nav className={`bg-[var(--primary-brown)] py-8 text-[var(--font-cream)]`}>
        <ul className={`flex justify-evenly items-center px-32`}>
            <li className={`text-2xl font-medium`}><a href="#">HOME</a></li>
            <li className={`text-2xl font-medium`}><a href="#">ABOUT</a></li>
            <li className={`text-2xl font-medium`}><a href="#">MENU</a></li>
            <li className={`text-2xl font-medium`}><a href="#">OFFERS</a></li>
            <li className={`text-2xl font-medium`}><a href="#">CONTACT</a></li>
        </ul>
    </nav>
  )
}

export default NavBar
import Link from 'next/link'
import React from 'react'

import { GrHomeRounded } from 'react-icons/gr'

const navItems = [
  {
    path: '/about',
    text: 'About',
  },
  {
    path: '/princingPage',
    text: 'Princing',
  },
  {
    path: '/contactPage',
    text: 'Contact',
  },
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 roudend">
      <Link href={'/'} className="flex space-x-2">
        <GrHomeRounded className="mt-1" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((dato, index: number) => (
        <Link key={index} className="mr-2" href={dato.path}>
          {dato.text}
        </Link>
      ))}
    </nav>
  )
}

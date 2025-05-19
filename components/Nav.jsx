import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <header className="w-full px-8 py-6 flex items-center justify-between bg-transparent absolute top-0 left-0 z-50">
      {/* Logo */}
      <div className="relative w-14 h-14">
        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
      </div>

      {/* Nav Links */}
      <nav>
        <ul className="flex items-center space-x-10 text-lg font-medium text-[#1a120b] font-mono">
          <li className="cursor-pointer hover:text-[#B85C38] transition duration-300">Home</li>
          <li className="cursor-pointer hover:text-[#B85C38] transition duration-300">About</li>
          <li className="cursor-pointer hover:text-[#B85C38] transition duration-300">Brands</li>
          <li className="cursor-pointer hover:text-[#B85C38] transition duration-300">More</li>
          <li className="cursor-pointer hover:text-[#B85C38] transition duration-300">Workers</li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav

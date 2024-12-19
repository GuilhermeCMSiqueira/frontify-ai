import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { FrontifyLogo } from '@/assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white h-36 shadow-md sticky w-full z-10 font-montserrat">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center text-2xl">
            <Image
              src={FrontifyLogo}
              alt={"Logo do CITi"}
              className="h-28 w-fit"
            ></Image>
            {/* Menu */}
            <div className="hidden md:flex space-x-6 gap-10">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Frontify AI
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                FAQ
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="bg-white shadow-md md:hidden">
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Frontify AI
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                FAQ
              </a>
            </div>
          )}
        </nav>
  )
}

export default Navbar

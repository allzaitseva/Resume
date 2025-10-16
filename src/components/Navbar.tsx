/** @format */

import { useState } from "react";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='h-20 w-full'>
      <div className='flex text-white/80 font-iceland gap-10 text-2xl justify-end items-center pt-10'>
      
        {/* Desktop menu */}
        <div className='hidden md:flex gap-10'>
          <a href='#projects' className='hover:text-white cursor-pointer'>
            <span className='text-[#ff1e8b]'>#</span>projects
          </a>
          <a href='#skills' className='hover:text-white cursor-pointer'>
            <span className='text-[#ff1e8b]'>#</span>skills
          </a>
          <a href='#about' className='hover:text-white cursor-pointer'>
            <span className='text-[#ff1e8b]'>#</span>about me
          </a>
          <a href='#contact' className='hover:text-white cursor-pointer'>
            <span className='text-[#ff1e8b]'>#</span>contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className='md:hidden text-white cursor-pointer'
          aria-label='Open mobile menu'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      <MobileDrawer open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </nav>
  );
}

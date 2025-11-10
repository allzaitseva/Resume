/** @format */

import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className='h-20 w-full'>
      <div className='flex text-white/80 font-iceland gap-10 text-2xl justify-end items-center pt-10'>
      
        {/* Desktop menu */}
        <div className='hidden md:flex gap-10 items-center text-[20px]'>
          <a href='#projects' className='hover:text-white cursor-pointer'>
            <span className='text-[#ff1e8b]'>#</span>{t('nav.projects')}
          </a>
          <a href='#skills' className='hover:text-white cursor-pointer'>
            <span className='text-[#ff1e8b]'>#</span>{t('nav.skills')}
          </a>
          <a href='#about' className='hover:text-white cursor-pointer'>
            <span className='text-[#ff1e8b]'>#</span>{t('nav.about')}
          </a>
          <a href='#contact' className='hover:text-white cursor-pointer'>
            <span className='text-[#ff1e8b]'>#</span>{t('nav.contact')}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile: Language switcher and menu button */}
        <div className='md:hidden flex items-center gap-5'>
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(true)}
            className='text-white cursor-pointer'
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
      </div>

      <MobileDrawer open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </nav>
  );
}

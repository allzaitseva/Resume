/** @format */

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('olena_zaitseva@seznam.cz');
    setCopied(true);
    setTimeout(() => setCopied(false), 700);
  };

  return (
    <section id='contact' className='font-iceland text-white h-full mt-10'>
      <div className='text-[24px] md:text-[30px] flex'>
        <span className='text-[#ff1e8b]'>#</span>
        {t('contact.title')} <div className='mt-6 md:mt-7 ml-10 w-25 md:max-w-70 h-[1px] bg-[#ff1e8b]'></div>
      </div>

      <div>
        <div className='flex brightness-80 mt-10 relative'>
          <img
            src='email.svg'
            alt='email'
            className='h-5 md:h-7 w-auto brightness-0 invert'
          />
          <div 
            onClick={handleCopyEmail}
            className='-mt-1 md:mt-0 text-[14px] md:text-[18px] text-white ml-3 cursor-pointer hover:text-[#ff1e8b] transition-colors duration-200'>
            olena_zaitseva@seznam.cz
          </div>
        </div>
        
        {/* Notification popup */}
        {copied && (
          <div className='fixed inset-0 flex items-center justify-center z-50 animate-fade-in'>
            <div className='absolute inset-0 bg-black/50'></div>
            <div className='relative bg-slate-800 border-2 border-[#ff1e8b] px-10 py-5 rounded-lg shadow-2xl'>
              <p className='text-[16px] md:text-[20px] text-white font-iceland'>
                {t('contact.copied')}
              </p>
            </div>
          </div>
        )}

        <div className='flex brightness-80 mt-5'>
          <img
            src='github.svg'
            alt='github'
            className='h-5 md:h-7 w-auto brightness-0 invert'
          />
          <a
            href='https://github.com/allzaitseva'
            target='_blank'
            rel='noopener noreferrer'
            className='-mt-1 md:mt-0 text-[14px] md:text-[18px] text-white ml-3'>
            allzaitseva
          </a>
        </div>

        <div className='flex brightness-80 mt-5'>
          <img
            src='linkedin.svg'
            alt='github'
            className='h-5 md:h-7 w-auto brightness-0 invert'
          />
          <a
            href='https://www.linkedin.com/in/olena-zaitseva-156a07248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            target='_blank'
            rel='noopener noreferrer'
            className='-mt-[2px] md:mt-0 text-[14px] md:text-[18px] text-white ml-3'>
            Olena Zaitseva
          </a>
        </div>
      </div>
    </section>
  );
}

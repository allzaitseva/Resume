/** @format */

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className='flex gap-2 items-center'>
      <button
        onClick={() => setLanguage('en')}
        className={`text-[14px] md:text-[16px] font-iceland transition-colors duration-200 ${
          language === 'en' 
            ? 'text-[#ff1e8b]' 
            : 'text-white/60 hover:text-white'
        }`}>
        EN
      </button>
      <span className='text-white/40'>|</span>
      <button
        onClick={() => setLanguage('cs')}
        className={`text-[14px] md:text-[16px] font-iceland transition-colors duration-200 ${
          language === 'cs' 
            ? 'text-[#ff1e8b]' 
            : 'text-white/60 hover:text-white'
        }`}>
        CZ
      </button>
    </div>
  );
}

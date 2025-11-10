/** @format */

import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className='font-iceland text-white h-full mt-10'>
      <div className='text-[24px] md:text-[30px] flex'>
        <span className='text-[#ff1e8b]'>#</span>
        {t('about.title')} <div className='mt-6 md:mt-7 ml-10 min-w-25 md:w-60 h-[1px] bg-[#ff1e8b]'></div>
      </div>
      <div className="text-[16px] md:text-[20px] text-white/80 mt-10 w-auto md:w-165">
        <p>{t('about.p1')}</p>
        <p className="mt-5">
          {t('about.p2')}
        </p>
        <p className="mt-5">
          {t('about.p3')}
        </p>
        <p className="mt-5">
          {t('about.p4')}
        </p>
        <p className="mt-5">
          {t('about.p5')}
        </p>
      </div>
    </section>
  );
}

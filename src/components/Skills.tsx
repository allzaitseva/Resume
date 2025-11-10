/** @format */

import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();
  
  return (
    <section id='skills' className='font-iceland text-white h-full mt-10'>
      <div className='text-[24px] md:text-[30px] flex'>
        <span className='text-[#ff1e8b]'>#</span>
        {t('skills.title')}{" "}
        <div className='mt-6 md:mt-7 ml-10 w-70 h-[1px] bg-[#ff1e8b]'></div>
      </div>

      <div className='flex flex-col items-center gap-10 md:flex-row md:justify-end mt-10'>
        <div className='border-white/80 border-1 w-full md:w-70 p-5'>
          <p className='text-[16px] md:text-[20px]'>{t('skills.frontend')}</p>
          <p className='text-[14px] md:text-[18px] text-white/70'>
            {t('skills.frontend.list')}
          </p>
        </div>

        <div className='border-white/80 border-1 w-full md:w-70 p-5'>
          <p className='text-[16px] md:text-[20px]'>{t('skills.backend')}</p>
          <p className='text-[14px] md:text-[18px] text-white/70'>
            {t('skills.backend.list')}
          </p>
        </div>

        <div className='border-white/80 border-1 w-full md:w-70 p-5'>
          <p className='text-[16px] md:text-[20px]'>{t('skills.tools')}</p>
          <p className='text-[14px] md:text-[18px] text-white/70'>
            {t('skills.tools.list')}
          </p>
        </div>

        <div className='border-white/80 border-1 w-full md:w-70 p-5'>
          <p className='text-[16px] md:text-[20px]'>{t('skills.design')}</p>
          <p className='text-[14px] md:text-[18px] text-white/70'>
            {t('skills.design.list')}
          </p>
        </div>
      </div>

      <div className='text-[24px] md:text-[30px] flex mt-10'>
        <span className='text-[#ff1e8b]'>#</span>
        {t('education.title')}{" "}
        <div className='mt-6 md:mt-7 ml-10 w-30 h-[1px] bg-[#ff1e8b]'></div>
      </div>

      <div className='mt-10 text-left md:text-right'>
        <p className='text-[20px] md:text-[24px] text-white/90'>
          {t('education.university')}{" "}
        </p>
        <p className='text-[#ff1e8b] text-[16px] md:text-[20px] mt-2'>
          {t('education.degree')}{" "}
          <span className='text-white/80'>{t('education.years')}</span>
        </p>
      </div>
    </section>
  );
}

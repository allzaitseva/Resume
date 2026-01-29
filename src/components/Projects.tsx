/** @format */

import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  
  return (
    <section id='projects' className='font-iceland text-white h-full'>
      <div className='text-[24px] md:text-[30px] flex'>
        <span className='text-[#ff1e8b]'>#</span>
        {t('projects.title')}{" "}
        <div className='mt-6 md:mt-7 ml-6 md:ml-10 min-w-15 md:w-50 h-[1px] bg-[#ff1e8b]'></div>
        <a
          href='#projects'
          className='text-[14px] md:text-[16px] text-white/85 hover:text-white mt-[11px] md:mt-3.5 ml-auto'>
          {t('projects.viewAll')}
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Taxi project */}
        <div className='mt-10 border-white/80 border-1 w-full md:w-90 flex flex-col'>
          <a
            href='https://krymtaxi.netlify.app'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              src='Taxi.png'
              alt='Taxi'
              className='h-auto w-full brightness-30 hover:brightness-100 duration-400'
            />
          </a>
          <div className='mx-5 flex flex-col flex-grow'>
            <p className='text-[24px] mt-3'>Taxi</p>
            <p className='text-white/80 mt-3 flex-grow'>
              {t('projects.taxi.description')}
            </p>
            <div className='flex gap-3 mt-5 mb-5'>
              <div className='border-1 w-20 border-[#ff1e8b] text-[20px] text-center hover:bg-white/5'>
                <a
                  href='https://krymtaxi.netlify.app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[20px] text-white/85 hover:text-white'>
                  {t('projects.live')}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* / Taxi project */}

        {/* Burger project */}
        <div className='mt-10 border-white/80 border-1 w-full md:w-90 flex flex-col'>
          <a
            href='https://burgeraz.netlify.app'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              src='Burger.png'
              alt='Burger'
              className='h-auto w-full brightness-30 hover:brightness-100 duration-400'
            />
          </a>
          <div className='mx-5 flex flex-col flex-grow'>
            <p className='text-[24px] mt-3'>Burger</p>
            <p className='text-white/80 mt-3 flex-grow'>
              {t('projects.burger.description')}
            </p>
            <div className='flex gap-3 mt-5 mb-5'>
              <div className='border-1 w-20 border-[#ff1e8b] text-[20px] text-center hover:bg-white/5'>
                <a
                  href='https://burgeraz.netlify.app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[20px] text-white/85 hover:text-white'>
                  {t('projects.live')}
                </a>
              </div>
              <div className='border-1 w-20 border-white/80 text-[20px] text-center hover:bg-white/5'>
                <a
                  href='https://github.com/allzaitseva/Burger.git'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[20px] text-white/85 hover:text-white'>
                  {t('projects.github')}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* / Burger project */}

        {/* Rehabilitation project */}
        <div className='mt-10 border-white/80 border-1 w-full md:w-90 flex flex-col'>
          <a
            href='https://rehabilitation-czu.netlify.app'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              src='Rehabilitation.png'
              alt='Rehabilitation'
              className='h-auto w-full brightness-30 hover:brightness-100 duration-400'
            />
          </a>
          <div className='mx-5 flex flex-col flex-grow'>
            <p className='text-[24px] mt-3'>{t('projects.rehab.title')}</p>
            <p className='text-white/80 mt-3 flex-grow'>
              {t('projects.rehab.description')}
            </p>
            <div className='flex gap-3 mt-5 mb-5'>
              <div className='border-1 w-20 border-[#ff1e8b] text-[20px] text-center hover:bg-white/5'>
                <a
                  href='https://rehabilitation-czu.netlify.app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[20px] text-white/85 hover:text-white'>
                  {t('projects.live')}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* / Rehabilitation project */}
      </div>
    </section>
  );
}

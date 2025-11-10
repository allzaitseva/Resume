/** @format */

import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <section id='footer' className='font-iceland text-white h-full mt-10 '>
      <div className='text-center text-white mt-8 opacity-70'>
        {new Date().getFullYear()} {t('footer.made')}
      </div>
    </section>
  );
}

import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();
    
    return (
        <section className="relative text-white font-iceland h-auto md:h-100 w-full pb-5 md:pb-auto">
            <div className="w-auto md:w-110 pt-5 md:pt-20">
                <p className="text-[24px] md:text-[36px]">{t('hero.greeting')} <span className="text-[#ff1e8b]">Olena Zaitseva</span></p>
                <p className="text-white/90 text-[18px] md:text-[24px] mt-7">a<span className="text-[#ff1e8b]"> {t('hero.role')}</span> {t('hero.description')}</p>
                <div className="border-1 w-40 md:w-30 border-[#ff1e8b] text-[14px] md:text-[16px] text-center mt-7 py-1 hover:bg-white/5"><a href="#contact">{t('hero.contact')}</a></div>
            </div>
        </section>
    )
}
/** @format */

export default function Contact() {
  return (
    <section id='contact' className='font-iceland text-white h-full mt-10'>
      <div className='text-[30px] md:text-[36px] flex'>
        <span className='text-[#ff1e8b]'>#</span>
        contact <div className='mt-6 md:mt-7 ml-10 w-25 md:max-w-70 h-[1px] bg-[#ff1e8b]'></div>
      </div>

      <div>
        <div className='flex brightness-80 mt-10'>
          <img
            src='email.svg'
            alt='email'
            className='h-5 md:h-7 w-auto brightness-0 invert'
          />
          <div className='-mt-1 md:mt-0 text-[18px] md:text-[20px] text-white ml-3'>
            olena_zaitseva@seznam.cz
          </div>
        </div>
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
            className='-mt-1 md:mt-0 text-[18px] md:text-[20px] text-white ml-3'>
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
            className='-mt-[2px] md:mt-0 text-[18px] md:text-[20px] text-white ml-3'>
            Olena Zaitseva
          </a>
        </div>
      </div>
    </section>
  );
}

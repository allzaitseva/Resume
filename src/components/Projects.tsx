/** @format */

export default function Projects() {
  return (
    <section id="projects" className='font-iceland text-white h-full'>
      <div className='text-[36px] flex'>
        <span className='text-[#ff1e8b]'>#</span>
        projects <div className='mt-7 ml-10 w-150 h-[1px] bg-[#ff1e8b]'></div>
        <a
          href='#projects'
          className='text-[1.2rem] text-white/85 hover:text-white mt-3.5 ml-auto'>
          View all
        </a>
      </div>

      {/* Burger project */}
      <div className='mt-10 border-white/80 border-1 w-90'>
        <a
          href='https://burgeraz.netlify.app'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='Burger.png'
            alt='Burger'
            className='h-auto w-90 brightness-30 hover:brightness-100 duration-400'
          />
        </a>
        <div className='mx-5'>
          <p className='text-[30px] mt-3'>Burger</p>
          <p className='text-white/80 mt-3'>React, Vite, JavaScript, Tailwind CSS, Redux Toolkit</p>
          <div className='flex gap-3 mt-5 mb-5'>
            <div className='border-1 w-20 border-[#ff1e8b] text-[20px] text-center hover:bg-white/5'>
              <a
                href='https://burgeraz.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[20px] text-white/85 hover:text-white'>
                Live
              </a>
            </div>
            <div className='border-1 w-20 border-white/80 text-[20px] text-center hover:bg-white/5'>
              <a
                href='https://github.com/allzaitseva/Burger.git'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[20px] text-white/85 hover:text-white'>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* / Burger project */}
    </section>
  );
}
/** @format */

export default function Skills() {
  return (
    <section id='skills' className='font-iceland text-white h-full mt-10'>
      <div className='text-[30px] md:text-[36px] flex'>
        <span className='text-[#ff1e8b]'>#</span>
        skills{" "}
        <div className='mt-6 md:mt-7 ml-10 w-70 h-[1px] bg-[#ff1e8b]'></div>
      </div>

      <div className='flex flex-col items-center gap-10 md:flex-row md:justify-end mt-10'>
        <div className='border-white/80 border-1 w-full md:w-70 p-5'>
          <p className='text-[20px] md:text-[24px]'>Frontend</p>
          <p className='text-[18px] md:text-[20px] text-white/70'>
            TypeScript, JavaScript (ES6+), React, HTML5/CSS3, Tailwind CSS,
            Redux Toolkit
          </p>
        </div>

        <div className='border-white/80 border-1 w-full md:w-70 p-5'>
          <p className='text-[20px] md:text-[24px]'>Backend</p>
          <p className='text-[18px] md:text-[20px] text-white/70'>
            C#, .NET, SQL, SQLite, Entity Framework, REST API
          </p>
        </div>

        <div className='border-white/80 border-1 w-full md:w-70 p-5'>
          <p className='text-[20px] md:text-[24px]'>Tools & Build</p>
          <p className='text-[18px] md:text-[20px] text-white/70'>
            Vite, Git/GitHub, npm/Node.js, PostCSS, Netlify, Docker
          </p>
        </div>

        <div className='border-white/80 border-1 w-full md:w-70 p-5'>
          <p className='text-[20px] md:text-[24px]'>Design & UI</p>
          <p className='text-[18px] md:text-[20px] text-white/70'>
            Figma, Photoshop, Procreate, After Effects
          </p>
        </div>
      </div>

      <div className='text-[30px] md:text-[36px] flex mt-10'>
        <span className='text-[#ff1e8b]'>#</span>
        education{" "}
        <div className='mt-6 md:mt-7 ml-10 w-30 h-[1px] bg-[#ff1e8b]'></div>
      </div>

      <div className='mt-10 text-left md:text-right'>
        <p className='text-[20px] md:text-[30px] text-white/90'>
          Czech University of Life Sciences, Prague{" "}
        </p>
        <p className='text-[#ff1e8b] text-[18px] md:text-[24px] mt-2'>
          Bachelor's Degree in Informatics{" "}
          <span className='text-white/80'>2022 - present</span>
        </p>
      </div>
    </section>
  );
}

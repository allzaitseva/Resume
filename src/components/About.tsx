/** @format */

export default function About() {
  return (
    <section id="about" className='font-iceland text-white h-full mt-10'>
      <div className='text-[30px] md:text-[36px] flex'>
        <span className='text-[#ff1e8b]'>#</span>
        about me <div className='mt-6 md:mt-7 ml-10 min-w-25 md:w-60 h-[1px] bg-[#ff1e8b]'></div>
      </div>
      <div className="text-[18px] md:text-[24px] text-white/80 mt-10 w-auto md:w-165">
        <p>Hi, I'm Olena Zaitseva, a front-end developer based in Prague.</p>
        <p className="mt-5">
          For a long time, I worked as a digital artist, drawing on my tablet
          and creating illustrations.
        </p>
        <p className="mt-5">
          But deep down, I was fascinated by how technology works, how a blank
          page in a browser can become something alive and interactive.
        </p>
        <p className="mt-5">
          That’s how I found front-end development. It lets me combine both
          sides of myself creativity and logic and turn ideas into living,
          functional designs on the web.
        </p>
        <p className="mt-5">
          I genuinely enjoy every step of the process: from a first idea to a
          finished website that feels clean, thoughtful, and alive.
        </p>
      </div>
    </section>
  );
}

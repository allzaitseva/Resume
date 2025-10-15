export default function Hero() {
    return (
        <section className="text-white font-iceland relative h-100 w-full">
            <div className=" w-110 pt-20">
                <p className="text-5xl">Hi, I’m <span className="text-[#ff1e8b]">Olena Zaitseva</span></p>
                <p className="text-white/90 text-3xl mt-7">a<span className="text-[#ff1e8b]"> front-end developer</span> passionate about crafting clean and responsive interfaces.</p>
                <div className="border-1 w-30 border-[#ff1e8b] text-[20px] text-center mt-7 hover:bg-white/5"><a href="#contact">Contact me</a></div>
            </div>
        </section>
    )
}
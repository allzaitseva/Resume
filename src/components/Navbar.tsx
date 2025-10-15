export default function Navbar() {
    return (
        <nav className="h-20 w-full">

            <div className="flex text-white/80 font-iceland gap-10 text-2xl justify-end pt-10">
                <a href='#projects' className="hover:text-white cursor-pointer"><span className="text-[#ff1e8b]">#</span>projects</a>
                <a href='#skills' className="hover:text-white cursor-pointer"><span className="text-[#ff1e8b]">#</span>skills</a>
                <a href='#about' className="hover:text-white cursor-pointer"><span className="text-[#ff1e8b]">#</span>about me</a>
                <a href='#contact' className="hover:text-white cursor-pointer"><span className="text-[#ff1e8b]">#</span>contact</a>
            </div>

        </nav>
    )
}
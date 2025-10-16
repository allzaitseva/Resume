/** @format */
import { useEffect } from "react";

interface MobileDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileDrawer({ open, setOpen }: MobileDrawerProps) {
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={[
        "fixed inset-0 z-50 md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
      aria-hidden={!open}>
      <div
        className={[
          "absolute inset-0 bg-black/50 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
      <aside
        className={[
          "absolute inset-y-0 right-0 w-72 max-w-[70%] h-auto bg-slate-800 shadow-xl rounded-md border border-[#ff1e8b]",
          "transform-gpu transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}>
        <div className='flex items-center justify-between px-5 py-4'>
          <button
            onClick={() => setOpen(false)}
            aria-label='Close'
            className='w-9 h-9 rounded-md hover:bg-white/15 text-white cursor-pointer ml-auto'>
            ✕
          </button>
        </div>

        <nav className='flex flex-col p-5 text-white text-lg font-iceland gap-1'>
          <a
            href='#projects'
            className='py-3 px-2 hover:bg-white/15 rounded-md'
            onClick={() => setOpen(false)}>
            <span className='text-[#ff1e8b]'>#</span>projects
          </a>
          <a
            href='#skills'
            className='py-3 px-2 hover:bg-white/15 rounded-md'
            onClick={() => setOpen(false)}>
            <span className='text-[#ff1e8b]'>#</span>skills
          </a>
          <a
            href='#about'
            className='py-3 px-2 hover:bg-white/15 rounded-md'
            onClick={() => setOpen(false)}>
            <span className='text-[#ff1e8b]'>#</span>about me
          </a>
          <a
            href='#contact'
            className='py-3 px-2 hover:bg-white/15 rounded-md'
            onClick={() => setOpen(false)}>
            <span className='text-[#ff1e8b]'>#</span>contact
          </a>
        </nav>
      </aside>
    </div>
  );
}

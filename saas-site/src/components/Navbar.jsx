import { useEffect, useState } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? 'border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 text-[15px] font-semibold text-white">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-white text-[#0a0a0f]">F</span>
          Flowstack
        </a>

        <nav className="hidden gap-8 md:flex">
          <a href="#features" className="text-[13px] text-white/60 transition hover:text-white">Features</a>
          <a href="#pricing" className="text-[13px] text-white/60 transition hover:text-white">Pricing</a>
          <a href="#faq" className="text-[13px] text-white/60 transition hover:text-white">FAQ</a>
          <a href="#" className="text-[13px] text-white/60 transition hover:text-white">Docs</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#" className="hidden text-[13px] text-white/60 transition hover:text-white md:inline">Sign in</a>
          <a
            href="#"
            className="rounded-md bg-white px-3 py-1.5 text-[13px] font-medium text-[#0a0a0f] transition hover:bg-white/90"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar

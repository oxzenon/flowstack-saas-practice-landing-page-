import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.05.78 2.11v3.13c0 .31.21.67.8.56C20.22 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
)

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
)

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Integrations'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Guides', 'API reference', 'Community', 'Support'],
  },
  {
    title: 'Company',
    links: ['About', 'Customers', 'Careers', 'Blog', 'Contact'],
  },
]

const socials = [
  { Icon: GithubIcon, href: '#', label: 'GitHub' },
  { Icon: TwitterIcon, href: '#', label: 'Twitter' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <footer className="relative px-4 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-12">
      <div className="mx-auto max-w-6xl">
        {/* Top: logo + columns + newsletter */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.6fr]">
          {/* Brand */}
          <div className="min-w-0">
            <a href="#" className="flex items-center gap-2 text-[15px] font-semibold text-white">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-white text-[#0a0a0f]">F</span>
              Flowstack
            </a>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/50">
              The operating system for modern product teams. Built for speed,
              designed for focus.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-white/55 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="min-w-0">
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/40">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-white/65 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="min-w-0">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/40">
              Stay in the loop
            </h4>
            <p className="mt-4 text-[13px] leading-relaxed text-white/50">
              Product updates, engineering notes, and the occasional secret demo.
              One email a month, never spam.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[13px] text-white placeholder:text-white/30 outline-none transition focus:border-violet-400/50 focus:bg-white/[0.05]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="group grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-white text-[#0a0a0f] transition hover:bg-white/90"
              >
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </form>
            <p
              className={`mt-2 text-[12px] transition ${
                submitted ? 'text-violet-300' : 'text-transparent'
              }`}
            >
              Thanks — check your inbox.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} Flowstack, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-white/40">
            <a href="#" className="transition hover:text-white">Terms</a>
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Security</a>
            <a href="#" className="transition hover:text-white">Cookie policy</a>
          </div>
        </div>
      </div>

      {/* Soft glow at the very bottom for a finished feel */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-40 h-80 bg-[radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.15),transparent_70%)]" />
    </footer>
  )
}

export default Footer

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Flowstack replaced four tools in our stack. Our team ships twice as fast and onboarding new engineers takes a day, not a week.",
    name: 'Sarah Chen',
    role: 'CTO, Linear-ish',
    initials: 'SC',
  },
  {
    quote: "The 3D editor alone is worth the price. But the real magic is how everything just works together out of the box.",
    name: 'Marcus Rivera',
    role: 'Head of Design, Plot',
    initials: 'MR',
  },
  {
    quote: "We migrated 40 engineers in one weekend. Zero regressions, and the team is genuinely happier. That never happens.",
    name: 'Priya Patel',
    role: 'VP Engineering, Riverpoint',
    initials: 'PP',
  },
  {
    quote: "I've been waiting years for a tool that respects both my time and my taste. Flowstack is the first one that does both.",
    name: 'Jordan Yamamoto',
    role: 'Founder, Quiet Labs',
    initials: 'JY',
  },
  {
    quote: "Our deploy time went from 18 minutes to 40 seconds. The investor demo basically wrote itself after that.",
    name: 'Elena Mukherjee',
    role: 'Staff Engineer, Brightline',
    initials: 'EM',
  },
  {
    quote: "Best money our company has spent this year. The AI workflows feel like having two extra senior engineers on the team.",
    name: 'Devon Kim',
    role: 'CEO, Stitch',
    initials: 'DK',
  },
  {
    quote: "It's rare to find software that feels designed by someone who actually does the job. Flowstack does.",
    name: 'Aisha Okonkwo',
    role: 'Product Lead, North',
    initials: 'AO',
  },
  {
    quote: "We tried building this internally for two years. Should have just bought Flowstack on day one.",
    name: 'Ben Hartwell',
    role: 'Director of Eng, Halcyon',
    initials: 'BH',
  },
]

function Card({ t }) {
  return (
    <div className="flex w-[280px] flex-shrink-0 flex-col justify-between rounded-2xl border border-white/8 bg-white/[0.02] p-5 sm:w-[340px] sm:p-6">
      <div>
        <div className="mb-3 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-violet-300 text-violet-300" />
          ))}
        </div>
        <p className="text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
          "{t.quote}"
        </p>
      </div>
      <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 text-[11px] font-semibold text-white">
          {t.initials}
        </div>
        <div className="min-w-0">
          <div className="truncate text-[13px] font-medium text-white">{t.name}</div>
          <div className="truncate text-[11px] text-white/45">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

function Row({ items, reverse }) {
  // Duplicate the array so the scroll loops seamlessly
  const doubled = [...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {doubled.map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  )
}

function Testimonials() {
  const half = Math.ceil(testimonials.length / 2)
  const row1 = testimonials.slice(0, half)
  const row2 = testimonials.slice(half)

  return (
    <section className="relative border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-violet-300/80">
            Loved by builders
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,6vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            Don't take our word for it.
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-white/55 sm:text-[16px]">
            Thousands of teams ship faster with Flowstack. Here's what a few of
            them have to say.
          </p>
        </motion.div>
      </div>

      <div className="mt-14 flex flex-col gap-4 sm:mt-16 sm:gap-5">
        <Row items={row1} />
        <Row items={row2} reverse />
      </div>
    </section>
  )
}

export default Testimonials

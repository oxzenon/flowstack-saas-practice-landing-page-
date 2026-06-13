import { motion } from 'framer-motion'
import { Zap, GitBranch, Shield, BarChart3, Workflow, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning fast',
    desc: 'Built on the edge. Sub-100ms responses anywhere in the world, with zero cold starts.',
  },
  {
    icon: GitBranch,
    title: 'Version everything',
    desc: 'Branch your data like code. Preview changes, roll back instantly, ship with confidence.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'SOC 2 Type II, HIPAA, and ISO 27001 compliant. Your data is encrypted end-to-end.',
  },
  {
    icon: Workflow,
    title: 'Automate workflows',
    desc: 'Visual workflow builder with 200+ integrations. From trigger to action in seconds.',
  },
  {
    icon: BarChart3,
    title: 'Real-time analytics',
    desc: 'Live dashboards, custom reports, and AI-powered insights — all in one place.',
  },
  {
    icon: Sparkles,
    title: 'AI built-in',
    desc: 'Smart suggestions, auto-categorization, and natural-language search out of the box.',
  },
]

function Features() {
  return (
    <section id="features" className="relative border-b border-white/5 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-violet-300/80">
            Features
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,6vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            Everything you need.
            <br />
            <span className="text-white/50">Nothing you don't.</span>
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-white/55 sm:text-[16px]">
            A complete platform for teams who care about craft, speed, and the
            details. Loved by engineers, designers, and operators alike.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition hover:border-white/15 hover:bg-white/[0.04] sm:p-6"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -top-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-violet-300 transition group-hover:text-violet-200 sm:mb-5 sm:h-10 sm:w-10">
                <f.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              <h3 className="text-[15px] font-semibold text-white sm:text-[16px]">
                {f.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/55 sm:mt-2 sm:text-[14px]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

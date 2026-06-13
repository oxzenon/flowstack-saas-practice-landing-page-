import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Scene3D from './Scene3D'

function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="dot-grid relative overflow-hidden border-b border-white/5"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[90vw] max-w-[800px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl sm:h-[500px]" />

      <div className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-8 px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 md:grid-cols-[1.05fr_1fr] md:gap-10">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="flex min-w-0 flex-col"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-6 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] text-white/70 sm:mb-8 sm:gap-2 sm:px-3 sm:text-[12px]"
          >
            <Sparkles className="h-3 w-3 text-violet-300 sm:h-3.5 sm:w-3.5" />
            New · AI-powered workflows
            <span className="ml-1 text-white/40">→</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.75rem,8.5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white"
          >
            Build, ship, and scale.
            <br />
            <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
              Without the chaos.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-full text-[14px] leading-relaxed text-white/60 sm:mt-7 sm:max-w-lg sm:text-[17px]"
          >
            Flowstack is the operating system for modern product teams. Plan, build,
            and ship in one place — engineered for speed, designed for focus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex w-full flex-col gap-2.5 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[14px] font-medium text-[#0a0a0f] transition hover:bg-white/90"
            >
              Start building
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="glass inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-white/10"
            >
              Book a demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex w-full flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] text-white/40 sm:mt-12 sm:gap-x-5 sm:gap-y-2 sm:text-[12px]"
          >
            <span className="w-full sm:w-auto">Trusted by teams at</span>
            <span className="font-semibold tracking-wide text-white/60">VERCEL</span>
            <span className="font-semibold tracking-wide text-white/60">LINEAR</span>
            <span className="font-semibold tracking-wide text-white/60">RAYCAST</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[260px] w-full sm:h-[420px] md:h-[560px]"
        >
          <Scene3D scrollProgress={scrollYProgress} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

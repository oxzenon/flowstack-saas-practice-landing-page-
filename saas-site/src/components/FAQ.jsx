import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'How does the 14-day trial work?',
    a: 'No credit card required. You get full access to every Pro feature for 14 days. At the end, you can pick a plan or downgrade to Starter — your data stays put either way.',
  },
  {
    q: 'Can I switch plans later?',
    a: "Yes — anytime, in two clicks. Upgrades are prorated to the day. Downgrades take effect at the end of your current billing cycle so you're never charged twice.",
  },
  {
    q: 'Do you offer discounts for startups or non-profits?',
    a: 'We do. Startups under two years old and registered non-profits get 50% off any plan for the first year. Just email founders@flowstack.dev with a quick intro.',
  },
  {
    q: 'How is my data secured?',
    a: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are SOC 2 Type II and ISO 27001 certified, and Enterprise customers can request HIPAA BAAs and self-hosted deployments.',
  },
  {
    q: 'Can I export my data if I leave?',
    a: 'Always. Every plan includes one-click export of your entire workspace as JSON, plus a CSV export for each project. We will never hold your data hostage.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'Starter gets community support. Pro gets priority email with a 12-hour response time on weekdays. Enterprise gets a dedicated Slack channel, named account manager, and 24/7 phone support.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/8">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-white sm:py-6"
      >
        <span className="text-[14px] font-medium text-white sm:text-[15px]">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/60"
        >
          <Plus className="h-3.5 w-3.5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-10 text-[13px] leading-relaxed text-white/60 sm:pb-6 sm:text-[14px]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative border-b border-white/5 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-violet-300/80">
            FAQ
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,6vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            Questions, answered.
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-white/55 sm:text-[16px]">
            Can't find what you're looking for? Email us at hello@flowstack.dev.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 border-t border-white/8 sm:mt-14"
        >
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

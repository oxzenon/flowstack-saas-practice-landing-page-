import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    tagline: 'For individuals shipping side projects.',
    priceMonthly: 0,
    priceYearly: 0,
    cta: 'Start for free',
    highlight: false,
    features: [
      'Up to 3 projects',
      '1 GB storage',
      'Community support',
      'Basic analytics',
    ],
  },
  {
    name: 'Pro',
    tagline: 'For teams building serious products.',
    priceMonthly: 24,
    priceYearly: 19,
    cta: 'Start 14-day trial',
    highlight: true,
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Priority support',
      'Advanced analytics',
      'AI workflows',
      'Custom integrations',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For organizations that need it all.',
    priceMonthly: null,
    priceYearly: null,
    cta: 'Talk to sales',
    highlight: false,
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated account team',
      'SOC 2 & HIPAA',
      'SSO + SCIM',
      'Custom SLA',
    ],
  },
]

function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="relative border-b border-white/5 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-violet-300/80">
            Pricing
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,6vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            Simple, honest pricing.
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-white/55 sm:text-[16px]">
            Start free. Upgrade when you grow. Cancel anytime.
          </p>

          {/* Monthly / Yearly toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-[12px] sm:text-[13px]">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-3 py-1.5 transition sm:px-4 ${
                !yearly ? 'bg-white text-[#0a0a0f]' : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition sm:px-4 ${
                yearly ? 'bg-white text-[#0a0a0f]' : 'text-white/60 hover:text-white'
              }`}
            >
              Yearly
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  yearly ? 'bg-violet-100 text-violet-700' : 'bg-violet-500/20 text-violet-300'
                }`}
              >
                −20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3">
          {plans.map((plan, i) => {
            const price = yearly ? plan.priceYearly : plan.priceMonthly
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col rounded-2xl border p-6 sm:p-7 ${
                  plan.highlight
                    ? 'border-violet-400/30 bg-gradient-to-b from-violet-500/10 via-white/[0.03] to-white/[0.02] shadow-[0_0_60px_-20px_rgba(139,92,246,0.4)] md:-translate-y-2'
                    : 'border-white/8 bg-white/[0.02]'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}

                <h3 className="text-[15px] font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-[13px] text-white/50">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  {price === null ? (
                    <span className="text-[32px] font-semibold text-white sm:text-[40px]">
                      Custom
                    </span>
                  ) : (
                    <>
                      <span className="text-[40px] font-semibold leading-none text-white sm:text-[48px]">
                        ${price}
                      </span>
                      <span className="text-[13px] text-white/50">
                        / {yearly ? 'mo, billed yearly' : 'month'}
                      </span>
                    </>
                  )}
                </div>

                <a
                  href="#"
                  className={`group mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-medium transition ${
                    plan.highlight
                      ? 'bg-white text-[#0a0a0f] hover:bg-white/90'
                      : 'border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </a>

                <ul className="mt-7 space-y-2.5 border-t border-white/5 pt-6">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-[13px] text-white/70">
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${
                          plan.highlight ? 'text-violet-300' : 'text-white/40'
                        }`}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, AtSign, Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react'
import { site } from '../data/site'

const icons = { linkedin: Linkedin, x: AtSign, telegram: Send, discord: MessageCircle, github: Github }

export default function Contact() {
  const reducedMotion = useReducedMotion()
  const { email, channels } = site.contact

  return <section id="contact" className="section-wrap" aria-labelledby="contact-heading">
    <motion.div initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-transparent to-transparent px-6 py-14 text-center shadow-glow sm:px-12 sm:py-20">
      <p className="eyebrow text-violet-300">04 / Contact</p>
      <h2 id="contact-heading" className="heading mx-auto mt-5 max-w-2xl">Have an idea? Let&apos;s make it real.</h2>
      <p className="mx-auto mt-5 max-w-lg text-zinc-400">I&apos;m always open to meaningful conversations, fresh challenges, and interesting collaborations.</p>
      {email ? <a href={`mailto:${email}`} aria-label={`Send an email to ${email}`} className="group mx-auto mt-9 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-violet-200 focus-visible:outline-zinc-100"><Mail size={16} /> Send me an email <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a> : <p className="mt-9 text-sm text-zinc-500"><Mail size={16} className="mr-2 inline" />Contact details coming soon.</p>}
      <div className="mx-auto mt-12 max-w-2xl border-t border-white/10 pt-7 text-left">
        <p className="text-sm font-medium text-white">Let&apos;s connect</p>
        <p className="mt-1 text-sm text-zinc-500">Available for interesting projects and meaningful collaborations.</p>
        <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2" aria-label="Professional contact channels">
          {channels.map(channel => {
            const Icon = icons[channel.id]
            const content = <><Icon size={17} aria-hidden="true" /><span>{channel.label}</span>{channel.url ? <ArrowUpRight size={15} className="ml-auto opacity-55 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" aria-hidden="true" /> : <span className="ml-auto text-[11px] text-zinc-500">{channel.unavailableMessage}</span>}</>
            return <li key={channel.id}>{channel.url ? <a href={channel.url} target="_blank" rel="noopener noreferrer" aria-label={channel.ariaLabel} className="group flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 text-sm font-medium text-zinc-300 transition hover:border-violet-400/50 hover:bg-violet-400/[0.08] hover:text-white">{content}</a> : <div aria-label={`${channel.ariaLabel} unavailable until a URL is provided`} className="flex min-h-12 items-center gap-3 rounded-xl border border-dashed border-white/10 bg-white/[0.015] px-4 text-sm font-medium text-zinc-500" aria-disabled="true">{content}</div>}</li>
          })}
        </ul>
      </div>
    </motion.div>
  </section>
}

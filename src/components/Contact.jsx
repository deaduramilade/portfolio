import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { site } from '../data/site'

export default function Contact() {
  const reducedMotion = useReducedMotion()
  return <section id="contact" className="section-wrap"><motion.div initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-transparent px-6 py-14 text-center sm:px-12 sm:py-20"><p className="eyebrow text-violet-300">04 / Contact</p><h2 className="heading mx-auto mt-5 max-w-2xl">Have an idea? Let’s make it real.</h2><p className="mx-auto mt-5 max-w-lg text-zinc-400">I’m always open to meaningful conversations, fresh challenges, and interesting collaborations.</p>{site.email ? <a href={`mailto:${site.email}`} className="mx-auto mt-9 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-violet-200"><Mail size={16}/> Send me an email <ArrowUpRight size={16}/></a> : <p className="mt-9 text-sm text-zinc-500"><Mail size={16} className="mr-2 inline" />Contact details coming soon.</p>}</motion.div></section>
}

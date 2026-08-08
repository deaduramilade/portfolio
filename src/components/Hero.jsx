import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
const rise = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function Hero() {
  const reducedMotion = useReducedMotion()
  return <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-16 sm:px-8">
    <div className="absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[110px]" />
    <motion.div initial={reducedMotion ? false : 'hidden'} animate="visible" transition={{ staggerChildren: .13 }} className="relative z-10 mx-auto w-full max-w-6xl py-20">
      <motion.p variants={rise} className="mb-5 text-sm font-medium tracking-[.18em] text-violet-300 uppercase">Hello, I’m Samuel</motion.p><motion.h1 variants={rise} className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.055em] text-white sm:text-7xl lg:text-8xl">Samuel Okunribido<span className="text-violet-400">.</span></motion.h1><motion.p variants={rise} className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">Frontend Vibe Developer <span className="mx-2 text-violet-400">|</span> AI &amp; Cybersecurity Enthusiast</motion.p><motion.p variants={rise} className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">Building modern digital experiences at the intersection of frontend engineering, AI, and cybersecurity.</motion.p>
      <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-4"><a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">View projects <ArrowDownRight size={17} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a><a href="#contact" className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/35">Contact me</a></motion.div>
    </motion.div>
  </section>
}

import { motion, useReducedMotion } from 'framer-motion'

export default function About() {
  const reducedMotion = useReducedMotion()
  return <section id="about" className="section-wrap border-y border-white/5"><motion.div initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} className="grid gap-10 md:grid-cols-[1fr_2fr]"><p className="eyebrow">01 / About me</p><div><h2 className="heading">Building with curiosity, purpose, and a little bit of magic.</h2><p className="mt-6 max-w-2xl leading-8 text-zinc-400">I’m Samuel Okunribido, a frontend developer who enjoys turning bold ideas into elegant, useful interfaces. I’m especially drawn to the intersection of thoughtful design, artificial intelligence, and digital security.</p><p className="mt-4 max-w-2xl leading-8 text-zinc-400">Through practical projects and continuous learning, I’m exploring GRC and security-oriented thinking alongside modern frontend development. My focus is simple: create experiences that are fast, accessible, and memorable.</p></div></motion.div></section>
}

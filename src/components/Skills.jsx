import { motion, useReducedMotion } from 'framer-motion'

const skillGroups = [
  { title: 'Frontend', skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'] },
  { title: 'AI / Automation', skills: ['Python', 'AI APIs', 'AI agents', 'Automation'] },
  { title: 'Cybersecurity / GRC', skills: ['Risk assessment', 'Security governance', 'Compliance', 'Threat intelligence', 'Security documentation'] },
]

export default function Skills() {
  const reducedMotion = useReducedMotion()
  return <section id="skills" className="section-wrap"><p className="eyebrow">02 / Toolkit</p><h2 className="heading mt-5 max-w-xl">Tools and disciplines I’m exploring.</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{skillGroups.map((group, groupIndex) => <motion.div key={group.title} initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: reducedMotion ? 0 : groupIndex * .08 }}><h3 className="text-sm font-semibold text-white">{group.title}</h3><div className="mt-4 flex flex-wrap gap-2.5">{group.skills.map(skill => <span key={skill} className="rounded-full border border-white/10 bg-white/[.03] px-3.5 py-2 text-sm text-zinc-300 transition hover:border-violet-400/60 hover:bg-violet-400/10 hover:text-white">{skill}</span>)}</div></motion.div>)}</div></section>
}

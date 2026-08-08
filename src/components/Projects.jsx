import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'

function ProjectLink({ href, label, icon }) {
  if (!href) return <span aria-label={`${label} coming soon`} className="project-link cursor-not-allowed opacity-40">{label} {icon}</span>
  return <a href={href} target="_blank" rel="noreferrer" className="project-link">{label} {icon}</a>
}

export default function Projects() {
  const reducedMotion = useReducedMotion()
  return <section id="projects" className="section-wrap border-y border-white/5">
    <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">03 / Selected work</p><h2 className="heading mt-5">Projects in progress.</h2></div><p className="max-w-xs text-sm leading-6 text-zinc-500">A focused selection across AI, frontend engineering, and security-oriented product thinking.</p></div>
    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{projects.map((project, index) => <motion.article key={project.id} initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ delay: reducedMotion ? 0 : index * .05 }} className={`group flex min-h-72 flex-col rounded-2xl border bg-panel p-6 transition hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-glow ${project.featured ? 'border-violet-400/35' : 'border-white/10'}`}>
      <div className="mb-10 flex items-center justify-between gap-3"><span className="text-xs font-medium tracking-widest text-violet-300">0{index + 1}</span><span className="rounded-full bg-violet-400/10 px-2.5 py-1 text-[11px] font-medium text-violet-200">{project.category}</span></div><h3 className="text-xl font-semibold text-white">{project.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map(tech => <span key={tech} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-400">{tech}</span>)}</div><div className="mt-auto flex gap-4 pt-7"><ProjectLink href={project.liveDemo} label="Live demo" icon={<ExternalLink size={14} />} /><ProjectLink href={project.github} label="GitHub" icon={<Github size={14} />} /></div>
    </motion.article>)}</div>
  </section>
}

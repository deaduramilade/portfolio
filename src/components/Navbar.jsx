import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/75 backdrop-blur-xl">
    <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <a href="#home" className="text-sm font-bold tracking-tight">SO<span className="text-violet-400">.</span></a>
      <div className="hidden items-center gap-7 md:flex">{links.map(link => <a key={link} href={`#${link === 'Home' ? 'home' : link.toLowerCase()}`} className="text-sm text-zinc-400 transition hover:text-white">{link}</a>)}</div>
      <a href="#contact" className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-violet-300 md:block">Let's talk</a>
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="text-zinc-200 md:hidden">{open ? <X size={21} /> : <Menu size={21} />}</button>
    </nav>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t border-white/5 bg-ink md:hidden">
      <div className="flex flex-col px-5 py-4">{links.map(link => <a onClick={() => setOpen(false)} key={link} href={`#${link === 'Home' ? 'home' : link.toLowerCase()}`} className="py-3 text-sm text-zinc-300">{link}</a>)}</div>
    </motion.div>}</AnimatePresence>
  </header>
}

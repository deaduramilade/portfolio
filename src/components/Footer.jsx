import { site } from '../data/site'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  const socialChannels = site.contact.channels.filter(channel => channel.url)

  return <footer className="mx-auto max-w-6xl border-t border-white/5 px-5 py-8 sm:px-8">
    <div className="flex flex-col gap-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
      <div><p>© {new Date().getFullYear()} Samuel Okunribido.</p><p className="mt-1">Frontend development · AI · Cybersecurity</p></div>
      <div className="flex flex-col gap-3 sm:items-end">
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-4 gap-y-2">{links.map(link => <a key={link} href={`#${link === 'Home' ? 'home' : link.toLowerCase()}`} className="transition hover:text-white">{link}</a>)}</nav>
        <nav aria-label="Professional profiles" className="flex flex-wrap gap-x-3 gap-y-1">{socialChannels.map(channel => <a key={channel.id} href={channel.url} target="_blank" rel="noopener noreferrer" aria-label={channel.ariaLabel} className="transition hover:text-violet-300">{channel.label}</a>)}</nav>
      </div>
    </div>
  </footer>
}

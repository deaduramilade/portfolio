import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return <div className="overflow-x-hidden bg-ink text-zinc-100 selection:bg-violet-500/40">
    <Navbar />
    <main><Hero /><About /><Skills /><Projects /><Contact /></main>
    <Footer />
  </div>
}

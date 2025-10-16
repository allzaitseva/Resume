import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='min-h-screen bg-slate-800'>
      <div className='px-10 md:px-40'>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

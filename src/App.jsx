import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Work from './components/Work.jsx'
import Stack from './components/Stack.jsx'
import AITools from './components/AITools.jsx'
import Approach from './components/Approach.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen [background:var(--bg-gradient)] font-sans leading-[1.5] text-[var(--text)] antialiased transition-colors duration-200">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Stack />
      <AITools />
      <Approach />
      <Contact />
      <Footer />
    </div>
  )
}

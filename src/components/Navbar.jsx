import React from 'react'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-[1040px] items-center justify-between px-8 max-[760px]:px-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-lg font-semibold tracking-[0.02em] cursor-pointer"
        >
          ahmad<span className="text-[var(--amber)]">.dev</span>
        </button>

        <div className="flex items-center gap-7 font-mono text-[13px] text-[var(--text-dim)] max-[760px]:gap-2">
          {[
            ['#about', 'About'],
            ['#experience', 'Experience'],
            ['#work', 'Work'],
            ['#stack', 'Stack'],
            ['#ai-tools', 'AI Tools'],
            ['#contact', 'Contact'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="transition-colors hover:text-[var(--text)] max-[760px]:hidden"
            >
              {label}
            </a>
          ))}
          <a
            href="/Ahmad_Arshad_Frontend_Full_Stack_Developer.pdf"
            download="Ahmad_Arshad_Frontend_Full_Stack_Developer.pdf"
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--amber)] px-3 py-1.5 font-mono text-[12px] font-semibold text-[var(--amber)] transition-colors hover:bg-[var(--amber)] hover:text-[#161616]"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download CV</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

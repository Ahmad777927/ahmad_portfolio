import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--bg-raised)] text-[15px] leading-none text-[var(--text)] transition-colors hover:border-[var(--text-dim)]"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

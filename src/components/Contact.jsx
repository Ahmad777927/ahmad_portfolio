import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-[760px]:py-14">
      <div className="mx-auto max-w-[1040px] px-8 max-[760px]:px-5">
        <div className="mb-11 flex items-baseline gap-3.5">
          <span className="font-mono text-[13px] text-[var(--text-dim)]">07</span>
          <h2 className="text-[28px] font-extrabold tracking-[-0.01em]">Get in touch</h2>
        </div>

        <p className="mb-7 max-w-[480px] text-[var(--text-dim)]">
          Open to frontend roles — React/Next.js-focused, Pakistan or Middle East based, remote-friendly.
        </p>

        <div className="flex flex-wrap gap-3.5">
          <a className="inline-block rounded-md border border-[var(--amber)] bg-[var(--amber)] px-5 py-3 font-mono text-[13px] font-semibold text-[#161616] transition hover:brightness-110" href="mailto:ahmadarshad757@gmail.com">
            ahmadarshad757@gmail.com
          </a>
          <a className="inline-block rounded-md border border-[var(--line)] px-5 py-3 font-mono text-[13px] text-[var(--text)] transition hover:border-[var(--text-dim)]" href="https://github.com/Ahmad777927" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="inline-block rounded-md border border-[var(--line)] px-5 py-3 font-mono text-[13px] text-[var(--text)] transition hover:border-[var(--text-dim)]" href="https://www.linkedin.com/in/ahmad-arshad-8b963b190/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="inline-block rounded-md border border-[var(--line)] px-5 py-3 font-mono text-[13px] text-[var(--text)] transition hover:border-[var(--text-dim)]" href="https://www.behance.net/ahmadarshad7" target="_blank" rel="noopener noreferrer">
            Behance
          </a>
          <a className="inline-block rounded-md border border-[var(--line)] px-5 py-3 font-mono text-[13px] text-[var(--text)] transition hover:border-[var(--text-dim)]" href="https://wa.me/923324813621" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

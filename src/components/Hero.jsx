import React from 'react'

export default function Hero() {
  return (
    <header className="border-b border-[var(--line)] py-24 max-[760px]:py-16">
      <div className="mx-auto max-w-[1040px] px-8 max-[760px]:px-5">
        <div className="mb-5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-[var(--teal)]">
          <span className="h-2 w-2 rounded-full bg-[var(--teal)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--teal)_18%,transparent)]" />
          Full-Stack (Frontend Focused) — Available for new roles
        </div>

        <h1 className="max-w-[820px] text-[clamp(38px,6vw,64px)] font-extrabold leading-[1.04] tracking-[-0.02em]">
          I build the interface <span className="font-mono font-semibold italic text-[var(--amber)]">and</span> the API underneath it.
        </h1>

        <p className="mt-[22px] max-w-[600px] text-lg text-[var(--text-dim)]">
          4+ years shipping production React, Next.js and Angular front ends — backed by
          Node.js, Express.js and MongoDB when the work calls for a full stack, not just a
          UI layer. Startup speed, enterprise discipline.
        </p>

        <div className="mt-10 flex flex-wrap gap-8">
          <div className="font-mono text-[13px]">
            <span className="block text-[26px] font-bold text-[var(--text)]">
              <span className="typewriter typewriter-1">4+</span>
            </span>
            <span className="text-[var(--text-dim)]">yrs experience</span>
          </div>
          <div className="font-mono text-[13px]">
            <span className="block text-[26px] font-bold text-[var(--text)]">
              <span className="typewriter typewriter-2">FE→BE</span>
            </span>
            <span className="text-[var(--text-dim)]">React to MongoDB, one stack</span>
          </div>
          {/* <div className="font-mono text-[13px]">
            <span className="block text-[26px] font-bold text-[var(--text)]">
              <span className="typewriter typewriter-3">10+</span>
            </span>
            <span className="text-[var(--text-dim)]">tools in daily stack</span>
          </div> */}
        </div>

        <div className="mt-10 flex flex-wrap gap-3.5">
          <a
            className="inline-block rounded-md border border-[var(--amber)] bg-[var(--amber)] px-5 py-3 font-mono text-[13px] font-semibold text-[#161616] transition hover:brightness-110"
            href="#work"
          >
            See the work →
          </a>
          <a
            className="inline-block rounded-md border border-[var(--line)] px-5 py-3 font-mono text-[13px] text-[var(--text)] transition hover:border-[var(--text-dim)]"
            href="#contact"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}

import React from 'react'

const facts = [
  { k: 'Frontend', v: 'React · Next.js · Angular' },
  { k: 'Styling', v: 'CSS (Animation) · Tailwind CSS · Bootstrap · Material UI · Shadcn/ui' },
  { k: 'Backend', v: 'Node.js · Express.js · MongoDB' },
  { k: 'Platform', v: 'ASP.NET MVC · Azure · Azure DevOps' },
  { k: 'Workflow', v: 'Agile · Git · JIRA · Slack · CI/CD' },
]

const sectionClass = "border-b border-[var(--line)] py-20 max-[760px]:py-14"
const wrapClass = "mx-auto max-w-[1040px] px-8 max-[760px]:px-5"

export default function About() {
  return (
    <section id="about" className={sectionClass}>
      <div className={wrapClass}>
        <div className="mb-11 flex items-baseline gap-3.5">
          <span className="font-mono text-[13px] text-[var(--text-dim)]">01</span>
          <h2 className="text-[28px] font-extrabold tracking-[-0.01em]">About</h2>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] items-start gap-12 max-[760px]:grid-cols-1">
          <div className="max-w-[560px]">
            <p className="mb-4 text-[15.5px] text-[var(--text-dim)]">
              <strong className="font-semibold text-[var(--text)]">Full-Stack (Frontend Focused)</strong> developer with 4+ years of
              experience — the front end is where I specialize, but I build and connect
              the backend that feeds it, using Node.js, Express.js and MongoDB.
            </p>
            <p className="mb-4 text-[15.5px] text-[var(--text-dim)]">
              Day to day that means React, Next.js and Angular interfaces backed by REST
              APIs I design and ship myself: Express routes, Mongoose schemas, auth flows,
              and the MongoDB aggregation pipelines behind the dashboards I build.
            </p>
            <p className="text-[15.5px] text-[var(--text-dim)]">
              Background spans <strong className="font-semibold text-[var(--text)]">startup and enterprise</strong> environments, working
              in agile sprint teams off JIRA boards, shipping through Git and Azure DevOps
              pipelines, with performance, accessibility and cross-browser consistency
              treated as requirements, not afterthoughts.
            </p>
          </div>

          <div className="flex flex-col gap-px overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--line)]">
            {facts.map((f) => (
              <div key={f.k} className="flex justify-between gap-4 bg-[var(--bg-raised)] px-5 py-4 font-mono text-[12.5px]">
                <span className="whitespace-nowrap text-[var(--text-dim)]">{f.k}</span>
                <span className="text-right text-[var(--text)]">{f.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

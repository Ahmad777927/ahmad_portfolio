import React from 'react'

const items = [
  { num: '01', title: 'Agile by default', description: 'Comfortable in sprint-based teams, working directly from JIRA boards across startup and enterprise environments.' },
  { num: '02', title: 'Performance-minded', description: 'Optimize for load time and cross-browser consistency, not just feature completeness — accessibility included from the start.' },
  { num: '03', title: 'Ships through CI/CD', description: 'Works end-to-end with Git and Azure DevOps pipelines, from feature branch to deployed build.' },
]

export default function Approach() {
  return (
    <section id="approach" className="border-b border-[var(--line)] py-20 max-[760px]:py-14">
      <div className="mx-auto max-w-[1040px] px-8 max-[760px]:px-5">
        <div className="mb-11 flex items-baseline gap-3.5">
          <span className="font-mono text-[13px] text-[var(--text-dim)]">06</span>
          <h2 className="text-[28px] font-extrabold tracking-[-0.01em]">How I work</h2>
        </div>

        <div className="grid grid-cols-3 gap-7 max-[760px]:grid-cols-1">
          {items.map((item) => (
            <div key={item.num} className="rounded-lg border border-[var(--line)] bg-[var(--bg-raised)] p-[22px]">
              <span className="mb-2.5 block font-mono text-[13px] text-[var(--amber)]">{item.num}</span>
              <h4 className="mb-2 text-base font-semibold">{item.title}</h4>
              <p className="text-[13.5px] text-[var(--text-dim)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

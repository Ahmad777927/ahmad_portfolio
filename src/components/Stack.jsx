import React from 'react'

const TreeItem = ({ children }) => (
  <li className="my-[7px] text-[var(--text-dim)]">{children}</li>
)

const File = ({ children }) => <span className="text-[var(--text)]">{children}</span>
const Folder = ({ children }) => <span className="font-semibold text-[var(--teal)]">{children}</span>
const Tag = ({ children }) => <span className="text-[var(--amber)]">{children}</span>

export default function Stack() {
  return (
    <section id="stack" className="border-b border-[var(--line)] py-20 max-[760px]:py-14">
      <div className="mx-auto max-w-[1040px] px-8 max-[760px]:px-5">
        <div className="mb-11 flex items-baseline gap-3.5">
          <span className="font-mono text-[13px] text-[var(--text-dim)]">04</span>
          <h2 className="text-[28px] font-extrabold tracking-[-0.01em]">Stack</h2>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[var(--line)] bg-[var(--bg-raised)] p-[26px_28px] font-mono text-sm">
          <span className="font-semibold text-[var(--text)]">Ahmad/</span>
          <ul className="ml-[18px] list-none border-l border-dashed border-[var(--line)] pl-[18px]">
            <TreeItem>
              <Folder>Frameworks/</Folder>
              <ul className="ml-[18px] list-none border-l border-dashed border-[var(--line)] pl-[18px]">
                <TreeItem><File>React.js</File> <Tag>// primary</Tag></TreeItem>
                <TreeItem><File>Next.js</File></TreeItem>
                <TreeItem><File>Angular</File></TreeItem>
              </ul>
            </TreeItem>
            <TreeItem>
              <Folder>styling/</Folder>
              <ul className="ml-[18px] list-none border-l border-dashed border-[var(--line)] pl-[18px]">
                <TreeItem><File>Tailwind CSS</File></TreeItem>
                <TreeItem><File>Material UI</File></TreeItem>
                <TreeItem><File>Bootstrap</File></TreeItem>
                <TreeItem><File>PrimeNG</File></TreeItem>
                <TreeItem><File>Shadcn/ui</File></TreeItem>
                <TreeItem><File>SASS</File></TreeItem>
              </ul>
            </TreeItem>
            <TreeItem>
              <Folder>State/</Folder>
              <ul className="ml-[18px] list-none border-l border-dashed border-[var(--line)] pl-[18px]">
                <TreeItem><File>Redux</File> · <File>Redux Toolkit</File></TreeItem>
                <TreeItem><File>TanStack Query</File></TreeItem>
              </ul>
            </TreeItem>
            <TreeItem>
              <Folder>Backend/</Folder>
              <ul className="ml-[18px] list-none border-l border-dashed border-[var(--line)] pl-[18px]">
                <TreeItem><File>Node.js</File></TreeItem>
                <TreeItem><File>Express.js</File></TreeItem>
                <TreeItem><File>MongoDB</File></TreeItem>
              </ul>
            </TreeItem>
            <TreeItem>
              <Folder>Platform/</Folder>
              <ul className="ml-[18px] list-none border-l border-dashed border-[var(--line)] pl-[18px]">
                <TreeItem><File>ASP.NET MVC</File></TreeItem>
                <TreeItem><File>Azure</File> · <File>Azure DevOps</File></TreeItem>
                <TreeItem><File>Git</File> · <File>JIRA</File></TreeItem>
              </ul>
            </TreeItem>
          </ul>
        </div>
      </div>
    </section>
  )
}

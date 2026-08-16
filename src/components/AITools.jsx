import React from 'react'

export default function AITools() {
  return (
    <section id="ai-tools" className="border-b border-[var(--line)] py-20 max-[760px]:py-14">
      <div className="mx-auto max-w-[1040px] px-8 max-[760px]:px-5">
        <div className="mb-11 flex items-baseline gap-3.5">
          <span className="font-mono text-[13px] text-[var(--text-dim)]">05</span>
          <h2 className="text-[28px] font-extrabold tracking-[-0.01em]">AI tools</h2>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[var(--line)] bg-[var(--bg-raised)] p-[26px_28px] font-mono text-sm">
          <span className="font-semibold text-[var(--text)]">ai-workflow/</span>
          <ul className="ml-[18px] list-none border-l border-dashed border-[var(--line)] pl-[18px]">
            <li className="my-[7px] text-[var(--text-dim)]">
              <span className="font-semibold text-[var(--teal)]">agentic-coding/</span>
              <ul className="ml-[18px] list-none border-l border-dashed border-[var(--line)] pl-[18px]">
                <li className="my-[7px]"><span className="text-[var(--text)]">Claude Code</span> <span className="text-[var(--amber)]">// build, refactor, debug end-to-end</span></li>
                <li className="my-[7px]"><span className="text-[var(--text)]">Claude Desktop</span> <span className="text-[var(--amber)]">// MCP integrations, e.g. Apify</span></li>
              </ul>
            </li>
            <li className="my-[7px] text-[var(--text-dim)]">
              <span className="font-semibold text-[var(--teal)]">productive-coding/</span>
              <ul className="ml-[18px] list-none border-l border-dashed border-[var(--line)] pl-[18px]">
                <li className="my-[7px]"><span className="text-[var(--text)]">Cursor AI</span></li>
                <li className="my-[7px]"><span className="text-[var(--text)]">Antigravity</span></li>
                <li className="my-[7px]"><span className="text-[var(--text)]">GitHub Copilot</span></li>
              </ul>
            </li>
            <li className="my-[7px] text-[var(--text-dim)]">
              <span className="font-semibold text-[var(--teal)]">everyday/</span>
              <ul className="ml-[18px] list-none border-l border-dashed border-[var(--line)] pl-[18px]">
                <li className="my-[7px]"><span className="text-[var(--text)]">ChatGPT</span></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

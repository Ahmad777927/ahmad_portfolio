
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import ProjectImage from './ProjectImage'

const projects = [
  {
    idx: 'Case 01 — Logistics platform',
    name: 'Truckoom',
    role: 'Transportation management system',
    description:
      'A full TMS built around two surfaces — a customer-facing panel for booking and tracking shipments, and a back-office dashboard for dispatch and fleet operations teams to run day-to-day logistics.',
    tags: ['React', 'Dashboard UI', 'Role-based views'],
    glyph: 'TM',
    image: img1,
  },
  {
    idx: 'Case 02 — Utility tool',
    name: 'ScanZilla',
    role: 'QR code generator',
    description:
      'A QR code generator app — create, customize and export QR codes on demand, built as a fast, focused utility rather than a bloated all-in-one tool.',
    tags: ['React', 'QR Generation', 'Utility UI'],
    glyph: 'SZ',
    image: img2,
  },
  {
    idx: 'Case 03 — Sports tech',
    name: 'Padel AI',
    role: 'Padel AI card application',
    description:
      'A Padel AI card application — player-facing cards and stats surfaced through a clean, mobile-friendly interface.',
    tags: ['React', 'Card UI', 'Sports app'],
    glyph: 'PA',
    image: img3,
  },
  {
    idx: 'Case 04 — Full-stack auth',
    name: 'MERN AUTH',
    role: 'Advance auth',
    description:
      'A full-stack MERN authentication system — advanced auth flows built end-to-end across MongoDB, Express, React and Node.',
    tags: ['MongoDB', 'Express.js', 'JWT Auth'],
    glyph: 'MA',
    image: img4,
  },
]

export default function Work() {
  return (
    <section id="work" className="border-b border-[var(--line)] py-20 max-[760px]:py-14">
      <div className="mx-auto max-w-[1040px] px-8 max-[760px]:px-5">
        <div className="mb-11 flex items-baseline gap-3.5">
          <span className="font-mono text-[13px] text-[var(--text-dim)]">03</span>
          <h2 className="text-[28px] font-extrabold tracking-[-0.01em]">Selected work</h2>
        </div>

        {projects.map((p, index) => (
          <div
            className={`grid grid-cols-[1fr_1.3fr] items-start gap-11 border-t border-[var(--line)] py-9 max-[760px]:grid-cols-1 ${index === 0 ? 'border-t-0 pt-0' : ''}`}
            key={p.name}
          >
            <div>
              <div className="mb-2.5 font-mono text-[13px] text-[var(--text-dim)]">{p.idx}</div>
              <h3 className="mb-2 text-2xl font-bold">{p.name}</h3>
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-[var(--teal)]">{p.role}</div>
              <p className="max-w-[520px] text-[15px] text-[var(--text-dim)]">{p.description}</p>

              <div className="mt-[18px] flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-dim)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="group relative h-[270px] w-full overflow-hidden rounded-[10px] border border-[var(--line)] bg-[var(--bg-raised)] shadow-inner">
              <div className="pointer-events-none absolute left-0 top-0 z-10 flex w-full items-center gap-1.5 border-b border-[var(--line)] bg-[var(--bg-raised)]/90 px-3.5 py-2.5 backdrop-blur-sm">
                <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f56]" />
                <span className="h-[9px] w-[9px] rounded-full bg-[#ffbd2e]" />
                <span className="h-[9px] w-[9px] rounded-full bg-[#27c93f]" />
              </div>

              <ProjectImage image={p.image} name={p.name} glyph={p.glyph} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


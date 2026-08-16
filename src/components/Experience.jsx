import React from 'react'

const experience = [
  {
    company: 'Truckoom Technologies',
    role: 'Frontend Developer',
    dates: '05/2023 – Present',
    description: `
Developed and maintained a scalable fleet management platform used to manage transportation operations, customers, drivers, vehicles, orders, and real-time deliveries.

• Built and maintained TMS, Customer, and Back Office panels for end-to-end logistics operations.
• Contributed to the Truckoom V2 frontend rebuild using Angular and PrimeNG.
• Developed reusable UI components with Angular, PrimeNG, Tailwind CSS, and Bootstrap.
• Integrated REST APIs and collaborated with Node.js/MongoDB backend services.
• Optimized frontend performance for large datasets and real-time updates.
• Implemented responsive, accessible, and cross-browser-compatible interfaces.
• Used Git and Azure DevOps for version control, CI/CD, and deployments.
• Leveraged AI tools including ChatGPT, Claude, and Cursor to improve development efficiency.
  `,
    needsFill: false,
  },
  {
    company: 'Saffran Labs',
    role: 'Frontend Developer',
    dates: '02/2022 – 03/2023',
    description: `
  Developed and maintained scalable web applications for FinTech and AdTech industries using React, Next.js, and TypeScript.Collaborated with cross-functional teams to deliver high-quality software solutions within Agile environments.

• Built and maintained a real-time AdTech billing platform with order management, tracking, and invoicing systems.
• Contributed to the redesign of a FinTech compliance reporting tool, enhancing user experience and performance.
• Developed reusable React components and optimized application architecture for scalability and maintainability.
• Integrated RESTful APIs and managed state using React Query and Redux Toolkit.
• Implemented responsive designs with Tailwind CSS and Bootstrap, ensuring cross-browser compatibility.
• Utilized AI tools (ChatGPT, Claude, Cursor) to accelerate development and improve code quality.
• Used Git, JIRA, and Slack for version control, project management, and team collaboration.
  `,
    needsFill: false,
  },
  {
    company: 'Sani IT Consultant',
    role: 'Frontend Developer',
    dates: '04/2022 – 06/2022',
    description: `
Assisted senior developers in building and maintaining web applications for clients, gaining hands-on experience in frontend development and software engineering best practices.

• Contributed to multiple client projects, assisting in the development of responsive web interfaces.
• Learned and applied frontend development fundamentals, including HTML, CSS, and JavaScript.
• Used Git for version control and collaborated with the development team on project tasks.
• Gained exposure to Agile development methodologies and participated in team meetings and code reviews.
• Developed problem-solving skills by debugging and troubleshooting issues in existing codebases.
• Worked with backend developers to integrate frontend components with backend services.
• Improved technical skills through training and mentorship from experienced developers.
  `,
    needsFill: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="border-b border-[var(--line)] py-20 max-[760px]:py-14">
      <div className="mx-auto max-w-[1040px] px-8 max-[760px]:px-5">
        <div className="mb-11 flex items-baseline gap-3.5">
          <span className="font-mono text-[13px] text-[var(--text-dim)]">02</span>
          <h2 className="text-[28px] font-extrabold tracking-[-0.01em]">Experience</h2>
        </div>

        {experience.map((job, index) => (
          <div
            className={`grid grid-cols-[200px_1fr] gap-8 border-t border-[var(--line)] py-[30px] max-[760px]:grid-cols-1 max-[760px]:gap-1.5 ${index === 0 ? 'border-t-0 pt-0' : ''}`}
            key={job.company}
          >
            <div className="font-mono text-xs text-[var(--text-dim)]">{job.dates}</div>
            <div>
              <div className="mb-2 flex flex-wrap items-baseline gap-3">
                <h3 className="text-xl font-bold">{job.company}</h3>
                <span className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-[var(--teal)]">{job.role}</span>
              </div>
              <p className="max-w-[560px] text-[14.5px] text-[var(--text-dim)]">{job.description}</p>
              {/* <div className="mt-2.5 inline-block rounded-md border border-dashed border-[var(--line)] px-2.5 py-2 font-mono text-[11px] text-[var(--amber)]">
                {job.needsFill}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

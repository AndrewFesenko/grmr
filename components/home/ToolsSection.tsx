'use client'

import React from 'react'
import Link from 'next/link'
import { ClipboardCheck, Accessibility, FileText, Settings } from 'lucide-react'

const tools = [
  {
    title: 'Diagnostic Tests',
    icon: <ClipboardCheck className="w-8 h-8" />,
    description: 'Quickly assess skill levels and target areas for growth.',
    href: '/resources/diagnostic-tests'
  },
  {
    title: 'TutorCruncher',
    icon: <Settings className="w-8 h-8" />,
    description: 'Streamline and manage all tutoring sessions with ease.',
    href: '/resources/tutorcruncher'
  },
  {
    title: 'Accessibility Tools',
    icon: <Accessibility className="w-8 h-8" />,
    description: 'Support tools for learners of all abilities.',
    href: '/resources/accessibility'
  },
  {
    title: 'Extra Resources',
    icon: <FileText className="w-8 h-8" />,
    description: 'Curated tools to enrich and extend learning.',
    href: '/resources/templates'
  },
]

const ToolsSection = () => {
  return (
      <section className="w-full py-20 px-4">
        <div className="mb-8 text-center">
          <div className="inline-flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg min-h-[90px]">
            <h2 className="text-4xl font-semibold text-primary">Academic Resources</h2>
            <p className="text-muted-foreground text-base mt-2">
              Resources to enhance your educational experience
            </p>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
                <div
                    key={tool.title}
                    className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-all flex flex-col items-center text-center hover:border-primary/30"
                >
                  <div className="mb-4 bg-primary-light text-primary p-3 rounded-lg shadow-sm">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground mb-6">{tool.description}</p>
                  <Link
                      href={tool.href}
                      className="text-primary font-medium flex items-center hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ToolsSection

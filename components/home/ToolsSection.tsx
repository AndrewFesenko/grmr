'use client'

import React from 'react'
import Link from 'next/link'
import { ClipboardCheck, Accessibility, FileText, Settings } from 'lucide-react'

const tools = [
  {
    title: 'Diagnostic Tests',
    icon: <ClipboardCheck className="w-8 h-8" />,
    description: 'Quickly assess skill levels and identify growth areas with targeted questions.',
    href: '/resources/diagnostic-tests'
  },
  {
    title: 'TutorCruncher',
    icon: <Settings className="w-8 h-8" />,
    description: 'Streamline scheduling and manage tutoring sessions using one easy platform.',
    href: '/resources/tutorcruncher'
  },
  {
    title: 'Accessibility Tools',
    icon: <Accessibility className="w-8 h-8" />,
    description: 'Support tools for learners of all abilities — designed to improve confidence.',
    href: '/resources/accessibility'
  },
  {
    title: 'Extra Resources',
    icon: <FileText className="w-8 h-8" />,
    description: 'Additional platforms and tools to extend learning and support enrichment.',
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
            <Link
              key={tool.title}
              href={tool.href}
              className="relative group overflow-hidden rounded-xl border border-border p-6 bg-white transition-all hover:shadow-md hover:border-primary/30 text-center flex flex-col items-center justify-center cursor-pointer"
            >
              {/* Lavender background layer */}
              <div className="absolute inset-0 z-0 bg-[#f3e8ff]" />

              {/* White overlay that collapses inward on hover */}
              <div
                className="absolute w-full h-full group-hover:w-0 group-hover:h-0 transition-all duration-500 ease-in-out z-10 rounded-xl bg-white"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />

              {/* Foreground content */}
              <div className="relative z-20 flex flex-col items-center text-center">
                <div className="mb-4 bg-primary-light text-primary p-3 rounded-lg shadow-sm">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-muted-foreground font-semibold mb-4 transition-colors duration-300 group-hover:text-[#86198f]">
                  {tool.description}
                </p>
                <span className="text-primary font-medium transition-colors duration-300">
                  Learn More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection

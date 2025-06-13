'use client'

import React from 'react'
import Link from 'next/link'
import { ClipboardCheck, Accessibility, FileText, Settings } from 'lucide-react'

const resources = [
    {
        title: 'Diagnostic Tests',
        icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
        description: 'Our diagnostic tests help students and tutors quickly assess current skill levels and identify areas for growth. Use these to tailor your learning journey and track progress over time.',
        href: '/resources/diagnostic-tests'
    },
    {
        title: 'TutorCruncher',
        icon: <Settings className="w-10 h-10 text-primary" />,
        description: 'TutorCruncher is our scheduling and session management platform. Book sessions, track attendance, and manage your tutoring experience all in one place.',
        href: '/resources/tutorcruncher'
    },
    {
        title: 'Accessibility Tools',
        icon: <Accessibility className="w-10 h-10 text-primary" />,
        description: 'We provide a suite of accessibility tools to support learners of all abilities, including text-to-speech, screen readers, and more. Our goal is to make learning inclusive for everyone.',
        href: '/resources/accessibility'
    },
    {
        title: 'Extra Resources',
        icon: <FileText className="w-10 h-10 text-primary" />,
        description: 'Explore additional platforms, templates, and enrichment materials to supplement your learning and tutoring experience.',
        href: '/resources/templates'
    },
]

const ResourcesPage = () => (
    <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-lg">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-2">Academic Resources</h1>
                <p className="text-muted-foreground text-lg">
                    Some other helpful resources designed to support students and tutors at every step.
                </p>
            </div>
            <div className="space-y-10">
                {resources.map((resource) => (
                    <div key={resource.title} className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white rounded-2xl shadow p-6">
                        <div>{resource.icon}</div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold text-primary mb-2">{resource.title}</h2>
                            <p className="text-muted-foreground mb-3">{resource.description}</p>
                            <Link
                                href={resource.href}
                                className="inline-block text-[#86198f] font-semibold hover:underline transition"
                            >
                                Learn More &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default ResourcesPage
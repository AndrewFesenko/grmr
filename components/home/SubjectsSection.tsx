'use client'

import React from 'react'
import Link from 'next/link'
import { BookOpen, Calculator, FlaskConical, Heart, Users } from 'lucide-react'

const subjects = [
    {
        title: 'English',
        icon: <BookOpen className="w-8 h-8" />,
        // description: 'Master language arts and literature',
        count: 14,
        href: '/my-journey?subject=english'
    },
    {
        title: 'Math',
        icon: <Calculator className="w-8 h-8" />,
        // description: 'From basics to advanced concepts',
        count: 18,
        href: '/my-journey?subject=math'
    },
    {
        title: 'Science',
        icon: <FlaskConical className="w-8 h-8" />,
        // description: 'Explore scientific principles',
        count: 12,
        href: '/my-journey?subject=science'
    },
    {
        title: 'Health',
        icon: <Heart className="w-8 h-8" />,
        // description: 'Health and medical studies',
        count: 8,
        href: '/my-journey?subject=health'
    },
    {
        title: 'Adults',
        icon: <Users className="w-8 h-8" />,
        // description: 'Lifelong learning resources',
        count: 10,
        href: '/my-journey?subject=adults'
    }
]

const shapeColors = ['#f8c4ea', '#c4e9fb', '#fff7c2', '#d4fbe3', '#dcd5fa']

const SubjectsSection = () => {
    return (
        <section className="w-full py-20 px-4">
            <div className="mb-8 text-center">
                <div className="inline-flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg min-h-[90px]">
                    <h2 className="text-4xl font-semibold text-primary">Explore Lessons by Subject</h2>
                    <p className="text-muted-foreground text-base mt-2">
                        Dive into subject-specific lessons designed to support every type of learner
                    </p>
                </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {subjects.map((subject, i) => (
                        <div
                            key={subject.title}
                            className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-all flex flex-col items-center text-center hover:border-primary/30"
                        >
                            <div
                                className="mb-4 p-3 rounded-lg shadow-sm"
                                style={{ backgroundColor: shapeColors[i % shapeColors.length] }}
                            >
                                {subject.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>
                            {/*<p className="text-muted-foreground mb-4">{subject.description}</p>*/}
                            <Link
                                href={subject.href}
                                className="text-primary font-medium flex items-center hover:underline"
                            >
                                Browse {subject.title} Lessons
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SubjectsSection

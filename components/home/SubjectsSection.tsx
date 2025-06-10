'use client'

import React from 'react'
import Link from 'next/link'
import { BookOpen, Calculator, FlaskConical, Heart, Users } from 'lucide-react'

const subjects = [
    {
        title: 'English',
        icon: <BookOpen className="w-8 h-8" />,
        href: '/my-journey?subject=english'
    },
    {
        title: 'Math',
        icon: <Calculator className="w-8 h-8" />,
        href: '/my-journey?subject=math'
    },
    {
        title: 'Science',
        icon: <FlaskConical className="w-8 h-8" />,
        href: '/my-journey?subject=science'
    },
    {
        title: 'Health',
        icon: <Heart className="w-8 h-8" />,
        href: '/my-journey?subject=health'
    },
    {
        title: 'Adults',
        icon: <Users className="w-8 h-8" />,
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
                        <Link
                            key={subject.title}
                            href={subject.href}
                            className="relative group overflow-hidden rounded-xl border border-border p-6 bg-white transition-all hover:shadow-md flex flex-col items-center text-center hover:border-primary/30 cursor-pointer"
                        >
                            {/* Color fill - always full size behind */}
                            <div
                                className="absolute inset-0 z-0"
                                style={{ backgroundColor: shapeColors[i % shapeColors.length] }}
                            />

                            {/* White overlay that shrinks inward on hover */}
                            <div
                                className="absolute w-full h-full group-hover:w-0 group-hover:h-0 transition-all duration-500 ease-in-out z-10 rounded-xl bg-white"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            />

                            {/* Content stays on top */}
                            <div className="relative z-20">
                                <div
                                    className="mb-4 w-16 h-16 mx-auto rounded-lg shadow-sm flex items-center justify-center"
                                    style={{ backgroundColor: shapeColors[i % shapeColors.length] }}
                                >
                                    {subject.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>
                                <span className="text-muted-foreground font-semibold mb-6 transition-colors duration-300 group-hover:text-[#86198f]">
                                    Browse {subject.title} Lessons
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SubjectsSection
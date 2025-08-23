'use client'

import React from 'react'

const Templates: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-primary mb-6">Extra Resources & Downloadable Templates</h1>
            <p className="text-lg text-muted-foreground mb-6">
                Save time and stay organized with ready to use templates and extra resources for students, tutors, and families.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Popular Downloads</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <a href="/downloads/lesson-plan-template.docx" className="text-primary underline">Lesson Plan Template</a> – plan engaging, effective lessons with this easy to edit document.
                    </li>
                    <li>
                        <a href="/downloads/homework-tracker.pdf" className="text-primary underline">Homework Tracker</a> – track assignments and deadlines.
                    </li>
                    <li>
                        <a href="/downloads/study-checklist.pdf" className="text-primary underline">Study Checklist</a> – organize study sessions and set goals.
                    </li>
                    <li>
                        <a href="/downloads/parent-guide.pdf" className="text-primary underline">Parent Guide</a> – tips for supporting learning at home.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">How to Use These Resources</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Download and print or fill out digitally.</li>
                    <li>Customize templates to fit your needs.</li>
                    <li>Share with students, families, or tutors.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">Suggest a Resource</h2>
                <p>
                    Looking for something specific? <a href="mailto:education@grmruf.org" className="text-primary underline">Email us</a> your idea and we will do our best to add it.
                </p>
            </section>
        </div>
    )
}

export default Templates

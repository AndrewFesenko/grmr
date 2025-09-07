import React from 'react'

export default function TutorsPage() {
    return (
        <main className="flex flex-col items-center gap-8 py-12 px-4">
            {/* Page Header */}
            <div className="text-center max-w-5xl w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Meet Our Mentors!</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Explore our amazing mentors who are here to guide and support your learning journey. <b>Click a profile to see more details.</b>
                </p>
            </div>

            {/* Tutor Profiles Section */}
            <div className="w-full mt-2">
                <div className="w-full flex justify-center">
                    <iframe
                        src="https://airtable.com/embed/app3o2f0OSKx9zDcI/shrOAYeDF0HYNzC01"
                        style={{
                            background: 'transparent',
                            border: '1px solid #ccc',
                            width: '90%',
                            maxWidth: '1400px',
                            height: '1200px',
                        }}
                        title="Tutor Profiles"
                    ></iframe>
                </div>
            </div>
        </main>
    )
}

'use client';

import Link from "next/link";
import Image from "next/image";

export default function LessonsPage() {
    const subjects = [
        {
            name: "Mathematics",
            description:
                "Build strong foundations in numbers, algebra, geometry, and more with our engaging math lessons designed for all skill levels.",
            image: "/images/about1.png",
            href: "/lessons/math",
            color: "bg-blue-100",
        },
        {
            name: "English",
            description:
                "Develop reading comprehension, writing skills, and language mastery through our interactive and personalized English instruction.",
            image: "/images/about1.png",
            href: "/lessons/english",
            color: "bg-green-100",
        },
        {
            name: "Science",
            description:
                "Explore biology, chemistry, physics and more through hands-on experiments and engaging lessons that bring scientific concepts to life.",
            image: "/images/about1.png",
            href: "/lessons/science",
            color: "bg-amber-100",
        },
        {
            name: "Health",
            description:
                "Learn about wellness, nutrition, mental health, and healthy lifestyles through our comprehensive health education program.",
            image: "/images/about1.png",
            href: "/lessons/health",
            color: "bg-red-100",
        },
        {
            name: "Adult Education",
            description:
                "It's never too late to learn. Our adult education programs include literacy, numeracy, professional skills, and personal enrichment.",
            image: "/images/about1.png",
            href: "/lessons/adults",
            color: "bg-purple-100",
        },
    ];

    return (
        <main className="flex flex-col gap-8 py-8 px-4">
            {/* Hero Bubble Section */}
            <div className="text-center">
                <div className="bg-white/70 backdrop-blur-sm px-8 py-10 rounded-2xl shadow-lg max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Learning Programs
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our wide range of personalized lessons designed to support learners of all ages and backgrounds.
                    </p>
                </div>
            </div>

            {/* Intro Section */}
            <section className="max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">How We Help You Succeed</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-[#f3e8ff] rounded-full w-16 h-16 flex items-center justify-center mb-3">
                                <span className="text-2xl font-bold text-[#86198f]">1</span>
                            </div>
                            <h3 className="font-medium mb-2">Assessment</h3>
                            <p className="text-muted-foreground text-sm">Identify strengths, challenges, and personalized goals for each student.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-[#f3e8ff] rounded-full w-16 h-16 flex items-center justify-center mb-3">
                                <span className="text-2xl font-bold text-[#86198f]">2</span>
                            </div>
                            <h3 className="font-medium mb-2">Personalization</h3>
                            <p className="text-muted-foreground text-sm">Tailored lesson plans based on learning style, pace, and goals.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-[#f3e8ff] rounded-full w-16 h-16 flex items-center justify-center mb-3">
                                <span className="text-2xl font-bold text-[#86198f]">3</span>
                            </div>
                            <h3 className="font-medium mb-2">Progress</h3>
                            <p className="text-muted-foreground text-sm">Track improvements and adapt strategies to ensure ongoing growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subjects Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-8 text-center text-primary">Our Subjects</h2>

                <div className="space-y-16">
                    {subjects.map((subject, index) => (
                        <div
                            key={subject.name}
                            className={`flex flex-col md:flex-row gap-6 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className={`relative w-full md:w-1/2 h-64 rounded-xl overflow-hidden ${subject.color}`}>
                                <Image
                                    src={subject.image}
                                    alt={`${subject.name} lesson`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="w-full md:w-1/2 bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border">
                                <h3 className="text-xl font-bold mb-3 text-primary">{subject.name}</h3>
                                <p className="text-muted-foreground mb-6">{subject.description}</p>
                                <Link
                                    href={subject.href}
                                    className="inline-block px-5 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
                                >
                                    Explore {subject.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
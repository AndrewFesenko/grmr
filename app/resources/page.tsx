'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { ClipboardCheck, Accessibility, FileText, Settings } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const resources = [
	{
		title: 'TutorCruncher',
		icon: <Settings className="w-12 h-12 text-primary" />,
		description:
			'TutorCruncher is our scheduling and session management platform. Book sessions, track attendance, and manage your tutoring experience all in one place.',
		href: '/resources/tutorcruncher',
	},
	{
		title: 'Diagnostic Tests',
		icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
		description:
			'Access our collection of diagnostic assessments to identify strengths and areas for improvement across various subjects and grade levels.',
		href: '/resources/diagnostic-tests',
	},
	{
		title: 'Accessibility Tools',
		icon: <Accessibility className="w-12 h-12 text-primary" />,
		description:
			'Discover tools and resources designed to support learners with different needs, including screen readers, text-to-speech tools, and visual aids.',
		href: '/resources/accessibility',
	},
	{
		title: 'Learning Templates',
		icon: <FileText className="w-12 h-12 text-primary" />,
		description:
			'Download our standardized templates for note-taking, essay planning, math problem-solving, and other academic activities.',
		href: '/resources/templates',
	},
]

const ResourcesPage = () => {
	const heroRef = useRef(null)
	const introRef = useRef(null)
	const cardsRef = useRef(null)

	useGSAP(() => {
		gsap.fromTo(
			heroRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1.5,
				scrollTrigger: {
					trigger: heroRef.current,
					start: 'top 80%',
					toggleActions: 'play none none none',
				},
			}
		)

		gsap.fromTo(
			introRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1.5,
				scrollTrigger: {
					trigger: introRef.current,
					start: 'top 80%',
					toggleActions: 'play none none none',
				},
			}
		)

		gsap.fromTo(
			cardsRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1.5,
				scrollTrigger: {
					trigger: cardsRef.current,
					start: 'top 80%',
					toggleActions: 'play none none none',
				},
			}
		)
	}, [])

	return (
		<div className="w-full py-20 px-4">
			{/* Hero Section */}
			<div
				ref={heroRef}
				className="max-w-6xl mx-auto mb-16 bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl text-center"
			>
				<h1 className="text-4xl font-bold text-primary mb-4">Educational Resources</h1>
				<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
					Explore our collection of tools and materials designed to enhance your learning experience.
				</p>
			</div>

			{/* Intro Section */}
			<section
				ref={introRef}
				className="max-w-6xl mx-auto mb-16 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
			>
				<h2 className="text-2xl font-semibold text-primary mb-4">Getting Started with GRMR Resources</h2>
				<p className="text-muted-foreground">
					At GRMR, we believe in providing comprehensive support for both students and tutors. Our carefully selected
					resources are designed to facilitate personalized learning experiences and help track educational progress.
					Explore the options below to find tools that will enhance your journey.
				</p>
			</section>

			{/* Resource Cards */}
			<section
				ref={cardsRef}
				className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
			>
				<h2 className="text-2xl font-semibold text-primary mb-6">Core Resources</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{resources.map((resource) => (
						<div
							key={resource.title}
							className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 flex flex-col h-full"
						>
							<div className="flex items-center mb-6">
								<div className="bg-[#f3e8ff] rounded-xl p-4 mr-4">{resource.icon}</div>
								<h3 className="text-2xl font-semibold text-primary">{resource.title}</h3>
							</div>

							<p className="text-muted-foreground mb-6 flex-grow">{resource.description}</p>

							<div className="mt-auto">
								<Link
									href={resource.href}
									className="inline-block px-6 py-2 bg-[#f3e8ff] text-[#86198f] rounded-full font-semibold hover:shadow-md hover:bg-[#e9d5ff] transition-all duration-300"
								>
									Learn More →
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default ResourcesPage

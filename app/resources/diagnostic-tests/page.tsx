'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const DiagnosticTestsPage = () => {
	const heroRef = useRef(null)
	const testsRef = useRef(null)
	const howItWorksRef = useRef(null)
	const questionsRef = useRef(null)

	useGSAP(() => {
		const sections = [heroRef, testsRef, howItWorksRef, questionsRef]
		sections.forEach((ref) => {
			gsap.fromTo(
				ref.current,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1.2,
					scrollTrigger: {
						trigger: ref.current,
						start: 'top 95%',
						toggleActions: 'play none none none',
					},
				}
			)
		})
	}, [])

	return (
		<div className="w-full py-20 px-4">
			<section
				ref={heroRef}
				className="max-w-6xl mx-auto mb-16 bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl text-center"
			>
				<h1 className="text-4xl font-bold text-primary mb-4">Diagnostic Tests & Skill Assessments</h1>
				<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
					Not sure where to start? Our diagnostic tests help identify strengths and areas for growth so you can get the most out of tutoring.
				</p>
			</section>

			<section
				ref={testsRef}
				className="max-w-6xl mx-auto mb-12 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
			>
				<h2 className="text-2xl font-semibold text-primary mb-4">Available Assessments</h2>
				<ul className="list-disc pl-6 space-y-3 text-muted-foreground">
					<li>
						<strong>Math Skills Check:</strong>{' '}
						<Link href="/downloads/math-diagnostic.pdf" className="text-primary underline">
							Download PDF
						</Link>
					</li>
					<li>
						<strong>Reading Comprehension:</strong>{' '}
						<Link href="/downloads/reading-diagnostic.pdf" className="text-primary underline">
							Download PDF
						</Link>
					</li>
					<li>
						<strong>Writing Sample:</strong>{' '}
						<Link href="/downloads/writing-diagnostic.pdf" className="text-primary underline">
							Download PDF
						</Link>
					</li>
					<li>
						<strong>ESL/Language Skills:</strong>{' '}
						<Link href="/downloads/esl-diagnostic.pdf" className="text-primary underline">
							Download PDF
						</Link>
					</li>
				</ul>
			</section>

			<section
				ref={howItWorksRef}
				className="max-w-6xl mx-auto mb-12 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
			>
				<h2 className="text-2xl font-semibold text-primary mb-4">How It Works</h2>
				<ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
					<li>Download and complete the relevant assessment(s).</li>
					<li>Share your results with your tutor or coordinator.</li>
					<li>We’ll use your results to create a personalized learning plan.</li>
				</ol>
			</section>

			<section
				ref={questionsRef}
				className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
			>
				<h2 className="text-2xl font-semibold text-primary mb-4">Questions?</h2>
				<p className="text-muted-foreground">
					Unsure which test to take?{' '}
					<a href="mailto:education@grmruf.org" className="text-primary underline">
						Contact us
					</a>{' '}
					for guidance.
				</p>
			</section>
		</div>
	)
}

export default DiagnosticTestsPage

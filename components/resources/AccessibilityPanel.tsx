'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Accessibility: React.FC = () => {
	const heroRef = useRef<HTMLDivElement | null>(null)
	const toolsRef = useRef<HTMLDivElement | null>(null)
	const tipsRef = useRef<HTMLDivElement | null>(null)
	const helpRef = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		;[heroRef, toolsRef, tipsRef, helpRef].forEach((ref) => {
			if (!ref.current) return
			gsap.fromTo(
				ref.current,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1.3,
					scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
				}
			)
		})
	}, [])

	return (
		<div className="w-full">
			{/* Hero */}
			<section
				ref={heroRef}
				className="max-w-6xl mx-auto mb-16 bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl text-center"
			>
				<h1 className="text-4xl font-bold text-primary mb-4">Accessibility Tools & Support</h1>
				<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
					We believe every learner deserves access to education. Explore tools and strategies that help all students thrive, regardless of ability or background.
				</p>
			</section>

			{/* Recommended Tools */}
			<section
				ref={toolsRef}
				className="max-w-6xl mx-auto mb-12 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
			>
				<h2 className="text-2xl font-semibold text-primary mb-4">Recommended Tools</h2>
				<ul className="list-disc pl-6 space-y-4 text-muted-foreground">
					<li>
						<strong>Screen Readers:</strong>{' '}
						<a href="https://www.nvaccess.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition">
							NVDA
						</a>{' '}
						(Windows),{' '}
						<a href="https://www.apple.com/voiceover/info/guide/_1121.html" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition">
							VoiceOver
						</a>{' '}
						(Mac/iOS)
					</li>
					<li>
						<strong>Text to Speech:</strong>{' '}
						<a href="https://www.naturalreaders.com/online/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition">
							NaturalReader
						</a>,{' '}
						<a href="https://chrome.google.com/webstore/detail/read-aloud-a-text-to-speec/hdhinadidafjejdhmfkjgnolgimiaplp" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition">
							Read Aloud (Chrome)
						</a>
					</li>
					<li>
						<strong>Contrast and Fonts:</strong>{' '}
						<a href="https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition">
							Color Contrast Analyzer
						</a>,{' '}
						<a href="https://chrome.google.com/webstore/detail/open-dyslexic-font/oonbghbmdpmhbhkhacgchhfnnnmloblo" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition">
							OpenDyslexic Font
						</a>
					</li>
					<li>
						<strong>Accessible Worksheets:</strong>{' '}
						<a href="/downloads/accessible-worksheet.docx" className="text-primary underline hover:text-primary/80 transition">
							Download Word Templates
						</a>
					</li>
				</ul>
			</section>

			{/* Tips */}
			<section
				ref={tipsRef}
				className="max-w-6xl mx-auto mb-12 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
			>
				<h2 className="text-2xl font-semibold text-primary mb-4">Inclusive Teaching Tips</h2>
				<ul className="list-disc pl-6 space-y-3 text-muted-foreground">
					<li>Use clear language and break instructions into steps.</li>
					<li>Offer materials in audio, visual, and written formats.</li>
					<li>Ensure strong color contrast. Do not rely only on color for meaning.</li>
					<li>Allow extra time and invite questions and feedback.</li>
					<li>Add captions for videos and alt text for images.</li>
				</ul>
			</section>

			{/* Help */}
			<section
				ref={helpRef}
				className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg text-center"
			>
				<h2 className="text-2xl font-semibold text-primary mb-4">Need Help?</h2>
				<p className="text-muted-foreground mb-4">
					If you or your student needs accommodations, we can help.
				</p>
				<a
					href="mailto:education@grmruf.org"
					className="inline-block px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
				>
					Contact Us
				</a>
			</section>
		</div>
	)
}

export default Accessibility

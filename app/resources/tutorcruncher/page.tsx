'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const TutorCruncherPage = () => {
	const heroRef = useRef(null)
	const aboutRef = useRef(null)
	const widgetRef = useRef(null)
	const carouselRef = useRef(null)

	const [currentSlide, setCurrentSlide] = useState(0)

	const slides = [
		{
			title: 'Step 1: Browse Tutors',
			description: 'Explore available tutors based on your subject and needs.',
			image: '/images/gif1.gif',
		},
		{
			title: 'Step 2: Schedule Sessions',
			description: 'Select times that work for you and book lessons easily.',
			image: '/images/gif1.gif',
		},
		{
			title: 'Step 3: Track Progress',
			description: 'View session history and tutor feedback in one dashboard.',
			image: '/images/gif1.gif',
		},
	]

	const handlePrev = () => {
		setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
	}

	useEffect(() => {
		const scriptId = 'tutorcruncher-socket-script'

		const initSocket = () => {
			if (typeof window !== 'undefined' && (window as any).socket) {
				const socket = (window as any).socket
				socket('f329e2bb144b832cfbfd', {
					router_mode: 'history',
					element: '#subject-filter',
					mode: 'grid',
				})
			} else {
				setTimeout(initSocket, 300)
			}
		}

		if (!document.getElementById(scriptId)) {
			const script = document.createElement('script')
			script.id = scriptId
			script.src = 'https://cdn.tutorcruncher.com/socket/latest/socket.js'
			script.async = true
			script.onload = initSocket
			document.body.appendChild(script)
		} else {
			initSocket()
		}

		const style = document.createElement('style')
		style.innerHTML = `
      #subject-filter select {
        width: 100% !important;
        max-width: 100% !important;
      }
      #subject-filter .tc-widget-search {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    `
		document.head.appendChild(style)

		return () => {
			document.getElementById(scriptId)?.remove()
			document.head.removeChild(style)
		}
	}, [])

	useGSAP(() => {
		[heroRef, aboutRef, widgetRef, carouselRef].forEach((ref) => {
			gsap.fromTo(
				ref.current,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1.3,
					scrollTrigger: {
						trigger: ref.current,
						start: 'top 80%',
						toggleActions: 'play none none none',
					},
				}
			)
		})
	}, [])

	return (
		<div className="w-full py-20 px-4">
			{/* Hero Section */}
			<section
				ref={heroRef}
				className="max-w-6xl mx-auto mb-16 bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl text-center"
			>
				<h1 className="text-4xl font-bold text-primary mb-4">TutorCruncher</h1>
				<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
					An All-in-One Platform for Tutoring Management
				</p>
			</section>

			{/* About TutorCruncher */}
			<section
				ref={aboutRef}
				className="max-w-6xl mx-auto mb-16 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg text-center"
			>
				<h2 className="text-2xl font-semibold text-primary mb-4">What is TutorCruncher?</h2>
				<p className="text-muted-foreground mb-10 max-w-4xl mx-auto">
					TutorCruncher helps us match students with qualified tutors, manage schedules, track progress, and
					keep communication simple—all in one place. It's the tool we use to make your tutoring experience smooth and personalized.
				</p>

				{/* Feature Bubbles */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
					{[
						{
							title: 'Efficient Matching',
							description: 'Connect with tutors based on subject, grade level, and availability.',
						},
						{
							title: 'Flexible Scheduling',
							description: 'View real-time availability and request recurring weekly sessions.',
						},
						{
							title: 'Progress Tracking',
							description: 'Stay updated with reports, messages, and session history in one dashboard.',
						},
						{
							title: 'Personalized Learning',
							description: "Customize your sessions around your student's schedule and needs.",
						},
					].map((item, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:border-primary/30 border border-border transition-all duration-300 flex flex-col justify-center text-center min-h-[170px]"
						>
							<p className="text-[#86198f] font-semibold mb-2">{item.title}</p>
							<p className="text-muted-foreground">{item.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* Workflow Carousel */}
			<section
				ref={carouselRef}
				className="max-w-6xl mx-auto mb-16 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg text-center"
			>
				<h2 className="text-2xl font-semibold text-primary mb-6">How to Get Started</h2>

				<div className="relative flex flex-col items-center">
					<img
						src={slides[currentSlide].image}
						alt={slides[currentSlide].title}
						className="rounded-xl mb-6 w-full max-w-xl border border-border"
					/>
					<p className="text-xl text-[#86198f] font-semibold mb-2">{slides[currentSlide].title}</p>
					<p className="text-muted-foreground max-w-2xl">{slides[currentSlide].description}</p>

					{/* Arrows */}
					<div className="flex gap-4 mt-6">
						<button
							onClick={handlePrev}
							className="px-4 py-2 bg-[#f3e8ff] text-[#86198f] rounded-full font-semibold hover:bg-[#e9d5ff] transition"
						>
							← Prev
						</button>
						<button
							onClick={handleNext}
							className="px-4 py-2 bg-[#f3e8ff] text-[#86198f] rounded-full font-semibold hover:bg-[#e9d5ff] transition"
						>
							Next →
						</button>
					</div>
				</div>
			</section>

			{/* TutorCruncher Widget */}
			<section
				ref={widgetRef}
				className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
			>
				<h2 className="text-2xl font-semibold mb-4 text-center text-primary">Find the Perfect Tutor for You</h2>
				<p className="text-muted-foreground text-center mb-8">
					Browse by subject to connect with a dedicated tutor who fits your academic needs.
				</p>
				<div id="subject-filter" className="min-h-[600px] rounded-lg border border-border" />
			</section>
		</div>
	)
}

export default TutorCruncherPage

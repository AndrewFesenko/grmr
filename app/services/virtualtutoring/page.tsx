import Image from 'next/image';
import Link from 'next/link';

export default function VirtualTutoringPage() {
	return (
		<main className="flex flex-col gap-8 py-8 px-4">
			{/* Header Section */}
			<div className="text-center">
				<div className="bg-white/70 backdrop-blur-sm px-8 py-10 rounded-2xl shadow-lg max-w-5xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Virtual Tutoring</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Experience the flexibility of personalized instruction from the comfort of your home.
						Engaging lessons, expert tutors, and interactive tools — all online.
					</p>
				</div>
			</div>

			{/* Content Section */}
			<div className="max-w-4xl mx-auto">
				<div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden">
					<Image
						src="/gallery/virtual/online05.png"
						alt="Student learning through virtual tutoring"
						fill
						style={{ objectFit: 'cover' }}
					/>
				</div>

				<section className="mb-10">
					<h2 className="text-2xl font-bold mb-4 text-primary">Learning Without Limits</h2>
					<p className="text-lg text-muted-foreground mb-6">
						Our virtual tutoring program connects students with expert tutors through secure,
						user-friendly video platforms. Students receive the same high-quality instruction as
						our in-person sessions, with the added convenience of learning from anywhere.
					</p>
					<p className="text-lg text-muted-foreground mb-6">
						All you need is a computer or tablet with internet access. Our tutors use interactive
						whiteboards, screen sharing, and collaborative documents to create an engaging learning experience.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-bold mb-4 text-primary">How It Works</h2>
					<div className="grid md:grid-cols-3 gap-6 text-center">
						{[
							{ step: '1', title: 'Schedule', text: 'Book sessions at times that work for you through our online portal' },
							{ step: '2', title: 'Connect', text: 'Join your session via the link sent to your email' },
							{ step: '3', title: 'Learn', text: 'Engage with your tutor through our interactive platform' }
						].map(({ step, title, text }) => (
							<div key={step} className="p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
								<div className="bg-[#f3e8ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl font-bold text-[#86198f]">{step}</span>
								</div>
								<h3 className="font-semibold mb-2">{title}</h3>
								<p className="text-muted-foreground">{text}</p>
							</div>
						))}
					</div>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-bold mb-4 text-primary">Available Subjects</h2>
					<div className="flex flex-wrap justify-center gap-4">
						{['Math', 'English', 'Science', 'Health', 'Adult Education'].map((subject) => (
							<div
								key={subject}
								className="bg-[#f3e8ff] p-4 rounded-lg text-center min-w-[140px] max-w-[200px] flex-1 sm:flex-none"
							>
								{subject}
							</div>
						))}
					</div>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-bold mb-4 text-primary">Tech Requirements</h2>
					<div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm">
						<ul className="list-disc pl-6 space-y-2">
							<li>Computer, tablet, or smartphone with camera and microphone</li>
							<li>Stable internet connection</li>
							<li>Zoom or Google Meet (we'll provide the link)</li>
							<li>Optional: headphones for better audio</li>
						</ul>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-bold mb-4 text-primary">Ready to Get Started?</h2>
					<p className="text-lg text-muted-foreground mb-6">
						Book your first virtual tutoring session today and experience the convenience and
						effectiveness of our online learning platform.
					</p>
					<Link
						href="/resources/tutorcruncher"
						className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
					>
						Schedule a Session
					</Link>
				</section>
			</div>
		</main>
	);
}
import Image from 'next/image';
import Link from 'next/link';

export default function VirtualTutoringPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-primary mb-8">Virtual Tutoring</h1>

            <div className="max-w-4xl mx-auto">
                <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden">
                    <Image
                        src="/gallery/virtual/online05.png"
                        alt="Student learning through virtual tutoring"
                        fill
                        style={{ objectFit: "cover" }}
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
                        <div className="p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
                            <div className="bg-[#f3e8ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-[#86198f]">1</span>
                            </div>
                            <h3 className="font-semibold mb-2">Schedule</h3>
                            <p className="text-muted-foreground">Book sessions at times that work for you through our online portal</p>
                        </div>
                        <div className="p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
                            <div className="bg-[#f3e8ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-[#86198f]">2</span>
                            </div>
                            <h3 className="font-semibold mb-2">Connect</h3>
                            <p className="text-muted-foreground">Join your session via the link sent to your email</p>
                        </div>
                        <div className="p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
                            <div className="bg-[#f3e8ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-[#86198f]">3</span>
                            </div>
                            <h3 className="font-semibold mb-2">Learn</h3>
                            <p className="text-muted-foreground">Engage with your tutor through our interactive platform</p>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 text-primary">Available Subjects</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-[#f3e8ff] p-4 rounded-lg text-center">Math</div>
                        <div className="bg-[#f3e8ff] p-4 rounded-lg text-center">Science</div>
                        <div className="bg-[#f3e8ff] p-4 rounded-lg text-center">English</div>
                        <div className="bg-[#f3e8ff] p-4 rounded-lg text-center">Social Studies</div>
                        <div className="bg-[#f3e8ff] p-4 rounded-lg text-center">Foreign Languages</div>
                        <div className="bg-[#f3e8ff] p-4 rounded-lg text-center">Test Prep</div>
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
                        href="/contact"
                        className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
                    >
                        Schedule a Session
                    </Link>
                </section>
            </div>
        </main>
    );
}
'use client';

import { useEffect } from 'react';

const TutorCruncherPage = () => {
    useEffect(() => {
        const scriptId = 'tutorcruncher-socket-script';

        const initSocket = () => {
            if (typeof window !== 'undefined' && (window as any).socket) {
                const socket = (window as any).socket;

                socket('9c79f14df986a1ec693c', {
                    router_mode: 'history',
                    element: '#appointments',
                    mode: 'appointments',
                });

                socket('9c79f14df986a1ec693c', {
                    router_mode: 'history',
                    element: '#tutors-grid',
                    mode: 'grid',
                });

                socket('9c79f14df986a1ec693c', {
                    router_mode: 'history',
                    element: '#subject-filter',
                    mode: 'grid',
                });
            } else {
                setTimeout(initSocket, 300);
            }
        };

        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://cdn.tutorcruncher.com/socket/latest/socket.js';
            script.async = true;
            script.onload = () => {
                initSocket();
            };
            document.body.appendChild(script);
        } else {
            initSocket();
        }

        return () => {
            document.getElementById(scriptId)?.remove();
        };
    }, []);

    return (
        <main className="max-w-5xl mx-auto py-12 px-4 space-y-16">
            {/* Enquiry Form */}
            <section>
                <h1 className="text-3xl font-bold mb-4 text-center">Request a Tutor</h1>
                <div className="bg-white rounded-lg shadow-md p-6 space-y-4" id="custom-enquiry-form">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                            const data = {
                                client_name: (document.getElementById('client_name') as HTMLInputElement).value,
                                client_email: (document.getElementById('client_email') as HTMLInputElement).value || null,
                                client_phone: (document.getElementById('client_phone') as HTMLInputElement).value || null,
                                service_recipient_name: (document.getElementById('service_recipient_name') as HTMLInputElement).value || null,
                                attributes: {
                                    tell_us_about_yourself: (document.getElementById('tell-us-about-yourself') as HTMLTextAreaElement).value || null,
                                },
                            };

                            fetch('https://socket.tutorcruncher.com/9c79f14df986a1ec693c/enquiry', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(data),
                            })
                                .then(() => {
                                    const form = document.getElementById('custom-enquiry-form');
                                    if (form) form.innerHTML = '<p class="text-green-600 text-center">Form successfully submitted!</p>';
                                })
                                .catch(() => alert('Something went wrong. Please try again.'));
                        }}
                        className="space-y-4"
                    >
                        <input
                            id="client_name"
                            type="text"
                            required
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                            id="service_recipient_name"
                            type="text"
                            required
                            placeholder="Student Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                            id="client_email"
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                            id="client_phone"
                            type="text"
                            placeholder="Phone Number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <textarea
                            id="tell-us-about-yourself"
                            rows={4}
                            placeholder="Tell us about your needs"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-purple-800 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>

            {/* Book Appointments */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-center">Book a Session</h2>
                <div id="appointments" className="min-h-[600px] rounded-lg border" />
            </section>

            {/* Subject Filter */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-center">Find a Tutor by Subject</h2>
                <div id="subject-filter" className="min-h-[600px] rounded-lg border" />
            </section>

            {/* Tutor Grid */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-center">Meet Our Tutors</h2>
                <div id="tutors-grid" className="min-h-[600px] rounded-lg border" />
            </section>
        </main>
    );
};

export default TutorCruncherPage;

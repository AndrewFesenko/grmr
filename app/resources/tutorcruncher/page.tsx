'use client';

import { useEffect } from 'react';

const TutorCruncherPage = () => {
    useEffect(() => {
        const scriptId = 'tutorcruncher-socket-script';

        const initSocket = () => {
            if (typeof window !== 'undefined' && (window as any).socket) {
                const socket = (window as any).socket;

                // Load the official enquiry form widget
                socket('f329e2bb144b832cfbfd', {
                    router_mode: 'history',
                    element: '#basic-enquiry',
                    mode: 'enquiry',
                });

                // Book appointments
                socket('f329e2bb144b832cfbfd', {
                    router_mode: 'history',
                    element: '#appointments',
                    mode: 'appointments',
                });

                // Subject-based tutor filter
                socket('f329e2bb144b832cfbfd', {
                    router_mode: 'history',
                    element: '#subject-filter',
                    mode: 'grid',
                });

                // Tutor grid (currently optional, just uncomment to use)
                // socket('f329e2bb144b832cfbfd', {
                //   router_mode: 'history',
                //   element: '#tutors-grid',
                //   mode: 'grid',
                // });
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
            {/* Enquiry Form Widget */}
            <section>
                <h1 className="text-3xl font-bold mb-4 text-center">Request a Tutor</h1>
                <div id="basic-enquiry" className="min-h-[600px] rounded-lg border" />
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

            {/* Optional Tutor Grid */}
            {/*
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Meet Our Tutors</h2>
        <div id="tutors-grid" className="min-h-[600px] rounded-lg border" />
      </section>
      */}
        </main>
    );
};

export default TutorCruncherPage;
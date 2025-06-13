'use client';

import { useEffect } from 'react';

const TutorCruncherPage = () => {
    useEffect(() => {
        const scriptId = 'tutorcruncher-socket-script';

        const initSocket = () => {
            if (typeof window !== 'undefined' && (window as any).socket) {
                console.log('[TutorCruncher] Initializing socket...');
                (window as any).socket('f329e2bb144b832cfbfd', {
                    router_mode: 'history',
                    element: '#book-apts',
                    mode: 'enquiry'
                });
            } else {
                console.warn('[TutorCruncher] Socket not available yet, retrying...');
                setTimeout(initSocket, 300);
            }
        };

        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://cdn.tutorcruncher.com/socket/latest/socket.js';
            script.async = true;
            script.onload = () => {
                console.log('[TutorCruncher] Socket script loaded');
                initSocket();
            };
            document.body.appendChild(script);
        } else {
            initSocket();
        }
    }, []);

    return (
        <main className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-primary mb-6 text-center">
                Book a Tutoring Session
            </h1>
            <div id="book-apts" className="min-h-[600px] rounded-xl border" />
        </main>
    );
};

export default TutorCruncherPage;

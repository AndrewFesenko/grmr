'use client';

import { useEffect } from 'react';

const TutorCruncherPage = () => {
    useEffect(() => {
        const scriptId = 'tutorcruncher-socket-script';

        const initSocket = () => {
            if (typeof window !== 'undefined' && (window as any).socket) {
                const socket = (window as any).socket;
                // Subject grid widget
                socket('f329e2bb144b832cfbfd', {
                    router_mode: 'history',
                    element: '#subject-filter',
                    mode: 'grid',
                });
            } else {
                setTimeout(initSocket, 300);
            }
        };

        // Load socket script if not already loaded
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://cdn.tutorcruncher.com/socket/latest/socket.js';
            script.async = true;
            script.onload = initSocket;
            document.body.appendChild(script);
        } else {
            initSocket();
        }

        // Inject custom style safely without breaking your app
        const style = document.createElement('style');
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
    `;
        document.head.appendChild(style);

        return () => {
            document.getElementById(scriptId)?.remove();
            document.head.removeChild(style);
        };
    }, []);

    return (
        <main className="max-w-5xl mx-auto py-12 px-4 space-y-16">
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-center">Find the Perfect Tutor for You</h2>
                <p className="text-muted-foreground text-base mt-2">Browse by subject to connect with a dedicated tutor who fits your academic needs</p>
                <div id="subject-filter" className="min-h-[600px] rounded-lg border" />
            </section>
        </main>
    );
};

export default TutorCruncherPage;
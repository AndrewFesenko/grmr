'use client';

import React from 'react';

const TutorCruncherPage = () => {
    return (
        <main className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-primary mb-6 text-center">
                Sign Up for Tutoring
            </h1>

            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create a student account to get started with GRMR Education. Once registered, you will be able
                to request sessions, message your tutor, and access your learning dashboard.
            </p>

            <div className="w-full rounded-xl overflow-hidden border shadow-md">
                <iframe
                    src="https://secure.tutorcruncher.com/grmr/signup/client/"
                    width="100%"
                    height="1000"
                    style={{
                        border: 'none',
                        borderRadius: '0px',
                        width: '100%',
                    }}
                    title="GRMR Student Signup"
                />
            </div>
        </main>
    );
};

export default TutorCruncherPage;
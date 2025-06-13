const DiagnosticTestsPage = () => (
    <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Diagnostic Tests & Skill Assessments</h1>
        <p className="text-lg text-muted-foreground mb-6">
            Not sure where to start? Our diagnostic tests help identify strengths and areas for growth, so you can get the most out of tutoring.
        </p>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Available Assessments</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong>Math Skills Check:</strong> <a href="/downloads/math-diagnostic.pdf" className="text-primary underline">Download PDF</a>
                </li>
                <li>
                    <strong>Reading Comprehension:</strong> <a href="/downloads/reading-diagnostic.pdf" className="text-primary underline">Download PDF</a>
                </li>
                <li>
                    <strong>Writing Sample:</strong> <a href="/downloads/writing-diagnostic.pdf" className="text-primary underline">Download PDF</a>
                </li>
                <li>
                    <strong>ESL/Language Skills:</strong> <a href="/downloads/esl-diagnostic.pdf" className="text-primary underline">Download PDF</a>
                </li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
            <ol className="list-decimal pl-6 space-y-2">
                <li>Download and complete the relevant assessment(s).</li>
                <li>Share your result`s with your tutor or coordinator.</li>
                <li>We’ll use your results to create a personalized learning plan.</li>
            </ol>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-3">Questions?</h2>
            <p>
                Unsure which test to take? <a href="mailto:education@grmruf.org" className="text-primary underline">Contact us</a> for guidance.
            </p>
        </section>
    </main>
);

export default DiagnosticTestsPage;
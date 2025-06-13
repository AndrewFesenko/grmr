const AccessibilityPage = () => (
    <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Accessibility Tools & Support</h1>
        <p className="text-lg text-muted-foreground mb-6">
            We believe every learner deserves access to education. Explore our curated accessibility tools and strategies to help all students thrive, regardless of ability or background.
        </p>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Recommended Tools</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong>Screen Readers:</strong> <a href="https://www.nvaccess.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">NVDA</a> (Windows), <a href="https://www.apple.com/voiceover/info/guide/_1121.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">VoiceOver</a> (Mac/iOS)
                </li>
                <li>
                    <strong>Text-to-Speech:</strong> <a href="https://www.naturalreaders.com/online/" target="_blank" rel="noopener noreferrer" className="text-primary underline">NaturalReader</a>, <a href="https://chrome.google.com/webstore/detail/read-aloud-a-text-to-speec/hdhinadidafjejdhmfkjgnolgimiaplp" target="_blank" rel="noopener noreferrer" className="text-primary underline">Read Aloud (Chrome Extension)</a>
                </li>
                <li>
                    <strong>Color Contrast & Font Adjusters:</strong> <a href="https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll" target="_blank" rel="noopener noreferrer" className="text-primary underline">Color Contrast Analyzer</a>, <a href="https://chrome.google.com/webstore/detail/open-dyslexic-font/oonbghbmdpmhbhkhacgchhfnnnmloblo" target="_blank" rel="noopener noreferrer" className="text-primary underline">OpenDyslexic Font</a>
                </li>
                <li>
                    <strong>Accessible Worksheets:</strong> Download <a href="/downloads/accessible-worksheet.docx" className="text-primary underline">Word templates</a> with large fonts and clear layouts.
                </li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Inclusive Teaching Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Use simple, clear language and break instructions into steps.</li>
                <li>Offer materials in multiple formats (audio, visual, written).</li>
                <li>Check color contrast and avoid relying on color alone for meaning.</li>
                <li>Allow extra time for tasks and encourage questions.</li>
                <li>Use captions for videos and alt text for images.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-3">Need Help?</h2>
            <p>
                If you or your student needs specific accommodations, contact us at <a href="mailto:education@grmruf.org" className="text-primary underline">education@grmruf.org</a>. We’re here to support every learner!
            </p>
        </section>
    </main>
);

export default AccessibilityPage;
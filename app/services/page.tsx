import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Tutoring Services</h1>

      <section className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-muted-foreground mb-6">
          GRMR offers comprehensive tutoring services to support students of all ages and backgrounds.
          Our dedicated tutors provide personalized learning experiences through both virtual and in-person options.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Virtual Tutoring Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
          <div className="relative h-60 w-full">
            <Image
              src="/gallery/virtual/online05.png"
              alt="Virtual tutoring session"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3 text-primary">Virtual Tutoring</h2>
            <p className="text-muted-foreground mb-6">
              Connect with experienced tutors from anywhere. Our virtual sessions use interactive technology
              to create an engaging learning environment that fits your schedule.
            </p>
            <Link
              href="/services/virtualtutoring"
              className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* In-Person Tutoring Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
          <div className="relative h-60 w-full">
            <Image
              src="/gallery/inperson/event05.jpeg"
              alt="In-person tutoring session"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3 text-primary">In-Person Tutoring</h2>
            <p className="text-muted-foreground mb-6">
              Face-to-face learning with our qualified tutors. Meet at our dedicated centers
              for hands-on support and a collaborative learning environment.
            </p>
            <Link
              href="/services/inpersontutoring"
              className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-4 text-primary">Why Choose GRMR Tutoring?</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Personalized learning plans tailored to each student's needs</li>
          <li>Qualified tutors with extensive experience in their subject areas</li>
          <li>Flexible scheduling for busy families</li>
          <li>Regular progress reports and feedback</li>
          <li>Support for students of all ages and abilities</li>
        </ul>
      </section>
    </main>
  );
}
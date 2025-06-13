import Image from 'next/image';
import Link from 'next/link';

export default function InPersonTutoringPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">In-Person Tutoring</h1>

      <div className="max-w-4xl mx-auto">
        <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden">
          <Image
            src="/gallery/inperson/event18.jpeg"
            alt="In-person tutoring session"
            fill
            style={{objectFit: "cover"}}
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Face-to-Face Learning</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our in-person tutoring offers hands-on learning experiences with dedicated tutors in a
            supportive environment. Students benefit from personalized attention and immediate feedback
            that helps build confidence and knowledge.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Sessions take place at our learning centers, equipped with all the resources needed for
            effective learning. Our tutors use proven teaching methods tailored to each student's
            learning style.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-semibold mb-2">Main Learning Center</h3>
              <p className="text-muted-foreground mb-2">123 Education Ave, City Name</p>
              <p className="text-muted-foreground">Mon-Fri: 3pm-8pm, Sat: 9am-2pm</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-semibold mb-2">Community Center Location</h3>
              <p className="text-muted-foreground mb-2">456 Learning Blvd, City Name</p>
              <p className="text-muted-foreground">Tue-Thu: 4pm-7pm, Sat: 10am-3pm</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Carpooling Program</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We understand that transportation can be a challenge for busy families. Our carpooling
            program helps connect families who live near each other to share rides to and from tutoring sessions.
          </p>

          <div className="bg-[#f3e8ff] p-6 rounded-xl mb-6">
            <h3 className="font-semibold mb-3">How the Carpool Program Works:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Fill out the carpool interest form below</li>
              <li>Our coordinator will match you with nearby families with similar schedules</li>
              <li>Connect with your carpool group and arrange pickup/dropoff details</li>
              <li>Share the driving responsibilities on a rotating schedule</li>
            </ol>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border">
            <h3 className="font-semibold mb-4">Carpool Interest Form</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">General Location/Neighborhood</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="e.g., North Side, Downtown"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-1">Preferred Tutoring Days</label>
                <select
                  id="days"
                  name="days"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select days</option>
                  <option value="mon-wed">Monday & Wednesday</option>
                  <option value="tue-thu">Tuesday & Thursday</option>
                  <option value="wed-fri">Wednesday & Friday</option>
                  <option value="saturday">Saturday only</option>
                </select>
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Special requirements, preferences, etc."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Submit Interest
              </button>
            </form>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image 
                src="/gallery/inperson/event02.jpeg" 
                alt="Students learning together" 
                fill 
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image 
                src="/gallery/inperson/event05.jpeg" 
                alt="Tutor helping student" 
                fill 
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image 
                src="/gallery/inperson/event18.jpeg" 
                alt="Group tutoring session" 
                fill 
                style={{objectFit: "cover"}}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary">Ready to Join Us?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Book your in-person tutoring session today and give your child the advantage of
            personalized, face-to-face instruction.
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
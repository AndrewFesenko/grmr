import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const CTASection = () => {
  return (
      <section className="w-full py-12">
        <div className="rounded-4xl bg-primary text-white p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started? Join GRMR Tutoring today!</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Take the next step in your educational journey with personalized support from our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary"
                asChild
            >
              <Link href="/sign-in">Sign Up as a Tutor</Link>
            </Button>
            <Button
                size="lg"
                className="bg-white/20 text-white border border-white/40 hover:bg-white/30"
                asChild
            >
              <Link href="/my-journey">Find a Lesson</Link>
            </Button>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a
                href="https://www.facebook.com/UFGRMR/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white rounded-full p-3 border border-white hover:bg-white hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
                href="https://www.instagram.com/grmruf/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white rounded-full p-3 border border-white hover:bg-white hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
                href="mailto:education@grmruf.org"
                className="bg-primary text-white rounded-full p-3 border border-white hover:bg-white hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <MdEmail size={22} />
            </a>
          </div>
        </div>
      </section>
  );
};

export default CTASection;

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Book, UserPlus } from "lucide-react"
import FinisherHeader from "@/components/FinisherHeader"

const HeroSection = () => {
    return (
        <section className="w-full min-h-[400px] py-20 relative overflow-hidden">

            <div className="relative z-10 max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl px-8 py-16 text-center border border-primary/10">
                <Image
                    src="/images/GRMR.png"
                    alt="GRMR Logo"
                    width={200}
                    height={200}
                    className="mx-auto mb-6"
                />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Empowering Learning Through Personalized Mentorship
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                    Free academic support tailored to K–12 and adult learners.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button
                        size="lg"
                        className="bg-[#86198f] text-white hover:bg-[#a21caf] hover:shadow-md hover:shadow-[#86198f]/30 border-2 border-[#86198f] rounded-full px-6 py-2 font-semibold transition-all duration-300"
                        asChild
                    >
                        <Link
                            href="/my-journey"
                            className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#86198f] text-white font-semibold text-base transition duration-300 shadow-md hover:shadow-[0_0_16px_4px_rgba(134,25,143,0.4)]"
                        >
                            <Book className="h-5 w-5" />
                            Become a Student
                        </Link>
                    </Button>
                    <Link
                        href="/sign-in"
                        className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#f3e8ff] text-[#86198f] font-semibold text-base shadow-md transition duration-300 hover:shadow-[0_0_12px_2px_rgba(134,25,143,0.4)]"
                    >
                        <UserPlus className="h-5 w-5" />
                        Become a Tutor
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

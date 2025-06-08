import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Book, UserPlus } from "lucide-react"
import FinisherHeader from "@/components/FinisherHeader"

const HeroSection = () => {
    return (
        <section className="w-full min-h-[400px] py-20 relative overflow-hidden">
            <FinisherHeader />

            <div className="relative z-10 max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl px-8 py-16 text-center border border-primary/10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Empowering Learning Through Personalized Mentorship
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                    Free academic support tailored to K–12 and adult learners.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary-dark text-white rounded-full px-6"
                        asChild
                    >
                        <Link href="/my-journey" className="flex items-center gap-2">
                            <Book className="h-5 w-5" />
                            Browse Lessons
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary-light rounded-full px-6"
                        asChild
                    >
                        <Link href="/sign-in" className="flex items-center gap-2">
                            <UserPlus className="h-5 w-5" />
                            Become a Tutor
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const featuredImages = [
    {
        src: '/gallery/student.jpg',
        alt: 'Student success celebration',
        caption: 'Celebrating academic achievements at our annual ceremony'
    },
    {
        src: '/gallery/student.jpg',
        alt: 'Group tutoring session',
        caption: 'Volunteers helping students with math during a Saturday session'
    },
    {
        src: '/gallery/student.jpg',
        alt: 'Community event',
        caption: 'GRMR community gathering with students, families and volunteers'
    }
]

const GalleryFeature = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === featuredImages.length - 1 ? 0 : prevIndex + 1
            )
        }, 6000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-semibold text-primary">Featured Moments</h2>
                    <p className="text-gray-600">Highlights from our journey</p>
                </div>

                <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={featuredImages[currentIndex].src}
                                alt={featuredImages[currentIndex].alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <p className="text-white text-lg md:text-xl font-medium">{featuredImages[currentIndex].caption}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                        {featuredImages.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${
                                    index === currentIndex ? "bg-white scale-125" : "bg-white/50"
                                }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`View featured image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryFeature
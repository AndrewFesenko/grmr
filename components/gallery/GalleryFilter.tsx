'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

type FilterOption = {
    value: string
    label: string
}

const filters: FilterOption[] = [
    { value: 'all', label: 'All Photos' },
    { value: 'tutoring', label: 'Tutoring Sessions' },
    { value: 'events', label: 'Events' },
    { value: 'volunteers', label: 'Volunteers' },
    { value: 'students', label: 'Students' }
]

type Props = {
    activeFilter: string
    setActiveFilter: (filter: string) => void
}

const GalleryFilter = ({ activeFilter, setActiveFilter }: Props) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-8 relative">
            {filters.map((filter) => {
                const isActive = activeFilter === filter.value
                return (
                    <motion.button
                        key={filter.value}
                        onClick={() => setActiveFilter(filter.value)}
                        className={cn(
                            "relative px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300",
                            isActive
                                ? "text-white bg-primary"
                                : "text-gray-600 bg-white hover:bg-gray-100"
                        )}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {filter.label}

                        {/* Animated underline for the active filter */}
                        {isActive && (
                            <motion.span
                                layoutId="filter-underline"
                                className="absolute inset-0 rounded-full bg-primary"
                                style={{ zIndex: -1 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </motion.button>
                )
            })}
        </div>
    )
}

export default GalleryFilter

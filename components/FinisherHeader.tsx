'use client'

import { useEffect } from 'react'

const FinisherHeader = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            if (typeof (window as any).FinisherHeader === 'function') {
                new (window as any).FinisherHeader({
                    count: 100,
                    size: { min: 2, max: 40, pulse: 0 },
                    speed: { x: { min: 0, max: 0.8 }, y: { min: 0, max: 0.2 } },
                    colors: {
                        background: '#ede9f7',
                        particles: ['#f8c4ea', '#c4e9fb', '#fff7c2', '#d4fbe3', '#dcd5fa'],
                    },
                    blending: 'screen',
                    opacity: { center: 1, edge: 1 },
                    skew: -1,
                    shapes: ['c', 's', 't'],
                })
                clearInterval(interval)
            }
        }, 100)
        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className="finisher-header fixed top-0 left-0 w-full h-full -z-10"
            style={{ width: '100%', height: '100vh' }}
        />
    )
}

export default FinisherHeader

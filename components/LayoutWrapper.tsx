'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const isHome = pathname === '/'

    return (
        <div className={isHome ? 'bg-transparent' : 'bg-background'}>
            {children}
        </div>
    )
}

export default LayoutWrapper

'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import FinisherHeader from './FinisherHeader'
import React from 'react'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const isHome = pathname === '/'

    return (
        <div className={isHome ? 'bg-transparent' : 'bg-background'}>
            {/* Only include script + finisher header on home */}
            {isHome && (
                <>
                    <Script src="/finisher-header.es5.min.js" strategy="afterInteractive" />
                    <FinisherHeader />
                </>
            )}

            {children}
        </div>
    )
}

export default LayoutWrapper

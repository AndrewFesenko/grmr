import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Script from "next/script"
import LayoutWrapper from "@/components/LayoutWrapper"

const bricolage = Bricolage_Grotesque({
    variable: "--font-bricolage",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "GRMR",
    description: "Free academic support tailored to K–12 and adult learners.",
    icons: {
        icon: "public/favicon.ico"
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
        {/*<Script src="/finisher-header.es5.min.js" strategy="beforeInteractive" />*/}
        <Navbar />
        <LayoutWrapper>{children}</LayoutWrapper>
        </body>
        </html>
    )
}

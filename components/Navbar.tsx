'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import { Menu } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-border overflow-x-hidden">
            <div className="flex items-center justify-between px-4 py-3 sm:px-14">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/images/GRMR.png" alt="GRMR" width={46} height={44} />
                    <span className="text-xl font-semibold text-primary">GRMR Education</span>
                </Link>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <Menu className="w-6 h-6 text-primary" />
                </button>

                {/* Desktop NavItems */}
                <div className="hidden sm:flex items-center gap-8">
                    <NavItems />
                </div>
            </div>

            {/* Mobile NavItems with transition */}
            <div
                className={clsx(
                    "sm:hidden px-4 overflow-hidden transition-all duration-300 ease-in-out",
                    mobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
                )}
            >
                <NavItems mobile />
            </div>
        </nav>
    );
};

export default Navbar;

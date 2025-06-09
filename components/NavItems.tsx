'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Lessons', href: '/my-journey' },
    { label: 'Resources', href: '/resources' },
    { label: 'Gallery', href: '/photos' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Feedback Form', href: '/form' },
];

const NavItems = ({ mobile = false }: { mobile?: boolean }) => {
    const pathname = usePathname();

    return (
        <nav className={cn("text-primary", mobile ? "flex flex-col gap-4 pt-4" : "flex items-center gap-4")}>
            {navItems.map(({ label, href }) => {
                const isActive = pathname === href;

                // Special styling for Feedback Form
                if (label === 'Feedback Form') {
                    return (
                        <Link
                            href={href}
                            key={label}
                            className={cn(
                                "group relative rounded-full px-4 py-2 text-white font-semibold bg-primary text-sm transition-all duration-300 border-2 border-transparent hover:bg-white hover:text-primary hover:border-primary hover:scale-105",
                                mobile ? "w-fit self-start" : ""
                            )}
                        >
                            {label}
                        </Link>
                    );
                }

                return (
                    <Link
                        href={href}
                        key={label}
                        className={cn(
                            "group relative text-base font-medium text-primary transition-all duration-300",
                            isActive && "font-semibold"
                        )}
                    >
                        {label}
                        <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>

                );
            })}
        </nav>
    );
};

export default NavItems;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navItems } from '@/constants'; // ✅ Imported from constants

const NavItems = ({ mobile = false }: { mobile?: boolean }) => {
    const pathname = usePathname();

    return (
        <nav className={cn('text-primary', mobile ? 'flex flex-col gap-4 pt-4' : 'flex items-center gap-4')}>
            {navItems.map(({ label, href }) => {
                const isActive = pathname === href;

                if (label === 'Feedback Form') {
                    return (
                        <Link
                            href={href}
                            key={label}
                            className={cn(
                                'relative rounded-full px-4 py-2 font-semibold text-sm overflow-hidden transition-all duration-300 group',
                                'bg-[#f3e8ff] text-[#86198f] border border-[#d8b4fe]',
                                'hover:bg-[#86198f] hover:text-white hover:shadow-[0_0_12px_2px_rgba(216,180,254,0.6)]',
                                mobile ? 'w-fit self-start' : ''
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
                            'group relative text-base font-medium text-primary transition-all duration-300',
                            isActive && 'font-semibold'
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

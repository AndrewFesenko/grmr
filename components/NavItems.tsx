'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navItems } from '@/constants';
import { useRef, useState, useEffect } from 'react';
import DropdownPortal from './DropdownPortal';

const NavItems = ({ mobile = false }: { mobile?: boolean }) => {
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const resourcesBtnRef = useRef<HTMLAnchorElement>(null);
    const [dropdownPos, setDropdownPos] = useState<{ left: number; top: number; width: number }>({ left: 0, top: 0, width: 0 });
    const closeTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (dropdownOpen && resourcesBtnRef.current) {
            const rect = resourcesBtnRef.current.getBoundingClientRect();
            setDropdownPos({
                left: rect.left + rect.width / 2,
                top: rect.bottom + window.scrollY,
                width: rect.width,
            });
        }
    }, [dropdownOpen]);

    const handleMouseEnter = () => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        setDropdownOpen(true);
    };
    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
    };

    return (
        <nav className={cn('text-primary', mobile ? 'flex flex-col gap-4 pt-4' : 'flex items-center gap-4')}>
            {navItems.map(({ label, href, children }) => {
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

                if (children && !mobile) {
                    return (
                        <div
                            key={label}
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href={href}
                                ref={resourcesBtnRef}
                                className={cn(
                                    'group relative flex items-center text-base text-primary transition-all duration-300',
                                    isActive ? 'font-extrabold' : 'font-medium'
                                )}
                                style={{ gap: 0 }}
                            >
                                {label}
                                <span
                                    className={cn(
                                        'transition-transform duration-200',
                                        dropdownOpen ? 'rotate-180' : ''
                                    )}
                                    style={{ marginLeft: '2px' }}
                                    aria-hidden="true"
                                >
                                    ⏷
                                </span>
                                <span
                                    className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                />
                            </Link>

                            {dropdownOpen && (
                                <DropdownPortal>
                                    <div
                                        className={cn(
                                            'bg-white rounded-xl shadow-lg border border-border z-[9999] transition-all duration-200',
                                            'opacity-100 visible pointer-events-auto'
                                        )}
                                        style={{
                                            position: 'absolute',
                                            left: dropdownPos.left,
                                            top: dropdownPos.top,
                                            transform: 'translateX(-50%)',
                                            minWidth: '12rem',
                                        }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <ul className="py-2">
                                            {children.map((child: any) => (
                                                <li key={child.label}>
                                                    <Link
                                                        href={child.href}
                                                        className="block px-4 py-2 text-primary hover:bg-[#f3e8ff] hover:text-[#86198f] rounded-lg transition"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </DropdownPortal>
                            )}
                        </div>
                    );
                }

                if (children && mobile) {
                    return (
                        <div key={label} className="flex flex-col gap-1">
                            <Link
                                href={href}
                                className={cn(
                                    'group relative text-base text-primary transition-all duration-300',
                                    isActive ? 'font-extrabold' : 'font-medium'
                                )}
                            >
                                {label}
                                <span
                                    className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                />
                            </Link>
                            <div className="ml-4 flex flex-col gap-1">
                                {children.map((child: any) => (
                                    <Link
                                        key={child.label}
                                        href={child.href}
                                        className="text-sm text-primary hover:text-[#86198f] py-1 transition"
                                    >
                                        {child.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                }

                return (
                    <Link
                        href={href}
                        key={label}
                        className={cn(
                            'group relative text-base text-primary transition-all duration-300',
                            isActive ? 'font-extrabold' : 'font-medium'
                        )}
                    >
                        {label}
                        <span
                            className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                        />
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavItems;
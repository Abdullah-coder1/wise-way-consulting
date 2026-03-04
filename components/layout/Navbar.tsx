"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#work", label: "Our Work" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/about", label: "About Us" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10">
            <div className="container flex min-h-[5rem] md:min-h-[6rem] py-2 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <Link href="/" className="group flex items-center cursor-pointer py-2 overflow-hidden max-w-[70vw] md:max-w-none">
                        {/* The Logo Icon - Responsively Sized to prevent mobile squishing */}
                        <div className="relative h-8 w-16 md:h-16 md:w-32 flex-shrink-0 flex items-center justify-start">
                            <Image
                                src="/logo.png"
                                alt="Wiseway Symbol"
                                fill
                                priority
                                className="object-contain filter grayscale brightness-[200%] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                            />
                        </div>

                        {/* Static Text next to the Logo - Uses text-xs/sm on mobile to stay on row */}
                        <div className="ml-1 md:ml-2 flex items-center min-w-0">
                            <span className="text-white text-[10px] xs:text-xs sm:text-sm md:text-xl font-bold tracking-widest truncate">
                                WISEWAY <span className="text-blue-500">CONSULTING</span>
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors group py-1"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link
                        href="/get-started"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-brand-primary px-4 py-2 text-sm font-medium text-white transition-all hover:bg-brand-primary/90 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-black"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="flex items-center p-2 md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Toggle menu</span>
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-white/10 bg-midnight-950 p-4">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="relative w-fit text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Button asChild variant="premium" className="w-full bg-brand-primary text-white hover:bg-brand-primary/90 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                            <Link href="/get-started">Get Started</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}

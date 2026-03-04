import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-midnight-950 py-12 md:py-16 lg:py-20 text-zinc-400">
            <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gold-600 flex items-center justify-center">
                            <span className="font-bold text-black">W</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Wise Way</span>
                    </div>
                    <p className="text-sm">
                        Expert capital raising advisory for serious founders. Business plans, pitch decks, and financial models that win investors.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-white">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><span className="text-zinc-400">Business Plans</span></li>
                        <li><span className="text-zinc-400">Pitch Decks</span></li>
                        <li><span className="text-zinc-400">Financial Models</span></li>
                        <li><span className="text-zinc-400">Investor Storytelling</span></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-white">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/#work" className="hover:text-white">Success Stories</Link></li>
                        <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link href="/#reviews" className="hover:text-white">Reviews</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-white">Contact Us</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Email: <a href="mailto:haris@wisewayconsulting.co" className="hover:text-white transition-colors">haris@wisewayconsulting.co</a></li>
                        <li>Phone: +92 3230148199</li>
                        <li>Location: Islamabad, Pakistan</li>
                    </ul>
                    <div className="flex gap-4">
                        {/* Social Links */}
                        <a href="https://www.linkedin.com/in/m-haris-khan1/" target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-gold-600 hover:text-black transition-colors">
                            In
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mt-12 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
                © 2026 Wise Way Consulting. All rights reserved.
            </div>
        </footer>
    )
}

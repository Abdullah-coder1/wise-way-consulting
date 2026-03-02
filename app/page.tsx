import Hero from '@/components/sections/Hero';
import Strategist from '@/components/sections/Strategist';
import Manifesto from '@/components/sections/Manifesto';
import Services from '@/components/sections/Services';
import Authority from '@/components/sections/Authority';
import Portfolio from '@/components/sections/Portfolio';
import Reviews from '@/components/sections/Reviews';
import CalendlyCTA from '@/components/layout/CalendlyCTA';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-black text-white selection:bg-white/20">
            <Hero />
            <Strategist />
            <Manifesto />
            <Services />
            <Authority />
            <Portfolio />
            <Reviews />
            <CalendlyCTA />
        </main>
    );
}

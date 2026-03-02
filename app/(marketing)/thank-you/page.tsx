import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
    return (
        <div className="bg-midnight-950 min-h-screen flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-gold-500/20 flex items-center justify-center mb-8">
                    <CheckCircle2 className="h-12 w-12 text-gold-500" />
                </div>
                <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">Application Received</h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                    Thank you for trusting Wise Way Consulting. We have received your project details and reviewing them now.
                </p>
                <div className="bg-zinc-900/50 p-6 rounded-lg max-w-md mx-auto border border-white/10 mb-10">
                    <p className="text-white font-semibold mb-2">What happens next?</p>
                    <ol className="text-left text-zinc-400 space-y-2 text-sm">
                        <li>1. Our team reviews your requirements (24 hrs).</li>
                        <li>2. You&apos;ll receive an email to schedule a strategy call.</li>
                        <li>3. We kick off the project and secure your funding.</li>
                    </ol>
                </div>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link href="/">Return Home</Link>
                </Button>
            </div>

            {/* Google Analytics Conversion Event Placeholder */}
            <script dangerouslySetInnerHTML={{
                __html: `
            console.log("GA Conversion Event Fired");
            // window.gtag && window.gtag('event', 'conversion', {'send_to': 'AW-CONVERSION_ID'});
          `
            }} />
        </div>
    );
}

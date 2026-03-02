import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get Started | Wise Way Consulting",
    description: "Begin your journey to securing investor funding. Submit your project details for a bespoke proposal.",
};

export default function GetStartedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

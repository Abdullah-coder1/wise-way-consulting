import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                foreground: "#F8FAFC",
                card: "#000000", // or a very dark gray if needed for contrast, but user asked for pure black aesthetic
                "card-foreground": "#F8FAFC",
                popover: "#000000",
                "popover-foreground": "#F8FAFC",
                primary: "#F8FAFC",
                "primary-foreground": "#000000",
                secondary: "#1E293B",
                "secondary-foreground": "#F8FAFC",
                muted: "#1E293B",
                "muted-foreground": "#94A3B8",
                accent: "#1E293B",
                "accent-foreground": "#F8FAFC",
                destructive: "#7F1D1D",
                "destructive-foreground": "#F8FAFC",
                border: "#1E293B",
                input: "#1E293B",
                ring: "#F8FAFC", // White ring for focus
                "brand-primary": "hsl(var(--brand-primary))",
                "brand-secondary": "hsl(var(--brand-secondary))",
            },
            fontFamily: {
                sans: ["var(--font-sans)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
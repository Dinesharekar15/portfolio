import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dinesh Arekar — Software Engineer",
  description:
    "Portfolio of Dinesh Arekar, 2026 Computer Science & Engineering graduate and aspiring Software Engineer. Building digital systems from idea to production.",
  keywords: [
    "Dinesh Arekar",
    "Software Engineer",
    "Full Stack Developer",
    "Computer Science",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Distributed Systems",
  ],
  authors: [{ name: "Dinesh Arekar" }],
  creator: "Dinesh Arekar",
  openGraph: {
    title: "Dinesh Arekar — Software Engineer",
    description: "I build digital systems from idea → production.",
    url: "https://dinesharekar.dev",
    siteName: "Dinesh Arekar Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${geistSans.variable} dark`}
    >
      <body className="min-h-screen bg-[#080808] text-[#F2F2EE] font-sans antialiased selection:bg-[#FF4A1C] selection:text-black">
        {/* Custom cursor — desktop only, self-disables on touch */}
        <CustomCursor />

        {/* Scroll progress bar */}
        <ScrollProgress />

        {/* Subtle noise grain texture */}
        <div
          className="pointer-events-none fixed inset-0 z-50 bg-grain opacity-60 mix-blend-overlay"
          aria-hidden="true"
        />
        {/* Subtle engineering grid */}
        <div
          className="pointer-events-none fixed inset-0 z-0 bg-grid-technical opacity-40"
          aria-hidden="true"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dinesh Arekar",
              url: "https://dinesharekar.dev",
              jobTitle: "Software Engineer",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Computer Science and Engineering (Graduating 2026)",
              },
              sameAs: [
                "https://github.com/arekar",
                "https://linkedin.com/in/dinesharekar",
              ],
              knowsAbout: [
                "Software Engineering",
                "Next.js",
                "TypeScript",
                "React",
                "Node.js",
                "PostgreSQL",
                "Python",
                "Distributed Systems",
              ],
            }),
          }}
        />

        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

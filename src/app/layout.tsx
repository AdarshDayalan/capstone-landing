import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Link from "next/link";
import { Phone } from "lucide-react";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  title: "Capstone Studios — Websites for Trades Businesses",
  description:
    "Hand-built websites for roofers, plumbers, electricians, HVAC, and every trade in between. Free demo before you pay a dime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        <div className="min-h-screen bg-[var(--brand-cream)]">
          {/* Nav */}
          <header
            className="sticky top-0 z-40 border-b border-[color:var(--brand-sand)] backdrop-blur-md"
            style={{ backgroundColor: "rgba(247, 242, 232, 0.85)" }}
          >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
              <Link
                href="/"
                className="flex items-baseline gap-1.5 text-[color:var(--brand-ink)] no-underline"
              >
                <span
                  className="font-display"
                  style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.035em" }}
                >
                  Capstone
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--brand-stone)",
                  }}
                >
                  Studios
                </span>
              </Link>

              <nav className="flex items-center gap-4">
                <a
                  href="tel:+10000000000"
                  className="hidden items-center gap-1.5 text-[color:var(--brand-stone)] transition-colors hover:text-[color:var(--brand-ink)] sm:inline-flex"
                  style={{ fontSize: 13, fontWeight: 500 }}
                >
                  <Phone size={14} strokeWidth={2} />
                  (xxx) xxx-xxxx
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center rounded-full transition-transform hover:-translate-y-0.5"
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "9px 18px",
                    backgroundColor: "var(--brand-ink)",
                    color: "var(--brand-cream-warm)",
                    textDecoration: "none",
                    boxShadow: "0 1px 0 var(--brand-ink-deep), 0 6px 18px -8px rgba(27,37,89,0.45)",
                  }}
                >
                  Get a demo
                </a>
              </nav>
            </div>
          </header>

          {children}

          {/* Footer */}
          <footer
            className="border-t border-[color:var(--brand-sand)]"
            style={{ backgroundColor: "var(--brand-cream-warm)" }}
          >
            <div className="mx-auto max-w-6xl px-6 py-10">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p
                    className="font-display"
                    style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.035em", color: "var(--brand-ink)" }}
                  >
                    Capstone Studios
                  </p>
                  <p style={{ fontSize: 13, color: "var(--brand-stone)", marginTop: 2 }}>
                    Hand-built websites for trades, out of Gurnee, IL.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1 sm:items-end">
                  <a
                    href="tel:+10000000000"
                    className="flex items-center gap-1.5"
                    style={{ fontSize: 13, fontWeight: 600, color: "var(--brand-ink)", textDecoration: "none" }}
                  >
                    <Phone size={14} strokeWidth={2} />
                    (xxx) xxx-xxxx
                  </a>
                  <a
                    href="mailto:steven@capstonestudios.co"
                    style={{ fontSize: 13, color: "var(--brand-stone)", textDecoration: "none" }}
                  >
                    steven@capstonestudios.co
                  </a>
                </div>
              </div>
              <p
                className="mt-8 border-t border-[color:var(--brand-sand)] pt-5"
                style={{ fontSize: 11, color: "var(--brand-stone)", letterSpacing: "0.02em" }}
              >
                © {new Date().getFullYear()} Capstone Studios. Built by humans, for humans who build things.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

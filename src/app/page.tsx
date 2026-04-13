"use client";

import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Star,
  Search,
  CheckCircle2,
  Camera,
  MessageSquare,
  Globe,
  Zap,
  Hammer,
  Quote,
  Check,
} from "lucide-react";

const TRADES = [
  "Roofers", "Plumbers", "Electricians", "HVAC", "Landscapers",
  "Concrete", "Fencing", "Painters", "GCs",
];

const BENEFITS = [
  {
    icon: Search,
    title: "Show up when they search",
    desc: "Someone Googles \"roofer near me\" — you show up. We build sites that rank for the searches that actually bring jobs.",
  },
  {
    icon: Phone,
    title: "Phone rings. Period.",
    desc: "Every page is built to get the phone ringing. Click-to-call, contact forms, clear CTAs. No fluff.",
  },
  {
    icon: Star,
    title: "Your reviews, front and center",
    desc: "Your Google reviews, right on your site. People trust other customers — we make sure they see yours first.",
  },
  {
    icon: Hammer,
    title: "Built for trades. Only trades.",
    desc: "No cookie-cutter templates. This is all we do, so we know exactly what your customers are looking for.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "We build you a demo",
    desc: "Free. No commitment. We put together a site for your business so you see exactly what you'd get.",
  },
  {
    step: "02",
    title: "You tell us what to tweak",
    desc: "Reply over email or text. Send us your photos — real work beats stock every time.",
  },
  {
    step: "03",
    title: "Happy? You pay.",
    desc: "One-time setup plus monthly hosting. No surprises. Not happy? No hard feelings.",
  },
  {
    step: "04",
    title: "We launch it",
    desc: "Your site goes live, Google picks it up, the phone starts ringing. That's the whole thing.",
  },
];

const SERVICES = [
  {
    title: "Custom Website",
    desc: "Mobile-first, fast-loading, built from scratch. Not a template — designed for your trade, your town.",
    icon: Globe,
  },
  {
    title: "Google Business Profile",
    desc: "Full setup and optimization so you land in the Google Maps 3-pack when people search nearby.",
    icon: Search,
  },
  {
    title: "Local SEO",
    desc: "On-page optimization, schema markup, local keywords. Google knows exactly where you are and what you do.",
    icon: Zap,
  },
  {
    title: "Photo Gallery",
    desc: "Your real projects, professionally laid out. Your photos, your work — that's what actually sells.",
    icon: Camera,
  },
  {
    title: "Reviews on Tap",
    desc: "Auto-display your Google reviews on the site. Social proof before they even pick up the phone.",
    icon: Star,
  },
  {
    title: "We've Got You",
    desc: "Monthly hosting, updates, backups, tweaks. Need something changed? Shoot us a text. Done.",
    icon: MessageSquare,
  },
];

const PORTFOLIO = [
  {
    name: "Robert's Exterior Services",
    trade: "Roofer",
    location: "Wonder Lake, IL",
    result: "Live site in 3 days — referrals already coming in",
    url: "https://robertsexteriorservices.com",
  },
];

const TESTIMONIALS = [
  {
    text: "The website is looking great. We will definitely refer you to local companies we know.",
    author: "David-Matthew K.",
    trade: "Roofer — Wonder Lake, IL",
    rating: 5,
  },
];

const PLANS = [
  {
    name: "Starter",
    tagline: "Get found online.",
    monthly: 29,
    annual: 23,
    setup: "$1K – $3K",
    featured: false,
    features: [
      "Custom website built for your trade",
      "Mobile-friendly responsive design",
      "Google Business Profile setup",
      "Click-to-call + contact form",
      "SSL certificate (HTTPS)",
      "Monthly hosting & backups",
    ],
  },
  {
    name: "Growth",
    tagline: "Get more leads.",
    monthly: 199,
    annual: 159,
    setup: "$3K – $5K",
    featured: true,
    features: [
      "Everything in Starter",
      "Local SEO optimization",
      "Google Maps 3-pack strategy",
      "Review generation system",
      "Monthly performance reports",
      "Lead tracking & analytics",
      "Ongoing support & tweaks",
    ],
  },
  {
    name: "Partner",
    tagline: "Dominate your area.",
    monthly: 499,
    annual: 399,
    setup: "$5K – $10K",
    featured: false,
    features: [
      "Everything in Growth",
      "Content marketing (blog + photos)",
      "Google Ads management",
      "Competitor analysis & strategy",
      "Priority support (text me anytime)",
      "Quarterly strategy calls",
      "Social media presence",
      "Dedicated account manager",
    ],
  },
];

const INCLUDED = [
  "Mobile-friendly responsive design",
  "SSL certificate (HTTPS)",
  "Google Business Profile setup",
  "Local SEO optimization",
  "Click-to-call buttons",
  "Contact form",
  "Google Maps integration",
  "Speed optimized (90+ Lighthouse)",
  "Monthly hosting & backups",
  "Ongoing support & tweaks",
];

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          fill={i <= count ? "#C2410C" : "none"}
          stroke={i <= count ? "#C2410C" : "#E6DFCF"}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      style={{ padding: "88px 24px", backgroundColor: "var(--brand-cream-warm)" }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <span className="sticker">Pricing</span>
          <h2
            className="font-display mt-4"
            style={{
              fontSize: "clamp(32px, 4.5vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "var(--brand-charcoal)",
            }}
          >
            More leads. More jobs.{" "}
            <span className="italic" style={{ color: "var(--brand-terracotta)" }}>
              That&apos;s it.
            </span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg"
            style={{ fontSize: 15, color: "var(--brand-stone)", lineHeight: 1.65 }}
          >
            Pick the plan that fits where you are. Every plan is month-to-month
            — no contracts, cancel anytime.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border px-1.5 py-1.5"
            style={{ borderColor: "var(--brand-sand)", backgroundColor: "var(--brand-cream)" }}
          >
            <button
              onClick={() => setAnnual(false)}
              className="rounded-full px-5 py-2 text-sm font-semibold transition-all"
              style={{
                backgroundColor: !annual ? "var(--brand-ink)" : "transparent",
                color: !annual ? "#FFFDF8" : "var(--brand-stone)",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="rounded-full px-5 py-2 text-sm font-semibold transition-all"
              style={{
                backgroundColor: annual ? "var(--brand-ink)" : "transparent",
                color: annual ? "#FFFDF8" : "var(--brand-stone)",
              }}
            >
              Annual{" "}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: annual ? "var(--brand-terracotta-soft)" : "var(--brand-terracotta)",
                }}
              >
                (save 20%)
              </span>
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="card-lift relative flex flex-col rounded-2xl border p-7"
              style={{
                backgroundColor: plan.featured ? "var(--brand-ink)" : "var(--brand-cream)",
                borderColor: plan.featured ? "var(--brand-ink)" : "var(--brand-sand)",
                boxShadow: plan.featured
                  ? "0 24px 48px -12px rgba(27, 37, 89, 0.35)"
                  : undefined,
              }}
            >
              {plan.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold"
                  style={{
                    backgroundColor: "var(--brand-terracotta)",
                    color: "#FFFDF8",
                    letterSpacing: "0.04em",
                  }}
                >
                  Most Popular
                </span>
              )}

              <h3
                className="font-display"
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: plan.featured ? "#FFFDF8" : "var(--brand-charcoal)",
                  letterSpacing: "-0.02em",
                }}
              >
                {plan.name}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: plan.featured ? "rgba(255,253,248,0.6)" : "var(--brand-stone)",
                  marginTop: 4,
                }}
              >
                {plan.tagline}
              </p>

              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-display"
                    style={{
                      fontSize: 48,
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: plan.featured ? "#FFFDF8" : "var(--brand-charcoal)",
                    }}
                  >
                    ${annual ? plan.annual : plan.monthly}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: plan.featured ? "rgba(255,253,248,0.5)" : "var(--brand-stone)",
                    }}
                  >
                    /mo
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: plan.featured ? "rgba(255,253,248,0.4)" : "var(--brand-stone)",
                    marginTop: 6,
                    opacity: 0.8,
                  }}
                >
                  One-time setup: {plan.setup}
                </p>
              </div>

              <div
                className="my-6"
                style={{
                  height: 1,
                  backgroundColor: plan.featured
                    ? "rgba(255,253,248,0.12)"
                    : "var(--brand-sand)",
                }}
              />

              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5"
                    style={{
                      fontSize: 13.5,
                      color: plan.featured ? "rgba(255,253,248,0.8)" : "var(--brand-charcoal)",
                    }}
                  >
                    <Check
                      size={16}
                      style={{
                        color: plan.featured ? "var(--brand-terracotta-soft)" : "var(--brand-fern)",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className="mt-8 flex items-center justify-center gap-2 rounded-full py-3.5 text-center transition-transform hover:-translate-y-0.5"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  backgroundColor: plan.featured
                    ? "var(--brand-terracotta)"
                    : "var(--brand-ink)",
                  color: "#FFFDF8",
                  boxShadow: plan.featured
                    ? "0 1px 0 rgba(120,40,0,0.6), 0 12px 32px -12px rgba(194,65,12,0.7)"
                    : undefined,
                }}
              >
                Book a free call
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p
            className="font-display"
            style={{
              fontSize: "clamp(18px, 2.5vw, 22px)",
              color: "var(--brand-charcoal)",
              fontWeight: 400,
            }}
          >
            Not sure which plan?{" "}
            <a
              href="#demo"
              className="italic underline underline-offset-4"
              style={{ color: "var(--brand-terracotta)", textDecorationColor: "var(--brand-terracotta)" }}
            >
              Let&apos;s talk.
            </a>
          </p>
          <p
            className="mx-auto mt-3 max-w-md"
            style={{ fontSize: 14, color: "var(--brand-stone)", lineHeight: 1.65 }}
          >
            No pitch. No pressure. Just clarity on what makes sense for your
            business right now.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: "var(--brand-cream)" }}>
      {/* ─────────────── HERO ─────────────── */}
      <section
        className="texture-grain relative"
        style={{
          backgroundColor: "var(--brand-ink)",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(194,65,12,0.18), transparent 60%), radial-gradient(ellipse 60% 40% at 85% 100%, rgba(45,122,79,0.14), transparent 60%)",
          padding: "96px 24px 88px",
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="sticker"
            style={{
              backgroundColor: "rgba(255, 253, 248, 0.08)",
              borderColor: "rgba(255, 253, 248, 0.18)",
              color: "var(--brand-terracotta-soft)",
              boxShadow: "none",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--brand-terracotta-soft)" }} />
            Websites for trades — Gurnee + Lake County
          </span>

          <h1
            className="font-display text-white"
            style={{
              fontSize: "clamp(44px, 7vw, 76px)",
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              marginTop: 22,
            }}
          >
            Websites that get{" "}
            <span className="marker-underline italic" style={{ fontWeight: 500 }}>
              the phone ringing
            </span>
            .
          </h1>

          <p
            className="mx-auto max-w-2xl text-white/75"
            style={{ fontSize: 17, lineHeight: 1.65, marginTop: 22, fontWeight: 400 }}
          >
            Hey — I&apos;m Steven. I build sites for roofers, plumbers, electricians, and
            every trade in between. I&apos;ll put together a demo site for your business{" "}
            <span className="text-white">before you pay a dime</span>. If you like it,
            we tweak till it&apos;s yours. If not, no hard feelings.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full transition-transform hover:-translate-y-0.5"
              style={{
                fontSize: 15,
                fontWeight: 600,
                padding: "16px 28px",
                backgroundColor: "var(--brand-terracotta)",
                color: "#FFFDF8",
                textDecoration: "none",
                boxShadow:
                  "0 1px 0 rgba(120, 40, 0, 0.6), 0 12px 32px -12px rgba(194, 65, 12, 0.7)",
              }}
            >
              Build me a free demo
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+10000000000"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 transition-colors hover:bg-white/5"
              style={{
                fontSize: 14,
                fontWeight: 500,
                padding: "15px 24px",
                color: "#FFFDF8",
                textDecoration: "none",
              }}
            >
              <Phone size={16} />
              Or just call: (xxx) xxx-xxxx
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {TRADES.map((trade) => (
              <span
                key={trade}
                className="text-white/55"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  padding: "5px 13px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                {trade}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── STEVEN'S NOTE ─────────────── */}
      <section style={{ padding: "72px 24px" }}>
        <div className="mx-auto max-w-3xl">
          <div
            className="relative rounded-3xl border bg-[color:var(--brand-cream-warm)] p-8 sm:p-12"
            style={{ borderColor: "var(--brand-sand)" }}
          >
            <Quote
              size={48}
              className="absolute"
              style={{
                top: -20,
                left: 28,
                color: "var(--brand-terracotta)",
                backgroundColor: "var(--brand-cream)",
                padding: 8,
                borderRadius: "50%",
              }}
            />
            <p
              className="font-display"
              style={{
                fontSize: "clamp(22px, 3vw, 28px)",
                lineHeight: 1.35,
                color: "var(--brand-charcoal)",
                fontWeight: 400,
              }}
            >
              Too many great contractors have no website — or one that
              doesn&apos;t do them justice. I only work with trades because I
              know what actually works for your customers. I&apos;ll build you
              a demo for free. No pressure, no commitment.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div
                className="flex items-center justify-center"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "var(--brand-ink)",
                  color: "var(--brand-cream-warm)",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "var(--font-display), serif",
                }}
              >
                SI
              </div>
              <div>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--brand-ink)",
                  }}
                >
                  Steven — Capstone Studios
                </p>
                <p style={{ fontSize: 12, color: "var(--brand-stone)" }}>
                  Gurnee, IL · Local + personal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── WHY ─────────────── */}
      <section style={{ padding: "72px 24px" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="sticker">Why us</span>
            <h2
              className="font-display mt-4"
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "var(--brand-charcoal)",
              }}
            >
              Why trades businesses{" "}
              <span className="italic" style={{ color: "var(--brand-terracotta)" }}>
                actually
              </span>{" "}
              work with us
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="card-lift rounded-2xl border p-6"
                style={{
                  backgroundColor: "var(--brand-cream-warm)",
                  borderColor: "var(--brand-sand)",
                }}
              >
                <div
                  className="mb-5 flex items-center justify-center"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: "var(--accent)",
                  }}
                >
                  <b.icon size={20} color="var(--brand-terracotta)" strokeWidth={2} />
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "var(--brand-charcoal)",
                    marginBottom: 8,
                  }}
                >
                  {b.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--brand-stone)", lineHeight: 1.65 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PRICING ─────────────── */}
      <PricingSection />

      {/* ─────────────── SERVICES ─────────────── */}
      <section
        id="services"
        style={{ padding: "72px 24px", backgroundColor: "var(--brand-cream-warm)" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="sticker">What you get</span>
            <h2
              className="font-display mt-4"
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "var(--brand-charcoal)",
              }}
            >
              Everything to get you online{" "}
              <span className="italic">and ringing</span>.
            </h2>
            <p
              className="mx-auto mt-4 max-w-xl"
              style={{ fontSize: 15, color: "var(--brand-stone)", lineHeight: 1.65 }}
            >
              Every plan includes the tools below — we just handle more of
              the work as you move up. Here&apos;s what powers your lead machine.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="card-lift rounded-2xl border p-6"
                style={{
                  backgroundColor: "var(--brand-cream)",
                  borderColor: "var(--brand-sand)",
                }}
              >
                <div
                  className="mb-4 flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: "var(--brand-cream-warm)",
                    border: "1px solid var(--brand-sand)",
                  }}
                >
                  <svc.icon size={18} color="var(--brand-ink)" strokeWidth={2} />
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--brand-charcoal)",
                    marginBottom: 6,
                  }}
                >
                  {svc.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--brand-stone)", lineHeight: 1.65 }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── INCLUDED CHECKLIST ─────────────── */}
      <section style={{ padding: "72px 24px" }}>
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="sticker">In the box</span>
            <h2
              className="font-display mt-4"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 400,
                color: "var(--brand-charcoal)",
              }}
            >
              Every website includes
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-lg border px-4 py-3"
                style={{
                  backgroundColor: "var(--brand-cream-warm)",
                  borderColor: "var(--brand-sand)",
                }}
              >
                <CheckCircle2
                  size={18}
                  style={{ color: "var(--brand-fern)", flexShrink: 0 }}
                  strokeWidth={2}
                />
                <span style={{ fontSize: 13.5, color: "var(--brand-charcoal)", fontWeight: 500 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PROCESS ─────────────── */}
      <section
        style={{ padding: "88px 24px", backgroundColor: "var(--brand-cream-warm)" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="sticker">How it works</span>
            <h2
              className="font-display mt-4"
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "var(--brand-charcoal)",
              }}
            >
              No demo calls. No meetings.{" "}
              <span className="italic" style={{ color: "var(--brand-terracotta)" }}>
                Just work.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, idx) => (
              <div key={p.step} className="relative">
                <div
                  className="font-display mb-3"
                  style={{
                    fontSize: 56,
                    fontWeight: 400,
                    lineHeight: 1,
                    color: "var(--brand-terracotta)",
                    opacity: 0.9,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {p.step}
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "var(--brand-charcoal)",
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--brand-stone)",
                    lineHeight: 1.65,
                  }}
                >
                  {p.desc}
                </p>
                {idx < PROCESS.length - 1 && (
                  <div
                    className="absolute hidden lg:block"
                    style={{
                      top: 24,
                      right: -20,
                      width: 40,
                      height: 2,
                      backgroundColor: "var(--brand-sand)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PORTFOLIO ─────────────── */}
      <section id="work" style={{ padding: "88px 24px" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="sticker">Recent builds</span>
            <h2
              className="font-display mt-4"
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "var(--brand-charcoal)",
              }}
            >
              Real sites, real{" "}
              <span className="marker-underline italic">phone calls</span>.
            </h2>
          </div>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-6">
            {PORTFOLIO.map((project) => (
              <div
                key={project.name}
                className="card-lift overflow-hidden rounded-2xl border"
                style={{
                  backgroundColor: "var(--brand-cream-warm)",
                  borderColor: "var(--brand-sand)",
                }}
              >
                <div
                  className="texture-grain relative flex items-center justify-center"
                  style={{
                    height: 200,
                    background:
                      "linear-gradient(135deg, var(--brand-ink) 0%, var(--brand-ink-deep) 100%)",
                  }}
                >
                  <Globe size={44} color="rgba(255, 253, 248, 0.18)" />
                  <span
                    className="absolute sticker"
                    style={{
                      top: 14,
                      left: 14,
                      backgroundColor: "rgba(255, 253, 248, 0.12)",
                      borderColor: "rgba(255, 253, 248, 0.2)",
                      color: "var(--brand-cream)",
                      boxShadow: "none",
                    }}
                  >
                    {project.trade}
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    className="font-display"
                    style={{
                      fontSize: 22,
                      fontWeight: 500,
                      color: "var(--brand-charcoal)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--brand-stone)",
                      marginTop: 2,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {project.location}
                  </p>
                  <p
                    className="mt-4 flex items-center gap-1.5"
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--brand-fern)",
                    }}
                  >
                    <span style={{ fontSize: 14 }}>↗</span> {project.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── TESTIMONIALS ─────────────── */}
      <section
        style={{ padding: "88px 24px", backgroundColor: "var(--brand-cream-warm)" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="sticker">Word of mouth</span>
            <h2
              className="font-display mt-4"
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "var(--brand-charcoal)",
              }}
            >
              What clients say{" "}
              <span className="italic">(their words)</span>.
            </h2>
          </div>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="card-lift relative rounded-2xl border p-6"
                style={{
                  backgroundColor: "var(--brand-cream)",
                  borderColor: "var(--brand-sand)",
                }}
              >
                <Quote
                  size={28}
                  style={{
                    color: "var(--brand-terracotta)",
                    opacity: 0.25,
                    position: "absolute",
                    top: 18,
                    right: 18,
                  }}
                />
                <Stars count={t.rating} />
                <p
                  className="font-display"
                  style={{
                    fontSize: 16,
                    lineHeight: 1.55,
                    color: "var(--brand-charcoal)",
                    marginTop: 14,
                    fontWeight: 400,
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div
                  className="mt-5 border-t pt-4"
                  style={{ borderColor: "var(--brand-sand)" }}
                >
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--brand-ink)",
                    }}
                  >
                    {t.author}
                  </p>
                  <p style={{ fontSize: 12, color: "var(--brand-stone)" }}>
                    {t.trade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section
        id="demo"
        className="texture-grain"
        style={{
          padding: "104px 24px",
          backgroundColor: "var(--brand-ink)",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(194,65,12,0.22), transparent 70%)",
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="font-display text-white"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
            }}
          >
            Want one?{" "}
            <span className="italic marker-underline">Just say the word.</span>
          </h2>
          <p
            className="mx-auto mt-6 max-w-lg text-white/75"
            style={{ fontSize: 16, lineHeight: 1.65 }}
          >
            Shoot me a text, a call, or an email. I&apos;ll put together a
            demo site for your business and send it over. Takes a couple days.
            Zero cost to see it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+10000000000"
              className="inline-flex items-center gap-2 rounded-full transition-transform hover:-translate-y-0.5"
              style={{
                fontSize: 15,
                fontWeight: 600,
                padding: "16px 28px",
                backgroundColor: "var(--brand-terracotta)",
                color: "#FFFDF8",
                textDecoration: "none",
                boxShadow:
                  "0 1px 0 rgba(120, 40, 0, 0.6), 0 12px 32px -12px rgba(194, 65, 12, 0.7)",
              }}
            >
              <Phone size={16} />
              (xxx) xxx-xxxx
            </a>
            <a
              href="mailto:steven@capstonestudios.co"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 transition-colors hover:bg-white/5"
              style={{
                fontSize: 14,
                fontWeight: 500,
                padding: "15px 24px",
                color: "#FFFDF8",
                textDecoration: "none",
              }}
            >
              steven@capstonestudios.co
            </a>
          </div>
          <p
            className="mt-8 text-white/45"
            style={{ fontSize: 12 }}
          >
            Already have a site? Get a{" "}
            <a
              href="/website-score"
              className="underline underline-offset-4 hover:text-white/80"
              style={{ color: "var(--brand-terracotta-soft)" }}
            >
              free website score
            </a>{" "}
            and see how it stacks up.
          </p>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ArrowRight, Phone, Check, Star, Globe } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    tagline: "Get found online.",
    monthly: 29,
    annual: 23,
    setup: "$1K – $3K",
    featured: false,
    features: [
      "Custom website for your trade",
      "Google Business Profile setup",
      "Click-to-call + contact form",
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
      "Review generation system",
      "Lead tracking & analytics",
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
      "Google Ads management",
      "Content + social media",
      "Dedicated account manager",
    ],
  },
];

const PORTFOLIO = [
  {
    name: "Robert's Exterior Services",
    trade: "Roofer",
    location: "Wonder Lake, IL",
    result: "Live site in 3 days — referrals already coming in",
    url: "https://robertsexteriorservices.com",
    image: "/portfolio/roberts.jpg",
  },
  {
    name: "Raudel Serna Plumbing",
    trade: "Plumber",
    location: "Lake County, IL",
    result: "Google Business optimized — calls up 40%",
    url: "https://raudel-serna-plumbing.vercel.app",
    image: "/portfolio/raudel.jpg",
  },
];

export default function LandingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: "var(--brand-cream)" }}>
      {/* ─── HERO ─── */}
      <section
        className="texture-grain"
        style={{
          backgroundColor: "var(--brand-ink)",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(194,65,12,0.18), transparent 60%)",
          padding: "80px 24px 72px",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="font-display text-white"
            style={{
              fontSize: "clamp(40px, 7vw, 68px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            More leads.{" "}
            <span className="marker-underline italic" style={{ fontWeight: 500 }}>
              More jobs.
            </span>
          </h1>

          <p
            className="mx-auto mt-5 max-w-lg text-white/70"
            style={{ fontSize: 16, lineHeight: 1.6 }}
          >
            We build your online presence — website, Google, SEO — so your
            phone rings. Chicagoland trades only.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full transition-transform hover:-translate-y-0.5"
              style={{
                fontSize: 15,
                fontWeight: 600,
                padding: "14px 26px",
                backgroundColor: "var(--brand-terracotta)",
                color: "#FFFDF8",
                textDecoration: "none",
                boxShadow:
                  "0 1px 0 rgba(120, 40, 0, 0.6), 0 12px 32px -12px rgba(194, 65, 12, 0.7)",
              }}
            >
              See a free demo
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+12242146191"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 transition-colors hover:bg-white/5"
              style={{
                fontSize: 14,
                fontWeight: 500,
                padding: "13px 22px",
                color: "#FFFDF8",
                textDecoration: "none",
              }}
            >
              <Phone size={16} />
              (xxx) xxx-xxxx
            </a>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" style={{ padding: "72px 24px" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 400,
                color: "var(--brand-charcoal)",
              }}
            >
              Simple pricing. No surprises.
            </h2>

            <div
              className="mt-6 inline-flex items-center gap-3 rounded-full border px-1.5 py-1.5"
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
                  save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="card-lift relative flex flex-col rounded-2xl border p-6"
                style={{
                  backgroundColor: plan.featured ? "var(--brand-ink)" : "var(--brand-cream-warm)",
                  borderColor: plan.featured ? "var(--brand-ink)" : "var(--brand-sand)",
                  boxShadow: plan.featured
                    ? "0 20px 40px -12px rgba(27, 37, 89, 0.3)"
                    : undefined,
                }}
              >
                {plan.featured && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: "var(--brand-terracotta)",
                      color: "#FFFDF8",
                    }}
                  >
                    Most Popular
                  </span>
                )}

                <h3
                  className="font-display"
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                    color: plan.featured ? "#FFFDF8" : "var(--brand-charcoal)",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: plan.featured ? "rgba(255,253,248,0.6)" : "var(--brand-stone)",
                    marginTop: 2,
                  }}
                >
                  {plan.tagline}
                </p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span
                    className="font-display"
                    style={{
                      fontSize: 44,
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
                      fontSize: 13,
                      color: plan.featured ? "rgba(255,253,248,0.5)" : "var(--brand-stone)",
                    }}
                  >
                    /mo
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 11,
                    color: plan.featured ? "rgba(255,253,248,0.35)" : "var(--brand-stone)",
                    marginTop: 4,
                  }}
                >
                  One-time setup: {plan.setup}
                </p>

                <div
                  className="my-5"
                  style={{
                    height: 1,
                    backgroundColor: plan.featured
                      ? "rgba(255,253,248,0.1)"
                      : "var(--brand-sand)",
                  }}
                />

                <ul className="flex flex-1 flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2"
                      style={{
                        fontSize: 13,
                        color: plan.featured ? "rgba(255,253,248,0.8)" : "var(--brand-charcoal)",
                      }}
                    >
                      <Check
                        size={15}
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
                  className="mt-6 flex items-center justify-center gap-2 rounded-full py-3 text-center transition-transform hover:-translate-y-0.5"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    backgroundColor: plan.featured
                      ? "var(--brand-terracotta)"
                      : "var(--brand-ink)",
                    color: "#FFFDF8",
                  }}
                >
                  Get started
                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-center"
            style={{ fontSize: 13, color: "var(--brand-stone)" }}
          >
            Not sure?{" "}
            <a href="#demo" style={{ color: "var(--brand-terracotta)", textDecoration: "underline" }}>
              Book a free call
            </a>
            . No pitch, no pressure.
          </p>
        </div>
      </section>

      {/* ─── WORK ─── */}
      <section
        id="work"
        style={{ padding: "72px 24px", backgroundColor: "var(--brand-cream-warm)" }}
      >
        <div className="mx-auto max-w-4xl">
          <h2
            className="font-display mb-8 text-center"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 400,
              color: "var(--brand-charcoal)",
            }}
          >
            Recent client wins
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {PORTFOLIO.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift block overflow-hidden rounded-2xl border"
                style={{
                  backgroundColor: "var(--brand-cream)",
                  borderColor: "var(--brand-sand)",
                  textDecoration: "none",
                }}
              >
                {/* Screenshot */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "16 / 10",
                  }}
                >
                  <img
                    src={p.image}
                    alt={`${p.name} website screenshot`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                </div>
                {/* Details */}
                <div style={{ padding: "20px 22px" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--brand-charcoal)" }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 12, color: "var(--brand-stone)", marginTop: 3 }}>
                    {p.trade} · {p.location}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--brand-fern)",
                      marginTop: 10,
                    }}
                  >
                    ↗ {p.result}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        id="demo"
        className="texture-grain"
        style={{
          padding: "80px 24px",
          backgroundColor: "var(--brand-ink)",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(194,65,12,0.2), transparent 70%)",
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="font-display text-white"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Ready?{" "}
            <span className="italic marker-underline">Let&apos;s talk.</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-md text-white/65"
            style={{ fontSize: 15, lineHeight: 1.6 }}
          >
            Free demo of what your online presence could look like.
            No commitment.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+12242146191"
              className="inline-flex items-center gap-2 rounded-full transition-transform hover:-translate-y-0.5"
              style={{
                fontSize: 15,
                fontWeight: 600,
                padding: "14px 26px",
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
                padding: "13px 22px",
                color: "#FFFDF8",
                textDecoration: "none",
              }}
            >
              steven@capstonestudios.co
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

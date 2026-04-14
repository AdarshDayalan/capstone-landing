"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Phone,
  Check,
  Star,
  Search,
  Globe,
  Zap,
  Camera,
  MessageSquare,
  Quote,
  MapPin,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";

/* ─── DATA ─── */

const SERVICES = [
  {
    icon: Globe,
    title: "Custom Website",
    desc: "Mobile-first, lightning-fast, built from scratch for your trade and your town. Not a template.",
  },
  {
    icon: Search,
    title: "Google Business Profile",
    desc: "Full setup and optimization so you show up in the Google Maps 3-pack when people search nearby.",
  },
  {
    icon: Zap,
    title: "Local SEO",
    desc: "On-page optimization, schema markup, local keywords. Google knows exactly where you are and what you do.",
  },
  {
    icon: Camera,
    title: "Photo & Portfolio",
    desc: "Your real projects, professionally laid out. Real work photos sell better than any stock image.",
  },
  {
    icon: Star,
    title: "Review Management",
    desc: "Auto-display your Google reviews on your site. Social proof before they even pick up the phone.",
  },
  {
    icon: MessageSquare,
    title: "Ongoing Support",
    desc: "Hosting, updates, backups, tweaks. Need something changed? Shoot us a text. Done.",
  },
];

const STATS = [
  { value: "48hr", label: "Average turnaround" },
  { value: "100%", label: "Trades-focused" },
  { value: "90+", label: "Lighthouse scores" },
  { value: "0", label: "Contracts or lock-ins" },
];

const PORTFOLIO = [
  {
    name: "Robert's Exterior Services",
    trade: "Roofing",
    location: "Wonder Lake, IL",
    result: "Live site in 3 days — referrals already coming in",
    url: "https://robertsexteriorservices.com",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=900&q=80&auto=format",
    testimonial: "The website is looking great. We will definitely refer you to local companies we know.",
    author: "David-Matthew K.",
  },
  {
    name: "Raudel Serna Plumbing",
    trade: "Plumbing",
    location: "Lake County, IL",
    result: "Google Business optimized — calls up 40% in first month",
    url: "https://raudel-serna-plumbing.vercel.app",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=900&q=80&auto=format",
    testimonial: null,
    author: null,
  },
];

const TRADES_IMAGES = [
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format", alt: "Roofer at work" },
  { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format", alt: "Plumber fixing pipes" },
  { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80&auto=format", alt: "Electrician wiring" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format", alt: "HVAC technician" },
];

const TRADES_CHIPS = [
  "Roofers", "Plumbers", "Electricians", "HVAC", "Landscapers",
  "Concrete", "Fencing", "Painters", "GCs",
];

const PLANS = [
  {
    name: "Starter",
    tagline: "Get found online.",
    price: "1,250",
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
    price: "2,500",
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
    price: "5,000",
    featured: false,
    features: [
      "Everything in Growth",
      "Google Ads management",
      "Content + social media",
      "Dedicated account manager",
    ],
  },
];

const TRADES_LIST = [
  "Roofing", "Plumbing", "Electrical", "HVAC", "Landscaping",
  "Concrete", "Fencing", "Painting", "General Contracting", "Other",
];

/* ─── MOCKUP FORM ─── */

function MockupForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", business_name: "", trade: "", city: "", google_link: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.business_name.trim() || (!form.email.trim() && !form.phone.trim())) return;
    setStatus("sending");
    try {
      const res = await fetch("https://admin.capstonestudios.co/api/public/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    fontSize: 14,
    borderRadius: 10,
    border: "1px solid var(--brand-sand)",
    backgroundColor: "#fff",
    color: "var(--brand-charcoal)",
    outline: "none",
  };

  if (status === "sent") {
    return (
      <div className="mx-auto max-w-md py-12 text-center">
        <div
          className="mx-auto mb-4 flex items-center justify-center"
          style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: "var(--brand-fern)", color: "#fff" }}
        >
          <Check size={28} strokeWidth={3} />
        </div>
        <h3 className="font-display" style={{ fontSize: 24, fontWeight: 400, color: "var(--brand-charcoal)" }}>
          We&apos;re on it!
        </h3>
        <p style={{ fontSize: 14, color: "var(--brand-stone)", marginTop: 8, lineHeight: 1.6 }}>
          We&apos;ll build a custom mockup for <strong>{form.business_name}</strong> and
          send it your way within 48 hours. Zero charge, zero commitment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input placeholder="Your name" value={form.name} onChange={set("name")} style={inputStyle} />
        <input placeholder="Business name *" required value={form.business_name} onChange={set("business_name")} style={inputStyle} />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input type="email" placeholder="Email *" value={form.email} onChange={set("email")} style={inputStyle} />
        <input type="tel" placeholder="Phone" value={form.phone} onChange={set("phone")} style={inputStyle} />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <select value={form.trade} onChange={set("trade")} style={{ ...inputStyle, appearance: "none" as const }}>
          <option value="">What trade?</option>
          {TRADES_LIST.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <input placeholder="City (e.g. Gurnee)" value={form.city} onChange={set("city")} style={inputStyle} />
      </div>
      <input
        placeholder="Google Business or website link (optional)"
        value={form.google_link}
        onChange={set("google_link")}
        style={inputStyle}
      />
      {status === "error" && (
        <p style={{ fontSize: 13, color: "#dc2626", textAlign: "center" }}>
          Something went wrong. Try again or email steven@capstonestudios.co
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 flex items-center justify-center gap-2 rounded-full transition-transform hover:-translate-y-0.5"
        style={{
          fontSize: 15,
          fontWeight: 600,
          padding: "14px 28px",
          backgroundColor: "var(--brand-terracotta)",
          color: "#FFFDF8",
          border: "none",
          cursor: status === "sending" ? "wait" : "pointer",
          opacity: status === "sending" ? 0.7 : 1,
          boxShadow: "0 1px 0 rgba(120,40,0,0.6), 0 12px 32px -12px rgba(194,65,12,0.7)",
        }}
      >
        {status === "sending" ? "Sending..." : "Get my free mockup"}
        {status !== "sending" && <ArrowRight size={18} />}
      </button>
      <p style={{ fontSize: 11, color: "var(--brand-stone)", textAlign: "center" }}>
        We personally review your business and send a custom mockup within 48 hours.
      </p>
    </form>
  );
}

/* ─── PAGE ─── */

export default function LandingPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: "var(--brand-cream)" }}>

      {/* ═══════ HERO ═══════ */}
      <section
        className="texture-grain relative"
        style={{
          backgroundColor: "var(--brand-ink)",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(194,65,12,0.18), transparent 60%), radial-gradient(ellipse 60% 40% at 85% 100%, rgba(45,122,79,0.14), transparent 60%)",
          padding: "80px 24px 64px",
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
            <MapPin size={12} /> Chicagoland&apos;s online partner for local trades
          </span>

          <h1
            className="font-display text-white"
            style={{
              fontSize: "clamp(40px, 7vw, 72px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              marginTop: 20,
            }}
          >
            Boost your online presence.{" "}
            <span className="marker-underline italic" style={{ fontWeight: 500 }}>
              Book more jobs.
            </span>
          </h1>

          <p
            className="mx-auto mt-5 max-w-xl text-white/70"
            style={{ fontSize: 16, lineHeight: 1.65 }}
          >
            We build your online presence — website, Google Business, SEO — so
            Chicagoland homeowners find you first. See a free mockup before you pay a dime.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full transition-transform hover:-translate-y-0.5"
              style={{
                fontSize: 15, fontWeight: 600, padding: "14px 26px",
                backgroundColor: "var(--brand-terracotta)", color: "#FFFDF8", textDecoration: "none",
                boxShadow: "0 1px 0 rgba(120,40,0,0.6), 0 12px 32px -12px rgba(194,65,12,0.7)",
              }}
            >
              Get a free mockup <ArrowRight size={18} />
            </a>
            <a
              href="tel:+10000000000"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 transition-colors hover:bg-white/5"
              style={{ fontSize: 14, fontWeight: 500, padding: "13px 22px", color: "#FFFDF8", textDecoration: "none" }}
            >
              <Phone size={16} /> (xxx) xxx-xxxx
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {TRADES_CHIPS.map((t) => (
              <span
                key={t}
                className="text-white/50"
                style={{
                  fontSize: 11, fontWeight: 500, padding: "4px 12px",
                  borderRadius: 999, border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TRADES IMAGE STRIP ═══════ */}
      <section style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-1 md:grid-cols-4">
          {TRADES_IMAGES.map((img) => (
            <div key={img.alt} className="relative overflow-hidden" style={{ height: 200 }}>
              <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(27,37,89,0.4) 100%)" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section style={{ padding: "40px 24px", backgroundColor: "var(--brand-ink)" }}>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display" style={{ fontSize: 32, fontWeight: 400, color: "var(--brand-terracotta-soft)", letterSpacing: "-0.03em" }}>
                {s.value}
              </p>
              <p style={{ fontSize: 12, color: "rgba(255,253,248,0.5)", marginTop: 4, fontWeight: 500 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ STEVEN'S NOTE ═══════ */}
      <section style={{ padding: "64px 24px" }}>
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl border p-7 sm:p-10" style={{ backgroundColor: "var(--brand-cream-warm)", borderColor: "var(--brand-sand)" }}>
            <Quote size={36} className="absolute" style={{ top: -14, left: 24, color: "var(--brand-terracotta)", backgroundColor: "var(--brand-cream)", padding: 6, borderRadius: "50%" }} />
            <p className="font-display" style={{ fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: 1.4, color: "var(--brand-charcoal)", fontWeight: 400 }}>
              I grew up around trades guys in Lake County. I know you&apos;re great at what you do — but
              when someone Googles &ldquo;roofer near me&rdquo; and you don&apos;t show up, that job goes
              to someone else. I fix that. Website, Google Business, SEO — the whole thing.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div
                className="flex items-center justify-center"
                style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "var(--brand-ink)", color: "var(--brand-cream-warm)", fontSize: 13, fontWeight: 600, fontFamily: "var(--font-display), serif" }}
              >
                SI
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--brand-ink)" }}>Steven — Capstone Studios</p>
                <p style={{ fontSize: 11, color: "var(--brand-stone)" }}>Gurnee, IL · Only Chicagoland trades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT WE DO ═══════ */}
      <section style={{ padding: "64px 24px", backgroundColor: "var(--brand-cream-warm)" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="sticker">What we do</span>
            <h2 className="font-display mt-3" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 400, color: "var(--brand-charcoal)" }}>
              Everything to get you found online{" "}
              <span className="italic" style={{ color: "var(--brand-terracotta)" }}>and ringing</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="card-lift rounded-xl border p-5"
                style={{ backgroundColor: "var(--brand-cream)", borderColor: "var(--brand-sand)" }}
              >
                <div
                  className="mb-3 flex items-center justify-center"
                  style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: "var(--accent)" }}
                >
                  <svc.icon size={18} color="var(--brand-terracotta)" strokeWidth={2} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--brand-charcoal)", marginBottom: 4 }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--brand-stone)", lineHeight: 1.6 }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED: ROBERT'S ═══════ */}
      <section style={{ padding: "64px 24px" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="sticker">Our work</span>
            <h2 className="font-display mt-3" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 400, color: "var(--brand-charcoal)" }}>
              Real clients, real{" "}
              <span className="marker-underline italic">results</span>.
            </h2>
          </div>

          {/* Big showcase */}
          <div
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--brand-sand)", backgroundColor: "var(--brand-cream-warm)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative" style={{ minHeight: 340 }}>
                <img
                  src={PORTFOLIO[0].image}
                  alt={PORTFOLIO[0].name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, rgba(247,242,232,0.3) 100%)" }} />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="sticker mb-3" style={{ alignSelf: "flex-start" }}>Featured</span>
                <h3 className="font-display" style={{ fontSize: 26, fontWeight: 500, color: "var(--brand-charcoal)", letterSpacing: "-0.02em" }}>
                  {PORTFOLIO[0].name}
                </h3>
                <p style={{ fontSize: 12, color: "var(--brand-stone)", marginTop: 2 }}>
                  {PORTFOLIO[0].trade} — {PORTFOLIO[0].location}
                </p>
                <p style={{ fontSize: 14, color: "var(--brand-charcoal)", lineHeight: 1.65, marginTop: 14 }}>
                  Robert had no online presence — just word of mouth. We built him a full website,
                  optimized his Google Business profile, and set up local SEO. Within a week he was
                  getting referrals from the site and showing up in local search.
                </p>
                <p className="mt-4 flex items-center gap-1.5" style={{ fontSize: 13, fontWeight: 600, color: "var(--brand-fern)" }}>
                  <TrendingUp size={14} /> {PORTFOLIO[0].result}
                </p>
                {PORTFOLIO[0].testimonial && (
                  <div className="mt-5 rounded-lg border p-4" style={{ borderColor: "var(--brand-sand)", backgroundColor: "var(--brand-cream)" }}>
                    <div className="mb-2 flex gap-0.5">
                      {[1,2,3,4,5].map((i) => <Star key={i} size={12} fill="#C2410C" stroke="#C2410C" />)}
                    </div>
                    <p style={{ fontSize: 13, color: "var(--brand-charcoal)", lineHeight: 1.5, fontStyle: "italic" }}>
                      &ldquo;{PORTFOLIO[0].testimonial}&rdquo;
                    </p>
                    <p style={{ fontSize: 11, color: "var(--brand-stone)", marginTop: 6, fontWeight: 600 }}>
                      — {PORTFOLIO[0].author}
                    </p>
                  </div>
                )}
                <a
                  href={PORTFOLIO[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full transition-transform hover:-translate-y-0.5"
                  style={{
                    fontSize: 13, fontWeight: 600, padding: "10px 20px", alignSelf: "flex-start",
                    backgroundColor: "var(--brand-terracotta)", color: "#FFFDF8", textDecoration: "none",
                    boxShadow: "0 1px 0 rgba(120,40,0,0.6), 0 8px 20px -8px rgba(194,65,12,0.5)",
                  }}
                >
                  See the live site <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Other clients */}
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {PORTFOLIO.slice(1).map((p) => (
              <div
                key={p.name}
                className="card-lift overflow-hidden rounded-xl border"
                style={{ backgroundColor: "var(--brand-cream-warm)", borderColor: "var(--brand-sand)" }}
              >
                <div className="relative" style={{ height: 200, overflow: "hidden" }}>
                  <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(27,37,89,0.6) 0%, transparent 50%)" }} />
                  <span
                    className="absolute sticker"
                    style={{ top: 12, left: 12, backgroundColor: "rgba(255,253,248,0.15)", borderColor: "rgba(255,253,248,0.25)", color: "var(--brand-cream)", boxShadow: "none", backdropFilter: "blur(8px)" }}
                  >
                    {p.trade}
                  </span>
                </div>
                <div className="p-5">
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--brand-charcoal)" }}>{p.name}</h3>
                  <p style={{ fontSize: 12, color: "var(--brand-stone)", marginTop: 2 }}>{p.location}</p>
                  <p className="mt-3 flex items-center gap-1.5" style={{ fontSize: 13, fontWeight: 600, color: "var(--brand-fern)" }}>
                    <TrendingUp size={13} /> {p.result}
                  </p>
                  <a
                    href={p.url} target="_blank" rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "var(--brand-ink)", textDecoration: "none" }}
                  >
                    View site <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY US ═══════ */}
      <section style={{ padding: "64px 24px", backgroundColor: "var(--brand-ink)" }}>
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-10 text-center text-white" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 400 }}>
            Why trades in Chicagoland{" "}
            <span className="italic" style={{ color: "var(--brand-terracotta-soft)" }}>trust us</span>
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              { icon: MapPin, title: "Local to you", desc: "Based in Gurnee. We know Lake County, the suburbs, and the Chicagoland market." },
              { icon: Shield, title: "Trades only", desc: "We don't work with restaurants or dentists. Just contractors who want more jobs." },
              { icon: Users, title: "Personal service", desc: "You text Steven directly. No tickets, no support queues. Just a guy who gets it done." },
              { icon: TrendingUp, title: "Results that matter", desc: "Phone calls, not vanity metrics. If your phone's not ringing more, we haven't done our job." },
            ].map((b) => (
              <div key={b.title} className="flex gap-4 rounded-xl p-5" style={{ backgroundColor: "rgba(255,253,248,0.05)", border: "1px solid rgba(255,253,248,0.08)" }}>
                <div className="flex-shrink-0" style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: "rgba(194,65,12,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <b.icon size={18} color="var(--brand-terracotta-soft)" />
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "#FFFDF8", marginBottom: 4 }}>{b.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,253,248,0.6)", lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ GET A FREE MOCKUP ═══════ */}
      <section id="demo" style={{ padding: "64px 24px", backgroundColor: "var(--brand-cream-warm)" }}>
        <div className="mx-auto max-w-lg">
          <div className="mb-6 text-center">
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 400, color: "var(--brand-charcoal)" }}>
              Get a <span className="italic" style={{ color: "var(--brand-terracotta)" }}>free mockup</span>
            </h2>
            <p style={{ fontSize: 14, color: "var(--brand-stone)", marginTop: 6, lineHeight: 1.6 }}>
              Tell us about your business. We&apos;ll build a custom demo of what your online
              presence could look like — and send it over personally.
            </p>
          </div>
          <MockupForm />
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section id="pricing" style={{ padding: "64px 24px" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="sticker">Plans</span>
            <h2 className="font-display mt-3" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 400, color: "var(--brand-charcoal)" }}>
              Pick your plan. We handle the rest.
            </h2>
            <p className="mx-auto mt-3 max-w-md" style={{ fontSize: 14, color: "var(--brand-stone)", lineHeight: 1.6 }}>
              One-time setup. Month-to-month after that — no contracts, cancel anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="card-lift relative flex flex-col rounded-2xl border p-6"
                style={{
                  backgroundColor: plan.featured ? "var(--brand-ink)" : "var(--brand-cream-warm)",
                  borderColor: plan.featured ? "var(--brand-ink)" : "var(--brand-sand)",
                  boxShadow: plan.featured ? "0 20px 40px -12px rgba(27,37,89,0.3)" : undefined,
                }}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold" style={{ backgroundColor: "var(--brand-terracotta)", color: "#FFFDF8" }}>
                    Most Popular
                  </span>
                )}
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 500, color: plan.featured ? "#FFFDF8" : "var(--brand-charcoal)" }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: 13, color: plan.featured ? "rgba(255,253,248,0.6)" : "var(--brand-stone)", marginTop: 2 }}>
                  {plan.tagline}
                </p>
                <p style={{ fontSize: 11, color: plan.featured ? "rgba(255,253,248,0.4)" : "var(--brand-stone)", marginTop: 12 }}>Starting at</p>
                <span className="font-display" style={{ fontSize: 36, fontWeight: 400, letterSpacing: "-0.03em", color: plan.featured ? "#FFFDF8" : "var(--brand-charcoal)" }}>
                  ${plan.price}
                </span>
                <div className="my-4" style={{ height: 1, backgroundColor: plan.featured ? "rgba(255,253,248,0.1)" : "var(--brand-sand)" }} />
                <ul className="flex flex-1 flex-col gap-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2" style={{ fontSize: 13, color: plan.featured ? "rgba(255,253,248,0.8)" : "var(--brand-charcoal)" }}>
                      <Check size={14} style={{ color: plan.featured ? "var(--brand-terracotta-soft)" : "var(--brand-fern)", flexShrink: 0, marginTop: 2 }} strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  className="mt-5 flex items-center justify-center gap-2 rounded-full py-2.5 text-center transition-transform hover:-translate-y-0.5"
                  style={{
                    fontSize: 13, fontWeight: 600, textDecoration: "none",
                    backgroundColor: plan.featured ? "var(--brand-terracotta)" : "var(--brand-ink)", color: "#FFFDF8",
                  }}
                >
                  Get started <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CALENDLY ═══════ */}
      <section id="call" style={{ padding: "48px 24px", backgroundColor: "var(--brand-cream-warm)" }}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display" style={{ fontSize: 20, fontWeight: 400, color: "var(--brand-charcoal)" }}>
            Prefer to talk first? <a href="#call" className="italic underline underline-offset-4" style={{ color: "var(--brand-terracotta)", textDecorationColor: "var(--brand-terracotta)" }}>Book a call</a> — no pitch, no pressure.
          </p>
          <div
            className="calendly-inline-widget mx-auto mt-6"
            data-url="https://calendly.com/adarsh-capstonestudios/30min?hide_gdpr_banner=1&background_color=faf9f7&text_color=1b2559&primary_color=c2410c"
            style={{ minWidth: 300, height: 580, borderRadius: 12, overflow: "hidden" }}
          />
        </div>
      </section>
    </div>
  );
}

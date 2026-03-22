import { Toaster } from "@/components/ui/sonner";
import {
  Bus,
  Car,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plane,
  Send,
  X,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";

/* ── Section fade-in wrapper ── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Nav links ── */
const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ── Services data ── */
const SERVICES = [
  {
    icon: Plane,
    title: "Tour Packages",
    desc: "Domestic and international tour packages at best prices. Customized itineraries for every budget.",
    highlight: "Popular Choice",
  },
  {
    icon: Car,
    title: "Travel with Driver",
    desc: "Comfortable travel with experienced, professional drivers. We provide safe and reliable cab services for all your travel needs.",
    highlight: "Professional Driver",
  },
  {
    icon: Bus,
    title: "Transport Services",
    desc: "Safe and reliable transport services for all your travel needs across India.",
    highlight: "24/7 Available",
  },
];

/* ═══════════════════════════════
   APP
═══════════════════════════════ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", phone: "", message: "" });
      toast.success("Your enquiry has been sent! We'll contact you shortly.");
    }, 1400);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-right" />

      {/* ══ HEADER ══ */}
      <header className="bg-navy py-4 px-6" id="home">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo + Brand */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold shadow-gold flex-shrink-0">
              <img
                src="/assets/uploads/IMG_20260322_054305-1.jpg"
                alt="Sharneshwar deity"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-white font-display text-xl md:text-2xl font-bold leading-tight">
                Shree Sharneshwar Travels
              </h1>
              <p className="text-gold text-xs md:text-sm font-medium tracking-wide">
                Your Trusted Travel Partner
              </p>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-white hover:text-gold transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ══ NAV ══ */}
      <nav className="sticky top-0 z-50 bg-foreground/90 backdrop-blur-sm shadow-navy">
        {/* Desktop */}
        <div className="max-w-7xl mx-auto px-6 hidden md:flex items-center gap-8 h-12">
          {NAV.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/80 hover:text-gold text-sm font-medium tracking-wide transition-colors"
              data-ocid="nav.link"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-auto px-5 py-1.5 rounded-full bg-gold text-foreground text-sm font-bold hover:opacity-90 transition-opacity"
            data-ocid="nav.primary_button"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-foreground px-6 py-4 flex flex-col gap-3"
          >
            {NAV.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-gold text-sm font-medium"
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-1 w-fit px-5 py-1.5 rounded-full bg-gold text-foreground text-sm font-bold"
              data-ocid="nav.primary_button"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </nav>

      <main>
        {/* ══ HERO ══ */}
        <section
          id="hero"
          className="hero-gradient relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/10" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full border border-gold/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mb-8 w-24 h-24 rounded-full overflow-hidden border-4 border-gold shadow-gold"
            >
              <img
                src="/assets/uploads/IMG_20260322_054305-1.jpg"
                alt="Sharneshwar deity"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="section-label mb-4"
            >
              Shree Sharneshwar Travels
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
            >
              Explore the World <span className="text-gold">with Us</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-5 text-white/75 text-lg max-w-xl mx-auto"
            >
              Comfortable and Affordable Travel Services across India and
              beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-gold text-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-gold"
                data-ocid="hero.primary_button"
              >
                Book Now
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold text-sm hover:border-gold hover:text-gold transition-colors"
                data-ocid="hero.secondary_button"
              >
                Our Services
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
          >
            <span className="text-xs tracking-widest uppercase font-sans">
              Scroll
            </span>
            <ChevronDown size={14} className="animate-bounce" />
          </motion.div>
        </section>

        {/* ══ SERVICES ══ */}
        <section id="services" className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-14">
              <p className="section-label mb-3">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Our Services
              </h2>
              <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map((svc, i) => (
                <FadeIn key={svc.title} delay={i * 0.12}>
                  <div
                    className="card-service bg-card rounded-2xl border border-border p-8 flex flex-col gap-4 h-full shadow-sm"
                    data-ocid={`services.item.${i + 1}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center shadow-navy flex-shrink-0">
                        <svc.icon size={26} className="text-white" />
                      </div>
                      <span className="text-xs font-bold text-gold bg-accent/10 border border-gold/30 rounded-full px-3 py-1">
                        {svc.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {svc.desc}
                    </p>
                    <a
                      href="#contact"
                      className="text-navy font-semibold text-sm hover:text-gold transition-colors self-start"
                      data-ocid={`services.item.${i + 1}`}
                    >
                      Enquire Now →
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <section id="about" className="py-24 px-6 bg-muted">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              {/* Image side */}
              <FadeIn delay={0.1}>
                <div className="relative flex justify-center">
                  <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-gold shadow-gold">
                    <img
                      src="/assets/uploads/IMG_20260322_054305-1.jpg"
                      alt="Sharneshwar deity temple"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative block */}
                  <div className="absolute -bottom-4 -right-4 md:-right-6 w-28 h-28 rounded-xl bg-navy flex flex-col items-center justify-center shadow-navy">
                    <span className="text-gold font-display font-bold text-2xl leading-none">
                      2+
                    </span>
                    <span className="text-white text-xs mt-1 text-center leading-tight">
                      Years
                      <br />
                      of Experience
                    </span>
                  </div>
                </div>
              </FadeIn>

              {/* Text side */}
              <FadeIn delay={0.2}>
                <p className="section-label mb-3">Who We Are</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-snug">
                  About <span className="text-navy">Shree Sharneshwar</span>{" "}
                  Travels
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Shree Sharneshwar Travels is a trusted travel agency with 2+
                  years of experience, providing quality travel and tour
                  services across India. Based in Sirohi, we offer comfortable
                  journeys with professional drivers for all your travel needs.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">
                      Founder
                    </p>
                    <p className="font-display font-semibold text-foreground">
                      Shaitan Singh Parmar
                    </p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">
                      CEO
                    </p>
                    <p className="font-display font-semibold text-foreground">
                      Urmila Parmar
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-display font-bold text-navy">
                      2+
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Years Experience
                    </p>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <p className="text-3xl font-display font-bold text-navy">
                      200+
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Destinations
                    </p>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <p className="text-3xl font-display font-bold text-navy">
                      98%
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Satisfaction Rate
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section className="bg-navy py-16 px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Plan Your Dream Journey?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Get in touch today and let us craft the perfect travel experience
              for you and your family.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-gold"
              data-ocid="cta.primary_button"
            >
              Contact Us Today
            </a>
          </FadeIn>
        </section>

        {/* ══ CONTACT ══ */}
        <section id="contact" className="py-24 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-14">
              <p className="section-label mb-3">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Contact Us
              </h2>
              <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
            </FadeIn>

            <div className="grid md:grid-cols-5 gap-12">
              {/* Form */}
              <FadeIn delay={0.1} className="md:col-span-3">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  data-ocid="contact.panel"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 transition"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 transition"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      Message / Travel Requirement
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="Describe your travel requirements…"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 transition resize-none"
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3.5 rounded-xl bg-navy text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 shadow-navy"
                    data-ocid="contact.submit_button"
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Send Enquiry
                      </>
                    )}
                  </motion.button>
                </form>
              </FadeIn>

              {/* Info cards */}
              <FadeIn delay={0.2} className="md:col-span-2 flex flex-col gap-5">
                <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                  <h3 className="font-display font-bold text-foreground text-lg mb-5">
                    Office Details
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                        <MapPin size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gold uppercase tracking-wide mb-0.5">
                          Office Location
                        </p>
                        <p className="text-foreground font-medium">
                          Sirohi, Rajasthan
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                        <Phone size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gold uppercase tracking-wide mb-0.5">
                          Phone
                        </p>
                        <a
                          href="tel:9001808314"
                          className="text-foreground font-medium hover:text-navy transition-colors"
                          data-ocid="contact.link"
                        >
                          9001808314
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                        <Mail size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gold uppercase tracking-wide mb-0.5">
                          Email
                        </p>
                        <p className="text-foreground font-medium">
                          sharneshwartravels@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-navy rounded-2xl shadow-navy">
                  <p className="text-gold font-bold font-display text-lg mb-2">
                    Shree Sharneshwar
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    2+ years of trusted travel and tour services. Let the
                    blessings of Sharneshwar guide your every journey.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* ══ FOOTER ══ */}
      <footer className="bg-navy-dark py-8 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold">
              <img
                src="/assets/uploads/IMG_20260322_054305-1.jpg"
                alt="Sharneshwar"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-display font-bold">
              Shree Sharneshwar Travels
            </span>
          </div>
          <p className="text-white/60 text-sm mb-1">
            © {new Date().getFullYear()} Shree Sharneshwar Travels. All rights
            reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

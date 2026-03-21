import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitMessage } from "@/hooks/useQueries";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  FileText,
  Loader2,
  Mail,
  Megaphone,
  Menu,
  MessageSquare,
  Share2,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Professional social media growth strategies for Instagram, Facebook, and other platforms.",
  },
  {
    icon: FileText,
    title: "Content Creation",
    desc: "Engaging posts, reels, graphics and content planning to build strong online presence.",
  },
  {
    icon: Megaphone,
    title: "Brand Promotion",
    desc: "Helping brands reach their audience using targeted marketing and digital campaigns.",
  },
  {
    icon: Briefcase,
    title: "Freelance Digital Services",
    desc: "Providing flexible freelance services for startups, creators, and businesses.",
  },
];

export default function AlphaFreelancePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const { mutateAsync, isPending } = useSubmitMessage();

  const handleNavClick = () => setMenuOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError("Please fill in all fields.");
      return;
    }
    try {
      await mutateAsync({
        name: form.name,
        email: form.email,
        messageText: form.message,
      });
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setFormError("Something went wrong. Please try again.");
    }
  };

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ─── Header ─── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-navy-deep/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-extrabold text-xl text-sky-accent tracking-tight sky-glow cursor-default">
            Alpha Freelance
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-ocid={`nav.${l.label.toLowerCase()}.link`}
                className="text-sm font-medium text-muted-foreground hover:text-sky-accent transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              data-ocid="nav.cta.button"
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-md bg-sky-accent text-navy-deep hover:opacity-90 transition-opacity"
            >
              Hire Me <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-foreground p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-navy-deep border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-ocid={`nav.mobile.${l.label.toLowerCase()}.link`}
                onClick={handleNavClick}
                className="text-sm font-medium text-muted-foreground hover:text-sky-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ─── Hero ─── */}
      <section
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        style={{
          backgroundImage: `url('/assets/generated/hero-bg.dim_1400x700.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-background/80" />
        {/* gradient overlay bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="anim-fade-up inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-accent border border-sky-accent/30 rounded-full px-3 py-1 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-accent animate-pulse" />
              Available for Projects
            </div>

            <h1 className="anim-fade-up-d1 font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-foreground mb-6">
              Freelance &amp; Social{" "}
              <span className="text-sky-accent sky-glow">Media Marketing</span>{" "}
              Solutions
            </h1>

            <p className="anim-fade-up-d2 text-lg text-body leading-relaxed mb-10 max-w-lg">
              Helping businesses grow online through modern marketing
              strategies, creative content, and professional freelance services.
            </p>

            <div className="anim-fade-up-d3 flex flex-wrap gap-4">
              <a
                href="#contact"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-sky-accent text-navy-deep font-bold text-base hover:opacity-90 active:scale-95 transition-all duration-150"
              >
                Work With Me <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-border text-foreground font-semibold text-base hover:border-sky-accent/50 hover:text-sky-accent transition-all duration-150"
              >
                View Services
              </a>
            </div>

            {/* Stats */}
            <div className="anim-fade-up mt-16 grid grid-cols-3 gap-6 max-w-sm">
              {[
                { val: "50+", label: "Clients Served" },
                { val: "3+", label: "Years Experience" },
                { val: "100%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display font-bold text-2xl text-sky-accent">
                    {s.val}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-widest text-sky-accent font-semibold mb-3">
              What I Offer
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
              My Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                data-ocid={`services.card.${i + 1}`}
                className="group bg-navy-card border border-border rounded-xl p-6 card-glow transition-all duration-300 cursor-default"
              >
                <div className="mb-5 w-11 h-11 rounded-lg bg-sky-accent/10 flex items-center justify-center group-hover:bg-sky-accent/20 transition-colors">
                  <svc.icon className="w-5 h-5 text-sky-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-24 bg-navy-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-accent font-semibold mb-3">
                About Me
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
                Anirudh Singh
              </h2>
              <p className="text-body leading-relaxed mb-4">
                Hello, my name is{" "}
                <strong className="text-foreground">Anirudh Singh</strong>,
                founder of{" "}
                <strong className="text-sky-accent">Alpha Freelance</strong>. I
                help businesses and personal brands grow online through smart
                digital marketing strategies and freelance services.
              </p>
              <p className="text-body leading-relaxed mb-8">
                I specialize in social media marketing, content creation, brand
                promotion, and flexible freelance digital services — delivering
                measurable results for startups, creators, and established
                businesses alike.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Social Media",
                  "Content Strategy",
                  "Brand Building",
                  "Digital Marketing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-sky-accent/10 text-sky-accent border border-sky-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-accent hover:underline"
                >
                  Get in touch <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="bg-background border border-border rounded-2xl p-8">
                <div className="w-20 h-20 rounded-full bg-sky-accent/10 border-2 border-sky-accent/30 flex items-center justify-center mb-5 mx-auto">
                  <span className="font-display font-bold text-3xl text-sky-accent">
                    AS
                  </span>
                </div>
                <h4 className="font-display font-semibold text-xl text-foreground text-center mb-1">
                  Anirudh Singh
                </h4>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  Founder, Alpha Freelance
                </p>

                <div className="space-y-3">
                  {[
                    { label: "Social Media Growth", pct: 95 },
                    { label: "Content Creation", pct: 90 },
                    { label: "Brand Strategy", pct: 88 },
                  ].map((skill) => (
                    <div key={skill.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-foreground font-medium">
                          {skill.label}
                        </span>
                        <span className="text-sky-accent">{skill.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-sky-accent rounded-full"
                          style={{ width: `${skill.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border flex justify-center gap-5">
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="text-muted-foreground hover:text-sky-accent transition-colors"
                  >
                    <SiInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="text-muted-foreground hover:text-sky-accent transition-colors"
                  >
                    <SiFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    className="text-muted-foreground hover:text-sky-accent transition-colors"
                  >
                    <SiLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* decorative corner accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-sky-accent/5 blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-sky-accent font-semibold mb-3">
              Get In Touch
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Work With Me
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Have a project in mind? Send a message and I&apos;ll get back to
              you within 24 hours.
            </p>
          </div>

          <div className="bg-navy-card border border-border rounded-2xl p-8 md:p-10">
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="text-center py-12 anim-scale-in"
              >
                <CheckCircle2 className="w-14 h-14 text-sky-accent mx-auto mb-5" />
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. I&apos;ll respond as soon as
                  possible.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="border-sky-accent/40 text-sky-accent hover:bg-sky-accent/10"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-foreground flex items-center gap-2"
                    >
                      <User className="w-3.5 h-3.5 text-sky-accent" /> Name
                    </Label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.name.input"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="bg-background border-border focus:border-sky-accent/60 focus:ring-sky-accent/20"
                      disabled={isPending}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-foreground flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5 text-sky-accent" /> Email
                    </Label>
                    <Input
                      id="contact-email"
                      data-ocid="contact.email.input"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="bg-background border-border focus:border-sky-accent/60 focus:ring-sky-accent/20"
                      disabled={isPending}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-foreground flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-sky-accent" />{" "}
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message.textarea"
                    placeholder="Tell me about your project or how I can help..."
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="bg-background border-border focus:border-sky-accent/60 focus:ring-sky-accent/20 resize-none"
                    disabled={isPending}
                  />
                </div>

                {formError && (
                  <p
                    data-ocid="contact.error_state"
                    className="text-sm text-destructive"
                  >
                    {formError}
                  </p>
                )}

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={isPending}
                  className="w-full bg-sky-accent text-navy-deep font-bold hover:opacity-90 transition-opacity h-12 text-base"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-navy-deep border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-display font-semibold text-sky-accent mb-0.5">
              Alpha Freelance
            </p>
            <p className="text-xs text-muted-foreground">
              © {year} Alpha Freelance | Anirudh Singh. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-muted-foreground hover:text-sky-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

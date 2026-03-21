import { Toaster } from "@/components/ui/sonner";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ArrowRight, ChevronDown, Mail, Menu, X } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import type { Mesh } from "three";

/* ─────────────────────────────────────────────
   3-D Sphere
───────────────────────────────────────────── */
function FloatingSphere() {
  const meshRef = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        Math.sin(clock.getElapsedTime() * 0.6) * 0.18;
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#7c3aed"
        roughness={0.1}
        metalness={0.6}
        emissive="#4f46e5"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

/* ─────────────────────────────────────────────
   Section Fade-In Wrapper
───────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
}: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Stats
───────────────────────────────────────────── */
const STATS = [
  { label: "Clients", value: "50+" },
  { label: "Projects", value: "120+" },
  { label: "Success Rate", value: "98%" },
  { label: "Years", value: "5+" },
];

/* ─────────────────────────────────────────────
   Services
───────────────────────────────────────────── */
const SERVICES = [
  {
    title: "Web Development",
    desc: "High-performance websites with modern tech stacks that load fast and convert visitors.",
    icon: "⚡",
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive interfaces and seamless experiences that users love to interact with.",
    icon: "🎨",
  },
  {
    title: "Graphic Design",
    desc: "Stunning visuals, illustrations, and design assets tailored to your brand identity.",
    icon: "✦",
  },
  {
    title: "Branding",
    desc: "Complete brand identity systems — logos, palettes, typography, and guidelines.",
    icon: "◈",
  },
];

/* ─────────────────────────────────────────────
   Portfolio
───────────────────────────────────────────── */
const PROJECTS = [
  {
    title: "Luxe Commerce",
    tag: "E-Commerce",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    title: "Momentum SaaS",
    tag: "Web App",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    title: "Verdant Studio",
    tag: "Branding",
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    title: "Pulse Analytics",
    tag: "Dashboard",
    gradient: "from-indigo-600 to-violet-600",
  },
  {
    title: "Nova Agency",
    tag: "Portfolio",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Apex Finance",
    tag: "Web Design",
    gradient: "from-fuchsia-600 to-purple-600",
  },
];

/* ─────────────────────────────────────────────
   Process
───────────────────────────────────────────── */
const PROCESS = ["Discover", "Design", "Develop", "Launch", "Grow"];

/* ─────────────────────────────────────────────
   Testimonials
───────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote:
      "Pamona completely transformed our online presence. The new site doubled our lead generation within 60 days.",
    name: "Sarah Mitchell",
    role: "CEO, Luxe Commerce",
    initials: "SM",
  },
  {
    quote:
      "Exceptional design sensibility and technical execution. The team delivered beyond every expectation we had.",
    name: "James Rivera",
    role: "Founder, Momentum SaaS",
    initials: "JR",
  },
  {
    quote:
      "Working with Pamona Freelance was the best investment we made. Professional, fast, and incredibly talented.",
    name: "Priya Kapoor",
    role: "CMO, Verdant Studio",
    initials: "PK",
  },
];

/* ─────────────────────────────────────────────
   NAV LINKS
───────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

/* ═════════════════════════════════════════════
   APP
═════════════════════════════════════════════ */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
      toast.success("Message sent! We'll be in touch soon.");
    }, 1400);
  }

  /* ── Loading Screen ── */
  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Animated logo mark */}
          <div className="relative w-20 h-20">
            <motion.div
              className="absolute inset-0 rounded-full gradient-bg opacity-20"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <div className="absolute inset-0 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-3xl font-bold text-white font-display">
                P
              </span>
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight gradient-text font-display">
            Pamona Freelance
          </h1>
          <motion.div
            className="w-40 h-0.5 rounded-full gradient-bg"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    );
  }

  /* ── Main App ── */
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-right" />

      {/* ── Navbar ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl font-bold gradient-text font-display tracking-tight"
            data-ocid="nav.link"
          >
            Pamona Freelance
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold rounded-full gradient-bg text-white hover:opacity-90 transition-opacity"
              data-ocid="nav.primary_button"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setMenuOpen(false)}
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
          {/* 3-D canvas */}
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1.2} />
              <pointLight
                position={[-10, -10, -5]}
                color="#4f46e5"
                intensity={0.8}
              />
              <FloatingSphere />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.8}
                enablePan={false}
              />
            </Canvas>
          </div>

          {/* Gradient overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />

          {/* Hero content */}
          <div className="relative z-10 max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full border border-border text-muted-foreground">
                Creative Digital Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl md:text-7xl font-bold leading-tight tracking-tight font-display purple-glow"
            >
              We Build{" "}
              <span className="gradient-text">Digital Experiences</span> That
              Drive Growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Creating websites is my passion — make my passion yours. Let's
              craft something extraordinary together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#portfolio"
                className="px-7 py-3.5 rounded-full gradient-bg text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                data-ocid="hero.primary_button"
              >
                View Our Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-colors"
                data-ocid="hero.secondary_button"
              >
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </motion.div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
                <div>
                  <p className="text-sm font-semibold tracking-widest uppercase text-purple-accent mb-3">
                    About Us
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold font-display">
                    Who We Are
                  </h2>
                </div>
                <p className="md:ml-auto max-w-md text-muted-foreground leading-relaxed">
                  Pamona Freelance is a creative digital agency focused on
                  building high-performance websites and stunning brand
                  identities. We combine design, technology, and strategy to
                  deliver results that matter.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-8 bg-card rounded-2xl border border-border text-center card-hover"
                    data-ocid={`about.item.${i + 1}`}
                  >
                    <h3 className="text-4xl font-bold font-display gradient-text">
                      {stat.value}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="py-28 px-6 bg-card">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold tracking-widest uppercase text-purple-accent mb-3">
                  What We Do
                </p>
                <h2 className="text-4xl md:text-5xl font-bold font-display">
                  Our Services
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((svc, i) => (
                <FadeIn key={svc.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.04, y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-8 bg-background rounded-2xl border border-border card-hover h-full"
                    data-ocid={`services.item.${i + 1}`}
                  >
                    <span className="text-3xl block mb-4">{svc.icon}</span>
                    <h3 className="text-lg font-semibold font-display mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {svc.desc}
                    </p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portfolio ── */}
        <section id="portfolio" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold tracking-widest uppercase text-purple-accent mb-3">
                  Our Work
                </p>
                <h2 className="text-4xl md:text-5xl font-bold font-display">
                  Portfolio
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, i) => (
                <FadeIn key={project.title} delay={(i % 3) * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`h-52 bg-gradient-to-br ${project.gradient} rounded-2xl flex flex-col items-start justify-end p-7 cursor-pointer overflow-hidden relative group`}
                    data-ocid={`portfolio.item.${i + 1}`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="relative z-10">
                      <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                        {project.tag}
                      </span>
                      <h3 className="text-lg font-bold text-white font-display mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-28 px-6 bg-card text-center">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest uppercase text-purple-accent mb-3">
                How We Work
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-14">
                Our Process
              </h2>
            </FadeIn>

            <div className="flex flex-wrap justify-center gap-4">
              {PROCESS.map((step, i) => (
                <FadeIn key={step} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ scale: 1.08, y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex items-center gap-3 px-7 py-3.5 rounded-full border border-border bg-background hover:border-primary/50 hover:bg-primary/5 cursor-default transition-colors"
                    data-ocid={`process.item.${i + 1}`}
                  >
                    <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="font-semibold">{step}</span>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold tracking-widest uppercase text-purple-accent mb-3">
                  Social Proof
                </p>
                <h2 className="text-4xl md:text-5xl font-bold font-display">
                  What Clients Say
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.12}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-8 bg-card rounded-2xl border border-border card-hover flex flex-col gap-6"
                    data-ocid={`testimonials.item.${i + 1}`}
                  >
                    <span className="text-4xl text-purple-accent leading-none">
                      &ldquo;
                    </span>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {t.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 px-6 text-center gradient-bg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                Let's Build Something Extraordinary
              </h2>
              <p className="text-white/80 mb-10 text-lg">
                Ready to take your digital presence to the next level? Let's
                talk.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 font-bold rounded-full hover:bg-white/90 transition-colors"
                data-ocid="cta.primary_button"
              >
                Start Your Project <ArrowRight size={18} />
              </a>
            </FadeIn>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="mb-12">
                <p className="text-sm font-semibold tracking-widest uppercase text-purple-accent mb-3">
                  Get In Touch
                </p>
                <h2 className="text-4xl md:text-5xl font-bold font-display">
                  Contact Us
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-3">
                <FadeIn delay={0.1}>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                    data-ocid="contact.panel"
                  >
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState((p) => ({
                            ...p,
                            message: e.target.value,
                          }))
                        }
                        placeholder="Tell us about your project…"
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
                        data-ocid="contact.textarea"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-xl gradient-bg text-white font-semibold disabled:opacity-60 transition-opacity flex items-center justify-center gap-2"
                      data-ocid="contact.submit_button"
                    >
                      {submitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message <ArrowRight size={16} />
                        </>
                      )}
                    </motion.button>
                  </form>
                </FadeIn>
              </div>

              <div className="md:col-span-2 flex flex-col gap-8">
                <FadeIn delay={0.2}>
                  <div className="p-8 bg-card rounded-2xl border border-border">
                    <h3 className="font-semibold font-display text-lg mb-4">
                      Reach Out Directly
                    </h3>
                    <a
                      href="mailto:pamonafreelance@gmail.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-ocid="contact.link"
                    >
                      <span className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                        <Mail size={14} className="text-white" />
                      </span>
                      pamonafreelance@gmail.com
                    </a>
                  </div>
                  <div className="p-8 bg-card rounded-2xl border border-border">
                    <h3 className="font-semibold font-display text-lg mb-2">
                      Response Time
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours on business days.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="py-10 text-center bg-card border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pamona Freelance. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/60">
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

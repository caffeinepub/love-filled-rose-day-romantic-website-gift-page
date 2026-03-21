import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const PETALS = [
  { left: 12, top: -5, delay: 0, duration: 15, size: 24 },
  { left: 28, top: -10, delay: 2.5, duration: 18, size: 32 },
  { left: 45, top: -3, delay: 5, duration: 16, size: 20 },
  { left: 60, top: -8, delay: 1.2, duration: 22, size: 28 },
  { left: 75, top: -6, delay: 7, duration: 17, size: 36 },
  { left: 88, top: -2, delay: 3.8, duration: 20, size: 22 },
  { left: 35, top: -15, delay: 9, duration: 19, size: 26 },
  { left: 55, top: -12, delay: 4.5, duration: 23, size: 30 },
];

export default function FloatingPetals() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(/assets/generated/rose-petal-pattern.dim_1024x1024.png)",
          backgroundSize: "512px 512px",
          backgroundRepeat: "repeat",
        }}
      />

      {PETALS.map((petal) => (
        <div
          key={`petal-${petal.left}-${petal.delay}`}
          className="absolute animate-float"
          style={{
            left: `${petal.left}%`,
            top: `${petal.top}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <div
            className="text-rose-accent/20"
            style={{ fontSize: `${petal.size}px` }}
          >
            ❤
          </div>
        </div>
      ))}
    </div>
  );
}

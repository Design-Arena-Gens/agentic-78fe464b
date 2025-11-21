const palette = [
  {
    name: "Pure White",
    hex: "#FFFFFF",
    description: "Base canvas for clarity + couture minimalism.",
  },
  {
    name: "Ink Black",
    hex: "#050505",
    description: "High-contrast anchors for precision detailing.",
  },
  {
    name: "Deep Charcoal",
    hex: "#1C1B1A",
    description: "Editorial tone for luxury balance.",
  },
  {
    name: "Soft Gold",
    hex: "#C9A97A",
    description: "Signature metallic sheen for couture finish.",
  },
  {
    name: "Warm Gray",
    hex: "#B6AEA4",
    description: "Technical neutrality to ground the palette.",
  },
  {
    name: "Technical Silver",
    hex: "#D8DADD",
    description: "Fashion-tech interface cue with subtle luminescence.",
  },
];

const typography = {
  serif: {
    title: "ITAFCOUTURE — The Artisans of Future Couture",
    body: "Our couture-grade patterns fuse heritage ateliers with algorithmic precision, elevating every stitch into an intelligent line of code.",
  },
  sans: {
    title: "Design Intelligence",
    body: "Modular construction standards, calibrated fit data, and atelier-certified workflows engineered for visionary makers.",
  },
};

const textures = [
  {
    title: "Matte Atelier Paper",
    description: "Warm off-white stock for drafting couture silhouettes.",
  },
  {
    title: "Gold Foil Emboss",
    description: "Ultra-fine metallic detailing for certificates + seals.",
    className: "texture-gold",
  },
  {
    title: "Technical Grid",
    description: "Precision plotting grid for CAD garment calibrations.",
    className: "texture-dark",
  },
  {
    title: "Microline Stitch",
    description: "Subtle tonal lines emulating couture stitchwork.",
  },
];

const patterns = [
  {
    title: "Patternline Atlas",
    subtitle: "Contour mapping for signature silhouettes.",
    className: "",
  },
  {
    title: "Bias Flow",
    subtitle: "Diagonal drape schematics for movement studies.",
    className: "pattern-curve",
  },
  {
    title: "Calibration Grid",
    subtitle: "Technical gauge for garment fit intelligence.",
    className: "pattern-grid",
  },
];

const imagery = [
  {
    title: "Editorial Atelier",
    gradient:
      "linear-gradient(120deg, rgba(10,10,10,1) 15%, rgba(40,40,40,0.65) 55%, rgba(120,120,120,0.2) 100%)",
  },
  {
    title: "Architectural Light",
    gradient:
      "linear-gradient(140deg, rgba(12,12,12,1) 0%, rgba(50,50,50,0.7) 48%, rgba(200,200,200,0.18) 100%)",
  },
  {
    title: "Technical Draping",
    gradient:
      "linear-gradient(160deg, rgba(5,5,5,1) 20%, rgba(60,60,60,0.74) 60%, rgba(210,210,210,0.24) 100%)",
  },
];

export default function Home() {
  return (
    <main className="brandboard-grid min-h-screen bg-[var(--background)] px-6 py-12 text-[var(--color-foreground)] md:px-10 lg:px-16">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[28px] border border-black/5 bg-white/65 p-8 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.6)] backdrop-blur-xl md:p-12">
        <header className="flex flex-col gap-8 border-b border-black/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.65em] text-black/55">
              Brandboard
            </p>
            <h1
              className="mt-4 text-4xl font-medium uppercase tracking-[0.55em] text-[var(--color-charcoal)] md:text-5xl"
              style={{ fontFamily: "var(--font-couture-serif)" }}
            >
              ITAFCOUTURE
            </h1>
          </div>
          <div className="flex flex-col gap-2 text-sm md:text-right">
            <span className="uppercase tracking-[0.42em] text-black/70">
              Couture Pattern Intelligence
            </span>
            <span className="text-black/60">
              Timeless luxury. Minimalist precision. Fashion-tech mastery.
            </span>
          </div>
        </header>

        <section className="grid gap-8 md:grid-cols-[1.6fr_1fr] md:items-start">
          <div className="rounded-[24px] border border-black/5 bg-white/80 p-10 shadow-md shadow-black/5">
            <h2 className="text-xs uppercase tracking-[0.6em] text-black/45">
              Primary Logo
            </h2>
            <div className="mt-8">
              <p className="text-[0.65rem] uppercase tracking-[0.65em] text-black/40">
                Couture Wordmark
              </p>
              <div className="mt-6 flex items-end gap-5">
                <div
                  className="text-[clamp(2.5rem,5vw,4.8rem)] leading-none text-[var(--color-charcoal)]"
                  style={{ fontFamily: "var(--font-couture-serif)" }}
                >
                  ITAF
                </div>
                <div className="flex flex-col leading-none text-[var(--color-ink-black)]">
                  <span
                    className="text-[clamp(2.25rem,4.5vw,4rem)] font-light tracking-[0.65em]"
                    style={{ fontFamily: "var(--font-couture-sans)" }}
                  >
                    COUTURE
                  </span>
                  <span className="mt-3 text-[0.65rem] uppercase tracking-[0.7em] text-black/60">
                    Maison Digitale
                  </span>
                </div>
              </div>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/60">
                The wordmark fuses a high-contrast couture serif with a
                calibrated sans extension, balancing heritage grace with
                algorithmic rigor. Ultra-thin hairlines deliver a sense of
                precision-cut metal.
              </p>
            </div>
          </div>
          <div className="rounded-[24px] border border-black/8 bg-gradient-to-b from-white via-[#f7f5f2] to-[#ebe6dd] p-10 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.8)]">
            <h2 className="text-xs uppercase tracking-[0.6em] text-black/45">
              Monogram
            </h2>
            <div className="mt-10 flex flex-col items-center gap-6">
              <div className="relative h-40 w-40 rounded-[34px] border border-black/10 bg-white shadow-[0_30px_90px_-50px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-6 rounded-[28px] border border-black/15 bg-gradient-to-br from-white to-[#f0e8db] backdrop-blur-sm" />
                <span
                  className="absolute inset-0 flex items-center justify-center text-5xl tracking-[0.3em] text-[var(--color-charcoal)]"
                  style={{ fontFamily: "var(--font-couture-serif)" }}
                >
                  I
                  <span
                    className="ml-4 text-[var(--color-soft-gold)]"
                    style={{ fontFamily: "var(--font-couture-sans)" }}
                  >
                    C
                  </span>
                </span>
                <div className="absolute left-1/2 top-[22%] h-[60%] w-px -translate-x-1/2 bg-gradient-to-b from-[var(--color-soft-gold)] via-black/40 to-transparent" />
                <div className="absolute inset-8 rounded-[26px] border border-black/10" />
              </div>
              <p className="text-center text-sm text-black/60">
                Geometric interlock referencing pattern drafting rulers with a
                luminous gold accent for couture certification.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="col-span-full">
            <h2 className="text-xs uppercase tracking-[0.6em] text-black/45">
              Color Palette
            </h2>
          </div>
          {palette.map((tone) => (
            <div
              key={tone.name}
              className="flex flex-col gap-4 rounded-[22px] border border-black/5 bg-white/90 p-6 shadow-sm shadow-black/10"
            >
              <div
                className="h-24 rounded-[18px] border border-black/10"
                style={{ backgroundColor: tone.hex }}
              />
              <div>
                <p className="text-xs uppercase tracking-[0.55em] text-black/45">
                  {tone.name}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.5em] text-black/30">
                  {tone.hex}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  {tone.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
          <div className="rounded-[26px] border border-black/6 bg-white/90 p-10 shadow-[0_22px_70px_-45px_rgba(0,0,0,0.6)]">
            <h2 className="text-xs uppercase tracking-[0.6em] text-black/45">
              Typography System
            </h2>
            <div className="mt-10 flex flex-col gap-10">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.6em] text-black/35">
                  Serif — Playfair Display
                </p>
                <h3
                  className="mt-6 text-3xl font-medium leading-snug tracking-[0.12em] text-[var(--color-charcoal)] md:text-4xl"
                  style={{ fontFamily: "var(--font-couture-serif)" }}
                >
                  {typography.serif.title}
                </h3>
                <p
                  className="mt-4 text-sm leading-relaxed text-black/60"
                  style={{ fontFamily: "var(--font-couture-serif)" }}
                >
                  {typography.serif.body}
                </p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.6em] text-black/35">
                  Sans — Work Sans
                </p>
                <h3
                  className="mt-6 text-2xl font-semibold uppercase tracking-[0.55em] text-[var(--color-ink-black)]"
                  style={{ fontFamily: "var(--font-couture-sans)" }}
                >
                  {typography.sans.title}
                </h3>
                <p
                  className="mt-4 text-sm leading-relaxed text-black/58"
                  style={{ fontFamily: "var(--font-couture-sans)" }}
                >
                  {typography.sans.body}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[26px] border border-black/6 bg-white/85 p-10 shadow-inner shadow-black/10">
            <h2 className="text-xs uppercase tracking-[0.6em] text-black/45">
              Brand Voice Keywords
            </h2>
            <div className="mt-8 grid gap-4 text-[0.8rem] uppercase tracking-[0.4em] text-black/55">
              <div className="rounded-full border border-black/10 bg-white px-6 py-4 text-center">
                Algorithmic Couture
              </div>
              <div className="rounded-full border border-black/10 bg-white px-6 py-4 text-center">
                Atelier Intelligence
              </div>
              <div className="rounded-full border border-black/10 bg-white px-6 py-4 text-center">
                Precision Minimalism
              </div>
              <div className="rounded-full border border-black/10 bg-white px-6 py-4 text-center">
                Timeless Innovation
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="col-span-full">
            <h2 className="text-xs uppercase tracking-[0.6em] text-black/45">
              Textures &amp; Materials
            </h2>
          </div>
          {textures.map((texture) => (
            <div
              key={texture.title}
              className={`texture-card ${texture.className ?? ""}`}
            >
              <p className="text-[0.65rem] uppercase tracking-[0.55em] text-black/40">
                {texture.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black/65">
                {texture.description}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="col-span-full">
            <h2 className="text-xs uppercase tracking-[0.6em] text-black/45">
              Brand Patterns
            </h2>
          </div>
          {patterns.map((pattern) => (
            <div
              key={pattern.title}
              className={`pattern-line ${pattern.className ?? ""} flex min-h-[220px] flex-col justify-end bg-white/80 p-6`}
            >
              <div className="relative z-10">
                <p className="text-[0.65rem] uppercase tracking-[0.6em] text-black/45">
                  {pattern.title}
                </p>
                <p className="mt-2 text-sm text-black/65">{pattern.subtitle}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="col-span-full">
            <h2 className="text-xs uppercase tracking-[0.6em] text-black/45">
              Imagery Direction
            </h2>
          </div>
          {imagery.map((shot) => (
            <div
              key={shot.title}
              className="imagery-card"
              style={{ backgroundImage: shot.gradient }}
            >
              <span>{shot.title}</span>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

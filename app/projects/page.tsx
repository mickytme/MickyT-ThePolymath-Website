export default function ProjectPage() {
  const projects = [
    {
      name: "Alchemist",
      category: "Western Astrology",
      status: "Preparing for Release",
      description:
        "Alchemist is a modern Western astrology application designed to explore birth charts, planets, aspects, houses, and transits through a clean and intuitive interface.",
      platforms: [
        {
          name: "Android",
          status: "Preparing for Release",
          active: true,
        },
        {
          name: "iOS",
          status: "In Development",
          active: false,
        },
        {
          name: "macOS",
          status: "In Development",
          active: false,
        },
      ],
      highlights: [
        "Western astrology birth charts",
        "Planet and house analysis",
        "Aspect calculations and orbs",
        "Transit analysis and forecasting",
        "Modern, clean interface",
      ],
      featured: true,
    },
    {
      name: "VedicSage",
      category: "Vedic Astrology",
      status: "In Development",
      description:
        "VedicSage is my Vedic astrology project, focused on exploring traditional Vedic astrology calculations and presenting them through a modern digital experience.",
      platforms: [
        {
          name: "Android",
          status: "In Development",
          active: false,
        },
        {
          name: "iOS",
          status: "In Development",
          active: false,
        },
        {
          name: "macOS",
          status: "In Development",
          active: false,
        },
      ],
      highlights: [
        "Vedic astrology calculations",
        "Birth chart analysis",
        "Sidereal astrology",
        "Planetary positions",
        "Traditional astrology concepts",
      ],
      featured: false,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-950 text-white">
      {/* =====================================================
          Hero
      ====================================================== */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 sm:text-base sm:tracking-[0.4em]">
              Projects
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight sm:mt-6 sm:text-5xl lg:text-6xl">
              Things I&apos;m Building.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8">
              I&apos;m building astrology applications across multiple
              platforms, combining traditional astrological systems with
              modern software and thoughtful user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          Current Focus
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-6 sm:p-8 lg:p-10">
          <div className="absolute right-6 top-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
            Current Focus
          </div>

          <div className="max-w-3xl pr-0 sm:pr-32">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Current Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Alchemist for Android
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              My current focus is preparing the Android version of Alchemist
              for publication. The application is being refined, tested, and
              prepared for its first public release.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-300">
                Android
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-300">
                Western Astrology
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-300">
                Preparing for Release
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          Projects
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <div className="mb-10 sm:mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            What I&apos;m Building
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Current Projects
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            These projects explore different astrological traditions while
            bringing them into modern software experiences.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`relative overflow-hidden rounded-3xl border p-6 sm:p-8 lg:p-10 ${
                project.featured
                  ? "border-cyan-500/30 bg-cyan-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {/* Project Number */}

              <div className="absolute right-6 top-6 text-sm font-medium tracking-widest text-gray-600 sm:right-8 sm:top-8">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Header */}

              <div className="pr-12">
                <div className="flex flex-wrap items-center gap-3">
                  <p
                    className={`text-sm uppercase tracking-[0.2em] ${
                      project.featured
                        ? "text-cyan-400"
                        : "text-gray-500"
                    }`}
                  >
                    {project.category}
                  </p>

                  {project.featured && (
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
                      Current Focus
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-3xl font-bold sm:text-4xl">
                    {project.name}
                  </h3>

                  <span
                    className={`w-fit rounded-full px-3 py-1.5 text-sm font-medium ${
                      project.featured
                        ? "bg-green-500/20 text-green-300"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Description */}

              <p className="mt-6 max-w-4xl text-base leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-8">
                {project.description}
              </p>

              {/* Platforms */}

              <div className="mt-8 sm:mt-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Platforms
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.platforms.map((platform) => (
                    <span
                      key={platform.name}
                      className={`rounded-full px-3 py-1.5 text-sm ${
                        platform.active
                          ? "bg-cyan-400/10 text-cyan-300"
                          : "bg-white/5 text-gray-500"
                      }`}
                    >
                      {platform.name} · {platform.status}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}

              <div className="mt-8 sm:mt-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  What I&apos;m Working On
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          project.featured
                            ? "bg-cyan-400"
                            : "bg-gray-500"
                        }`}
                      />

                      <span className="text-sm leading-6 text-gray-400 sm:text-base">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}

              <div
                className={`mt-8 border-t pt-6 sm:mt-10 ${
                  project.featured
                    ? "border-cyan-400/10"
                    : "border-white/10"
                }`}
              >
                <p className="text-sm leading-6 text-gray-500">
                  Project {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          Closing
      ====================================================== */}

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <p className="text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            These projects are continuously evolving as I experiment with
            astrology, software development, and new ways of presenting
            complex information through technology.
          </p>
        </div>
      </section>
    </main>
  );
}
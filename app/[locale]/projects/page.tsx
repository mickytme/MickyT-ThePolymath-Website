"use client";

import { useTranslations } from "next-intl";

export default function ProjectPage() {
  const t = useTranslations("Projects");

  const projects = [
    {
      name: "Alchemist",
      category: t("alchemist.category"),
      status: t("alchemist.status"),
      description: t("alchemist.description"),

      platforms: [
        {
          name: "Android",
          status: t("alchemist.platforms.android"),
          active: true,
        },
        {
          name: "iOS",
          status: t("alchemist.platforms.ios"),
          active: false,
        },
        {
          name: "macOS",
          status: t("alchemist.platforms.macos"),
          active: false,
        },
      ],

      highlights: [
        t("alchemist.highlights.birthCharts"),
        t("alchemist.highlights.planetHouseAnalysis"),
        t("alchemist.highlights.aspectCalculations"),
        t("alchemist.highlights.transitAnalysis"),
        t("alchemist.highlights.modernInterface"),
      ],

      featured: true,
    },

    {
      name: "VedicSage",
      category: t("vedicSage.category"),
      status: t("vedicSage.status"),
      description: t("vedicSage.description"),

      platforms: [
        {
          name: "Android",
          status: t("vedicSage.platforms.android"),
          active: false,
        },
        {
          name: "iOS",
          status: t("vedicSage.platforms.ios"),
          active: false,
        },
        {
          name: "macOS",
          status: t("vedicSage.platforms.macos"),
          active: false,
        },
      ],

      highlights: [
        t("vedicSage.highlights.vedicCalculations"),
        t("vedicSage.highlights.birthChartAnalysis"),
        t("vedicSage.highlights.siderealAstrology"),
        t("vedicSage.highlights.planetaryPositions"),
        t("vedicSage.highlights.traditionalConcepts"),
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
              {t("hero.eyebrow")}
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight sm:mt-6 sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8">
              {t("hero.description")}
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
            {t("currentFocus.badge")}
          </div>

          <div className="max-w-3xl pr-0 sm:pr-32">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              {t("currentFocus.eyebrow")}
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              {t("currentFocus.title")}
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              {t("currentFocus.description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-300">
                Android
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-300">
                {t("alchemist.category")}
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-300">
                {t("alchemist.status")}
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
            {t("list.eyebrow")}
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            {t("list.title")}
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            {t("list.description")}
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
                      {t("currentFocus.badge")}
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
                  {t("labels.platforms")}
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
                  {t("labels.highlights")}
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
                  {t("labels.project")}{" "}
                  {String(index + 1).padStart(2, "0")}
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
            {t("closing")}
          </p>
        </div>
      </section>
    </main>
  );
}
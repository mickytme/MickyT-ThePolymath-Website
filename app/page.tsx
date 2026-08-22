import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-12 text-center md:px-8 md:py-16">

        {/* Role */}
        <p className="mb-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
          Software Engineer • Astrologer • Researcher • AI Developer
        </p>

        {/* Name
            Hidden below 768px.
            Visible from 768px and above. */}
        <h1 className="text-6xl font-extrabold max-[767px]:hidden md:text-8xl">
          Micky T
        </h1>

        {/* Subtitle */}
        <h2 className="mt-2 text-2xl font-light text-cyan-400 sm:text-3xl md:text-5xl">
          The Polymath
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
          I explore the intersection of science, technology,
          philosophy, and astrology to create meaningful
          software and discover new ways of understanding
          the universe.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400">
            Explore My Work
          </button>

          <button className="rounded-xl border border-gray-700 px-8 py-4 transition hover:border-cyan-500 hover:text-cyan-400">
            About Me
          </button>
        </div>

        {/* Fields */}
        <div className="mt-16 grid w-full gap-6 sm:mt-20 md:grid-cols-2 lg:mt-24 lg:grid-cols-4">

          {/* Astrology */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 text-5xl">♈</div>

            <h3 className="text-xl font-semibold">
              Astrology
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Building modern astrology software with Swiss
              Ephemeris and advanced chart analysis.
            </p>
          </div>

          {/* Software */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 text-5xl">💻</div>

            <h3 className="text-xl font-semibold">
              Software
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Android, iOS, Web, AI and cross-platform
              application development.
            </p>
          </div>

          {/* Artificial Intelligence */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 text-5xl">🧠</div>

            <h3 className="text-xl font-semibold">
              Artificial Intelligence
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Exploring intelligent systems that augment
              creativity, knowledge, and decision making.
            </p>
          </div>

          {/* Research */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 text-5xl">📚</div>

            <h3 className="text-xl font-semibold">
              Research
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Continuous learning across philosophy,
              psychology, mathematics, and the natural
              sciences.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
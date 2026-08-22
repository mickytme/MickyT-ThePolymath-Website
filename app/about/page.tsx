export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">

        <p className="text-cyan-400 uppercase tracking-[0.3em]">
          About Me
        </p>

        <h1 className="mt-6 text-5xl font-extrabold md:text-7xl">
          I'm Micky,
          <br />
          <span className="text-cyan-400">
            a Modern Polymath.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          I believe that innovation happens where different disciplines meet.
          My work combines software engineering, artificial intelligence,
          astrology, philosophy, mathematics, and lifelong learning to build
          tools that help people better understand themselves and the world.
        </p>

      </section>


      {/* Philosophy */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="mb-10 text-4xl font-bold">
          My Philosophy
        </h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">

          <p className="text-lg leading-8 text-gray-300">
            Throughout history, great thinkers rarely confined themselves to a
            single field. Leonardo da Vinci united art and engineering.
            Isaac Newton explored physics, mathematics, and philosophy.
            Today's world increasingly rewards people who can connect ideas
            across disciplines rather than remain within one specialty.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            I strive to continue that tradition by integrating technology,
            science, and the humanities into practical software and meaningful
            research.
          </p>

        </div>

      </section>


      {/* Disciplines */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="mb-10 text-4xl font-bold">
          Areas of Expertise
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              icon: "💻",
              title: "Software Engineering",
              text: "Building applications across Android, Web, and modern frameworks."
            },
            {
              icon: "♈",
              title: "Astrology",
              text: "Developing professional astrology software powered by Swiss Ephemeris."
            },
            {
              icon: "🤖",
              title: "Artificial Intelligence",
              text: "Exploring AI systems that enhance creativity and knowledge."
            },
            {
              icon: "📐",
              title: "Mathematics",
              text: "Applying mathematical thinking to algorithms and problem solving."
            },
            {
              icon: "📚",
              title: "Research",
              text: "Continuously studying science, psychology, and philosophy."
            },
            {
              icon: "🚀",
              title: "Innovation",
              text: "Connecting ideas from multiple disciplines to create unique products."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-500 hover:bg-cyan-500/5"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* Mission */}

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">

        <h2 className="text-4xl font-bold">
          My Mission
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
          To bridge science, technology, and human understanding through
          thoughtful software, interdisciplinary research, and continuous
          exploration. I aim to create tools that are both technically
          sophisticated and genuinely useful.
        </p>

      </section>

    </main>
  );
}
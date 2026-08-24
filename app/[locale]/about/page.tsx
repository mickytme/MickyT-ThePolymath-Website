import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("About");

  const areas = [
    {
      icon: "💻",
      title: t("areas.software.title"),
      text: t("areas.software.description"),
    },
    {
      icon: "♈",
      title: t("areas.astrology.title"),
      text: t("areas.astrology.description"),
    },
    {
      icon: "🤖",
      title: t("areas.ai.title"),
      text: t("areas.ai.description"),
    },
    {
      icon: "📐",
      title: t("areas.mathematics.title"),
      text: t("areas.mathematics.description"),
    },
    {
      icon: "📚",
      title: t("areas.research.title"),
      text: t("areas.research.description"),
    },
    {
      icon: "🚀",
      title: t("areas.innovation.title"),
      text: t("areas.innovation.description"),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* =====================================================
          Hero
      ====================================================== */}

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="uppercase tracking-[0.3em] text-cyan-400">
          {t("hero.label")}
        </p>

        <h1 className="mt-6 text-5xl font-extrabold md:text-7xl">
          {t("hero.title")}
          <br />
          <span className="text-cyan-400">
            {t("hero.titleHighlight")}
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          {t("hero.description")}
        </p>
      </section>

      {/* =====================================================
          Philosophy
      ====================================================== */}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold">
          {t("philosophy.title")}
        </h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <p className="text-lg leading-8 text-gray-300">
            {t("philosophy.paragraph1")}
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t("philosophy.paragraph2")}
          </p>
        </div>
      </section>

      {/* =====================================================
          Areas of Expertise
      ====================================================== */}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold">
          {t("areas.title")}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((item) => (
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

      {/* =====================================================
          Mission
      ====================================================== */}

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">
          {t("mission.title")}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
          {t("mission.description")}
        </p>
      </section>
    </main>
  );
}
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  const email = "micky_ti@outlook.com";

  const contactMethods = [
    {
      icon: "✉️",
      title: t("methods.email.title"),
      description: t("methods.email.description"),
      value: email,
      href: `mailto:${email}`,
      action: t("methods.email.action"),
    },
    {
      icon: "💻",
      title: t("methods.github.title"),
      description: t("methods.github.description"),
      value: t("methods.github.value"),
      href: "#",
      action: t("methods.github.action"),
    },
    {
      icon: "🔗",
      title: t("methods.social.title"),
      description: t("methods.social.description"),
      value: t("methods.social.value"),
      href: "#",
      action: t("methods.social.action"),
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
              {t("hero.label")}
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
          Contact Methods
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500/40 hover:bg-cyan-500/5 sm:p-8"
            >
              {/* Icon */}

              <div className="text-4xl transition group-hover:scale-105">
                {method.icon}
              </div>

              {/* Title */}

              <h2 className="mt-5 text-2xl font-bold">
                {method.title}
              </h2>

              {/* Description */}

              <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
                {method.description}
              </p>

              {/* Value */}

              <div className="mt-6 break-all text-sm font-semibold text-cyan-400 transition group-hover:text-cyan-300 sm:text-base">
                {method.value}
              </div>

              {/* Action */}

              <div className="mt-2 text-sm text-gray-500">
                {method.action}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* =====================================================
          Bottom Message
      ====================================================== */}

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <p className="text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            {t("bottomMessage")}
          </p>
        </div>
      </section>
    </main>
  );
}
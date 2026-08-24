import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default async function Navbar() {
  const t = await getTranslations("Navigation");

  return (
    <header className="border-b border-white/10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            shrink-0
            text-xl
            font-bold
            text-white
            transition-colors
            hover:text-cyan-400
          "
        >
          Micky T
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <Link
            href="/"
            className="
              text-sm
              font-medium
              text-gray-400
              transition-colors
              hover:text-cyan-400
              sm:text-base
            "
          >
            {t("home")}
          </Link>

          <Link
            href="/projects"
            className="
              text-sm
              font-medium
              text-gray-400
              transition-colors
              hover:text-cyan-400
              sm:text-base
            "
          >
            {t("projects")}
          </Link>

          <Link
            href="/software"
            className="
              text-sm
              font-medium
              text-gray-400
              transition-colors
              hover:text-cyan-400
              sm:text-base
            "
          >
            {t("software")}
          </Link>

          <Link
            href="/about"
            className="
              text-sm
              font-medium
              text-gray-400
              transition-colors
              hover:text-cyan-400
              sm:text-base
            "
          >
            {t("about")}
          </Link>

          <Link
            href="/contact"
            className="
              text-sm
              font-medium
              text-gray-400
              transition-colors
              hover:text-cyan-400
              sm:text-base
            "
          >
            {t("contact")}
          </Link>

          {/* Language */}
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="border-b border-white/10">
      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          flex-wrap
          items-center
          justify-between
          px-4
          py-4
          sm:px-6
          sm:py-5
          md:px-8
        "
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="
            shrink-0
            text-lg
            font-bold
            text-black
            transition-colors
            hover:text-cyan-400
            sm:text-xl
          "
        >
          Micky T
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex lg:gap-8">
          <Link
            href="/"
            className="
              text-sm
              font-medium
              text-gray-400
              transition-colors
              hover:text-cyan-400
              lg:text-base
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
              lg:text-base
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
              lg:text-base
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
              lg:text-base
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
              lg:text-base
            "
          >
            {t("contact")}
          </Link>

          <LanguageSwitcher />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />

          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-md
              text-gray-400
              transition-colors
              hover:bg-white/5
              hover:text-cyan-400
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400/50
            "
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`
                  h-0.5
                  w-5
                  rounded-full
                  bg-current
                  transition-transform
                  duration-200
                  ${
                    menuOpen
                      ? "translate-y-2 rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-0.5
                  w-5
                  rounded-full
                  bg-current
                  transition-opacity
                  duration-200
                  ${
                    menuOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              <span
                className={`
                  h-0.5
                  w-5
                  rounded-full
                  bg-current
                  transition-transform
                  duration-200
                  ${
                    menuOpen
                      ? "-translate-y-2 -rotate-45"
                      : ""
                  }
                `}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`
            w-full
            overflow-hidden
            transition-all
            duration-200
            md:hidden
            ${
              menuOpen
                ? "mt-4 max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="border-t border-white/10 pt-3">
            <div className="flex flex-col">
              <Link
                href="/"
                onClick={closeMenu}
                className="
                  rounded-md
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-gray-400
                  transition-colors
                  hover:bg-white/5
                  hover:text-cyan-400
                  sm:text-base
                "
              >
                {t("home")}
              </Link>

              <Link
                href="/projects"
                onClick={closeMenu}
                className="
                  rounded-md
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-gray-400
                  transition-colors
                  hover:bg-white/5
                  hover:text-cyan-400
                  sm:text-base
                "
              >
                {t("projects")}
              </Link>

              <Link
                href="/software"
                onClick={closeMenu}
                className="
                  rounded-md
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-gray-400
                  transition-colors
                  hover:bg-white/5
                  hover:text-cyan-400
                  sm:text-base
                "
              >
                {t("software")}
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="
                  rounded-md
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-gray-400
                  transition-colors
                  hover:bg-white/5
                  hover:text-cyan-400
                  sm:text-base
                "
              >
                {t("about")}
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="
                  rounded-md
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-gray-400
                  transition-colors
                  hover:bg-white/5
                  hover:text-cyan-400
                  sm:text-base
                "
              >
                {t("contact")}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
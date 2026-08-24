"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
  {
    code: "en",
    label: "EN",
    icon: "/icons/english.png",
  },
  {
    code: "th",
    label: "TH",
    icon: "/icons/thai.png",
  },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage =
    languages.find((language) => language.code === locale) ??
    languages[0];

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLocale = event.target.value;

    router.replace(pathname, {
      locale: newLocale,
    });
  };

  return (
    <div className="relative flex shrink-0 items-center">
      <label
        htmlFor="language-switcher"
        className="sr-only"
      >
        Select language
      </label>

      <select
        id="language-switcher"
        value={locale}
        onChange={handleLanguageChange}
        className="
          cursor-pointer
          appearance-none
          bg-transparent
          py-1
          pr-6
          text-sm
          font-medium
          text-gray-400
          outline-none
          transition-colors
          hover:text-cyan-400
          focus:text-cyan-400
          sm:pr-8
          sm:text-base
        "
        aria-label="Select language"
      >
        {languages.map((language) => (
          <option
            key={language.code}
            value={language.code}
            className="bg-slate-950 text-white"
          >
            {language.label}
          </option>
        ))}
      </select>

      {/* Language icon */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          flex
          -translate-y-1/2
          items-center
        "
      >
        <Image
          src={currentLanguage.icon}
          alt=""
          width={18}
          height={18}
          className="
            h-4
            w-4
            object-contain
            sm:h-5
            sm:w-5
          "
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
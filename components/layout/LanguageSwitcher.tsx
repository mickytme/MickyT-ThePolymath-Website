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
    <div className="relative flex items-center">
      <label
        htmlFor="language-switcher"
        className="sr-only"
      >
        Select language
      </label>

      {/* Language selector */}
      <select
        id="language-switcher"
        value={locale}
        onChange={handleLanguageChange}
        className="
          cursor-pointer
          appearance-none
          bg-transparent
          py-1
          pr-8
          text-sm
          font-medium
          text-gray-300
          outline-none
          transition-colors
          hover:text-cyan-400
          focus:text-cyan-400
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

      {/* PNG language icon */}
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
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
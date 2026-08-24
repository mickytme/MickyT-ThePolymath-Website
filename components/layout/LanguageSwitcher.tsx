"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
  {
    code: "en",
    label: "EN",
  },
  {
    code: "th",
    label: "TH",
  },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLocale = event.target.value;

    router.replace(pathname, {
      locale: newLocale,
    });
  };

  return (
    <div className="relative">
      <label htmlFor="language-switcher" className="sr-only">
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
          pr-5
          text-sm
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

      {/* Small dropdown arrow */}
      <span
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          text-xs
          text-gray-500
        "
      >
        ▾
      </span>
    </div>
  );
}
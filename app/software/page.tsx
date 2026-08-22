"use client";

import { useState } from "react";
import { Software } from "@/types/software";

import {
  FaWindows,
  FaApple,
  FaAndroid,
  FaChrome,
} from "react-icons/fa";

import { SiIos } from "react-icons/si";

// ============================================================
// Platform Icon
// ============================================================

function PlatformIcon({
  platform,
}: {
  platform: string;
}) {
  switch (platform) {
    case "Windows":
      return <FaWindows className="text-4xl" />;

    case "macOS":
      return <FaApple className="text-4xl" />;

    case "iOS":
      return <SiIos className="text-4xl" />;

    case "Android":
      return <FaAndroid className="text-4xl" />;

    case "Web":
      return <FaChrome className="text-4xl" />;

    default:
      return null;
  }
}

// ============================================================
// Software Page
// ============================================================

export default function SoftwarePage() {
  const software: Software[] = [
    {
      id: "alchemist",
      icon: "♈",
      name: "Alchemist",

      description:
        "A professional Western Astrology platform featuring high-precision chart calculations, beautiful chart rendering, AI-powered interpretation, and cross-platform support.",

      released: "July 31, 2026",
      status: "Stable",

      releaseNotes: "#",
      github: "#",

      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Swift",
        "SwiftUI",
        "Swiss Ephemeris",
        "AI",
      ],

      // ======================================================
      // Keep ALL platforms here.
      //
      // Windows, macOS and iOS are temporarily hidden
      // from the UI below.
      // ======================================================

      platforms: [
        {
          name: "Windows",
          version: "1.0.0",
          size: "85 MB",
          requirements: "Windows 10 / 11 64-bit",
          download: "#",
        },
        {
          name: "macOS",
          version: "1.0.0",
          size: "72 MB",
          requirements: "macOS 14+ Apple Silicon / Intel",
          download: "#",
        },
        {
          name: "iOS",
          version: "1.0.0",
          size: "120 MB",
          requirements: "iOS 17+",
          download: "#",
        },
        {
          name: "Android",
          version: "1.0.0",
          size: "24.8 MB",
          requirements: "Android 15+",

          // APK file inside:
          // public/downloads/alchemist-1.0.0.apk
          download: "/downloads/alchemist-1.0.0.apk",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-950 text-white">
      {/* =====================================================
          Hero
      ====================================================== */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 sm:text-base sm:tracking-[0.4em]">
            Software Library
          </p>

          <h1 className="mt-5 text-4xl font-black sm:mt-6 sm:text-5xl lg:text-6xl">
            Software
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-gray-400 sm:mt-8 sm:text-lg">
            Applications and tools created by Micky T.
          </p>
        </div>
      </section>

      {/* =====================================================
          Software List
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="space-y-8 sm:space-y-10">
          {software.map((app) => (
            <SoftwareCard
              key={app.id}
              app={app}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

// ============================================================
// Software Card
// ============================================================

function SoftwareCard({
  app,
}: {
  app: Software;
}) {
  // ==========================================================
  // TEMPORARY PLATFORM VISIBILITY
  //
  // Keep all platforms in app.platforms, but only show
  // Android in the UI for now.
  //
  // Later, simply change this to:
  //
  // const visiblePlatforms = app.platforms;
  //
  // ==========================================================

  const visiblePlatforms = app.platforms.filter(
    (item) => item.name === "Android"
  );

  // ==========================================================
  // Initial selected platform
  // ==========================================================

  const defaultPlatform =
    visiblePlatforms.find(
      (item) => item.name === "Android"
    ) ?? visiblePlatforms[0];

  const [platform, setPlatform] = useState(defaultPlatform);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 lg:p-10">
      {/* =====================================================
          Header
      ====================================================== */}

      <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
        {/* App Icon */}

        <div className="flex shrink-0 items-start">
          <div className="text-5xl sm:text-6xl">
            {app.icon}
          </div>
        </div>

        {/* App Information */}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {app.name}
            </h2>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-300 sm:px-4">
              {app.status}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            {app.description}
          </p>
        </div>
      </div>

      {/* =====================================================
          Platform Selector
      ====================================================== */}

      <div className="mt-10 sm:mt-12">
        <h3 className="mb-5 text-lg font-semibold sm:text-xl">
          Download For
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:max-w-xs sm:gap-5">
          {visiblePlatforms.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setPlatform(item)}
              className={`
                flex min-h-[120px]
                flex-col items-center justify-center
                rounded-2xl border
                px-6 py-6
                text-center
                transition
                sm:min-h-[140px]
                ${
                  platform?.name === item.name
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                    : "border-white/10 bg-black hover:border-cyan-500"
                }
              `}
            >
              <PlatformIcon platform={item.name} />

              <div className="mt-4 font-semibold">
                {item.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* =====================================================
          Download Information
      ====================================================== */}

      {platform && (
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-4">
          {/* Version */}

          <InfoCard
            title="Version"
            value={platform.version}
          />

          {/* Size */}

          <InfoCard
            title="Size"
            value={platform.size}
          />

          {/* Requirement */}

          <InfoCard
            title="Requirement"
            value={platform.requirements}
          />

          {/* Download Button */}

          <a
            href={platform.download}
            download
            className="
              flex min-h-[72px] w-full
              items-center justify-center
              rounded-xl
              bg-cyan-500
              px-5 py-4
              text-center
              text-sm font-bold
              leading-5
              text-black
              transition
              hover:bg-cyan-400
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
              focus:ring-offset-2
              focus:ring-offset-slate-950
              sm:min-h-[100%]
              sm:text-base
            "
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
}

// ============================================================
// Information Card
// ============================================================

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex min-h-[72px] flex-col justify-center rounded-2xl border border-white/10 bg-black/30 p-4 sm:min-h-[100px] sm:p-5">
      <p className="text-xs uppercase tracking-wide text-gray-500 sm:text-sm">
        {title}
      </p>

      <p className="mt-2 break-words text-sm font-semibold leading-5 sm:text-base">
        {value}
      </p>
    </div>
  );
}
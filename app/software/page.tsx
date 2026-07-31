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
          requirements: "Android 10+",
          download: "#",
        },
      ],
    },
  ];


  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-950 text-white">

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <p className="uppercase tracking-[0.4em] text-cyan-400">
            Software Library
          </p>

          <h1 className="mt-6 text-6xl font-black">
            Software
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
            Applications and tools created by Micky the Polymath.
          </p>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="space-y-10">

          {software.map((app)=>(
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



function SoftwareCard({
  app,
}:{
  app: Software
}) {


  const [platform,setPlatform] =
    useState(app.platforms[0]);


  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 p-10">


      {/* Header */}

      <div className="flex gap-6">

        <div className="text-6xl">
          {app.icon}
        </div>


        <div>

          <div className="flex items-center gap-4">

            <h2 className="text-4xl font-bold">
              {app.name}
            </h2>


            <span className="rounded-full bg-green-500/20 px-4 py-1 text-green-300">
              {app.status}
            </span>

          </div>


          <p className="mt-4 text-gray-400">
            {app.description}
          </p>

        </div>


      </div>



      {/* Platform Selector */}

      <div className="mt-12">

        <h3 className="mb-5 text-xl font-semibold">
          Download For
        </h3>


        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">


          {app.platforms.map((item)=>(

            <button
              key={item.name}
              onClick={()=>setPlatform(item)}
              className={`
                flex flex-col items-center justify-center
                rounded-2xl border p-6 transition
                ${
                  platform.name === item.name
                  ?
                  "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                  :
                  "border-white/10 bg-black hover:border-cyan-500"
                }
              `}
            >

              <PlatformIcon
                platform={item.name}
              />

              <div className="mt-4 font-semibold">
                {item.name}
              </div>


            </button>

          ))}


        </div>

      </div>



      {/* Download Info */}

      <div className="mt-10 grid gap-5 md:grid-cols-4">


        <InfoCard
          title="Version"
          value={platform.version}
        />


        <InfoCard
          title="Size"
          value={platform.size}
        />


        <InfoCard
          title="Requirement"
          value={platform.requirements}
        />


        <a
          href={platform.download}
          className="
            flex items-center justify-center
            rounded-xl bg-cyan-500
            font-bold text-black
            transition hover:bg-cyan-400
          "
        >
          Download {platform.name}
        </a>


      </div>


    </div>

  );
}



function InfoCard({
 title,
 value
}:{
 title:string;
 value:string;
}){

 return (

  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">

    <p className="text-sm uppercase text-gray-500">
      {title}
    </p>

    <p className="mt-2 font-semibold">
      {value}
    </p>

  </div>

 );

}
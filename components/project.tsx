"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="relative min-h-screen text-white overflow-hidden"
    >
      {/* GLOBAL WRAPPER */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16">

        {/* BIG TITLE */}
        <h1
          className="
            font-sans font-light tracking-wide
            text-center lg:text-left
            text-[56px] sm:text-[80px] md:text-[140px] lg:text-[240px]
            leading-none opacity-90
          "
        >
          MASTERPIECE
        </h1>

        {/* CONTENT */}
        <div className="mt-8 lg:mt-5">

          {/* TOP PROJECT */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24 items-start">

            {/* LEFT – MINI PROJECT */}
            <div className="flex flex-col items-center lg:items-start">
              <Link
                href="https://github.com/Variski/balcade-kick-co.git"
                target="_blank"
                className="group block w-full max-w-[220px] space-y-4"
              >
                <div className="relative w-full h-[220px] overflow-hidden bg-[#111] transition-transform durcdation-500 group-hover:scale-[1.04]">
                  <Image
                    src="/r4.png"
                    alt="Balcade Kick Co"
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                    <span className="px-4 py-2 border border-white/40 text-sm tracking-wide">
                      View on GitHub
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-center lg:text-left">
                  <p className="text-base font-semibold tracking-wide">
                    Balcade Kick Co
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Skateboard shoe e-commerce app built with React Native,
                    NativeWind, PHP REST API, and MySQL.
                  </p>
                </div>
              </Link>
            </div>

            {/* RIGHT – CAROUSEL */}
            <div className="lg:col-span-3 lg:-mr-24">
              <div
                className="
                  flex gap-6 sm:gap-8 lg:gap-12
                  overflow-x-auto snap-x snap-mandatory
                  pb-10 pt-4 scrollbar-hide
                  lg:translate-x-77
                "
              >
                {["/r1.png", "/r2.png", "/r3.png"].map((img, index) => (
                  <div
                    key={index}
                    className="snap-start shrink-0 w-[180px] sm:w-[200px] lg:w-[220px] space-y-3"
                  >
                    <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[220px] overflow-hidden bg-[#111] transition-transform hover:scale-[1.04]">
                      <Image
                        src={img}
                        alt="Coming Soon"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>

                    <div className="text-center lg:text-left">
                      <p className="text-base font-semibold tracking-wide">
                        Coming Soon
                      </p>
                      <p className="text-sm text-white/60">-</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* WEB SHOWCASE */}
<div className="mt-10 sm:mt-32 lg:mt-20 space-y-32 flex flex-col items-center">

  {/* ZOMBIE SKATESHOP */}
  <div className="w-full max-w-[1100px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left">

      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden">
        <Image
          src="/r5.png"
          alt="Zombie Skateshop"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide">
          Zombie <span className="text-purple-900">Skateshop</span>
        </h2>

        <p className="text-white/60 leading-relaxed text-sm sm:text-base">
          The SkateVibe Shop website is a simple e-commerce platform built using HTML, CSS,
          and PHP to sell various skateboard equipment.
        </p>

        <Link
          href="https://variski.github.io/UTS/"
          target="_blank"
          className="
            inline-block px-6 py-2
            border border-white/30
            text-sm tracking-wide
            text-white/70
            hover:text-white hover:border-white
            rounded-md transition
          "
        >
          Live Site →
        </Link>
      </div>

    </div>
  </div>

  {/* UI UX DESIGN */}
  <div className="w-full max-w-[1100px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left">

      <div className="space-y-6 max-w-lg mx-auto lg:mx-0 order-2 lg:order-1">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide">
          UI <span className="text-purple-900">Web Design</span>
        </h2>

        <p className="text-white/60 leading-relaxed text-sm sm:text-base">
          UI Web Profile design created using Figma with a minimalist monochromatic theme.
        </p>

        <Link
          href="https://www.figma.com/design/SE4NME6EU4GncGISbHeCts/Web-Profile-Terbaru"
          target="_blank"
          className="
            inline-block px-6 py-2
            border border-white/30
            text-sm tracking-wide
            text-white/70
            hover:text-white hover:border-white
            rounded-md transition
          "
        >
          View on Figma →
        </Link>
      </div>

      <div className="relative w-full h-[280px] sm:h-[360px] lg:w-[420px] lg:h-[420px] order-1 lg:order-2 overflow-hidden">
        <Image
          src="/r6.png"
          alt="UI UX Design"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

    </div>
  </div>

</div>


        </div>
      </div>
    </section>
  );
}

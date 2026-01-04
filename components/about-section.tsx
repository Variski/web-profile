"use client";

import Image from "next/image";
import codeBg from "@/public/codingpixel.gif";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen text-white"
    >
      {/* DIVIDER */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] ">
        <hr className="border-white/20" />
      </div>

      <h2 className="text-2xl font-semibold ml-32 mt-10 text-[#757575]">About</h2>
      {/* CONTENT */}
      <div className=" container mx-auto px-2 pt-20 grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
        {/* IMAGE (LEFT) */}
        <div className="hidden md:block">
          <Image
            src={codeBg}
            alt="Code visual"
            className="w-auto h-175 rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* TEXT (RIGHT) */}
        <div className="space-y-20 max-w-xl ml-0 md:ml-30">

          {/* ABOUT */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-white/60">
              About
            </h2>

            <p className="text-base leading-relaxed text-white/80">
              I am Deva Helal Eka Variski, an undergraduate Informatics student at
              Universitas Pembangunan Nasional &quot;Veteran&quot; Jawa Timur.
              Passionate about crafting seamless digital experiences, I
              specialize in UI/UX Design and Web Development, blending aesthetic
              intuition with technical precision.
            </p>
          </div>

          {/* APPROACH */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-white/60">
              Approach Angle
            </h2>

            <p className="text-base leading-relaxed text-white/80">
              We turn ideas into intuitive, visually stunning experiences that
              perfectly balance aesthetics, usability, and performance. By
              bridging the gap between design and development, we merge clean
              code with pixel-perfect UI/UX to bring your digital vision to life.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

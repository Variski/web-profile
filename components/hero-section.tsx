"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import fotoDeva from "@/public/miaw.png";
import icon from "@/public/icon1.svg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen text-white pt-20 overflow-hidden">
      {/* BACKGROUND ICON */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={icon}
          alt="Background Icon"
          width={450}
          height={450}
          className="absolute left-1/2 -translate-x-1/2 top-10 md:top-20 "
        />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 relative grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* IMAGE */}
        <div
          className="
            relative z-10
            flex justify-center md:justify-end
            order-1 md:order-2
          "
        >
          <Image
            src={fotoDeva}
            alt="Deva"
            width={500}
            height={650}
            className="scale-75 sm:scale-85 md:scale-110"
            priority
          />
        </div>

        {/* TEXT */}
        <div
          className="
            relative z-20
            mt-6 md:mt-20
            text-center md:text-left
            order-2 md:order-1
          "
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            HI, I’M DEVA, A CREATIVE{" "}
            <span className="text-purple-800">UI/UX DESIGNER AND</span> <br />
            PROGRAMMER
          </h1>

          <ul className="mt-6 space-y-2 text-white/80">
                <li className="flex gap-10 justify-center md:justify-start">
                    <span>• UI/UX Designer</span>
                    <span>• Mobile Developer</span>
                </li>

                <li className="flex justify-center md:justify-start">
                    <span>• Web Developer</span>
                </li>
                </ul>



          {/* BUTTON (HIDDEN ON MOBILE) */}
          <div className="mt-8 hidden sm:flex gap-4 justify-center md:justify-start">
            <Button className="bg-purple-800 font-semibold">
              My Project
            </Button>
            <Button
              variant="bordered"
              className="text-white border-white/30"
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none">
        
        <Image
          src={icon}
          alt="Background Icon"
          width={300}
          height={300}
          className="absolute bottom-20 md:bottom-1 "
        />
      </div>

      </div>
    </section>
  );
}

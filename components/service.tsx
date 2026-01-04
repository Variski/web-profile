"use client";

import { Palette, Smartphone, Monitor } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description:
      "I help businesses create intuitive and aesthetically pleasing digital experiences that put users first. From in-depth user research to interactive prototypes, I design solutions that don’t just look beautiful — they solve real problems and deliver measurable results.",
    icon: Palette,
  },
  {
    title: "Mobile Developer",
    description:
      "I help businesses and startups turn ideas into powerful, user-friendly software. My goal is to build digital products that not only work smoothly but also make a real difference for the people who use them.",
    icon: Smartphone,
  },
  {
    title: "Web Developer",
    description:
      "I help businesses and individuals build fast, modern, and high-performance websites — from company profiles to full-scale web applications. With a solution-focused approach, I combine clean code and responsive design to create smooth and engaging digital experiences.",
    icon: Monitor,
  },
];

export default function ServiceSection() {
  return (
    <section
      id="service"
      aria-labelledby="services-heading"
      className="relative min-h-screen text-white"
    >
      {/* DIVIDER */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%]">
        <hr className="border-white/20" />
      </div>

      {/* ⬇️ PERUBAHAN UTAMA DI SINI */}
      <div className="mx-auto px-6 pt-20 max-w-[1400px]">
        {/* SMALL TITLE */}
        <p className="text-center text-lg md:text-2xl font-semibold mb-4 text-[#757575]">
          Services
        </p>

        {/* MAIN TITLE */}
        <h2
          id="services-heading"
          className="
            font-sans
            text-3xl md:text-5xl
            leading-tight
            mb-4 md:mb-6
             md:text-left
          "
        >
          HERE ARE THE SERVICES WE ARE <br /> PROVIDING TO YOU
        </h2>

        {/* DESCRIPTION */}
        <p className="text-[#757575] text-base md:text-xl max-w-5xl">
          We provide end-to-end digital solutions tailored to your goals — from
          sleek UI/UX design and powerful web development to reliable software
          solutions. With our expertise, we ensure every project is not only
          functional and efficient but also delivers an exceptional and
          memorable user experience.
        </p>

        {/* SERVICES GRID / CAROUSEL */}
        <div
          className="
            mt-14 md:mt-20
            flex gap-6 overflow-x-auto pb-6
            snap-x snap-mandatory
            md:grid md:grid-cols-3 md:gap-10 md:overflow-visible
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="
                  snap-center
                  min-w-[85%] sm:min-w-[70%] md:min-w-0
                  bg-[#E5E5E5] text-black
                  rounded-3xl
                  p-5 md:p-6
                  min-h-[380px] md:min-h-[440px]
                  flex flex-col
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                "
              >
                {/* ICON + TITLE */}
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <Icon
                    size={22}
                    className="md:size-[30px]"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg md:text-2xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm md:text-base text-[#757575] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

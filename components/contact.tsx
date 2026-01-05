"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Github } from "lucide-react";
import icon3 from "@/public/icon3.svg";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen text-white overflow-hidden"
    >
      {/* FRAME BORDER */}
      <div className="absolute inset-6 pointer-events-none z-10" />

      {/* BACKGROUND ICON */}
      <div className="absolute -top-24 -right-24 lg:-top-5 lg:-right-5 opacity-20 pointer-events-none z-0">
        <Image
          src={icon3}
          alt="Decorative Icon"
          width={600}
          height={600}
          className="select-none"
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 py-24 flex flex-col justify-between min-h-screen">

        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT – TITLE */}
          <h1
            className="
              font-sans font-light tracking-wide
              text-[56px] sm:text-[80px] md:text-[120px] lg:text-[100px]
              leading-tight
            "
          >
            LET’S DEVELOP
            <br />
            YOUR IDEA
          </h1>

          {/* RIGHT – EMAIL */}
          <div className="flex flex-col gap-4 max-w-md lg:ml-auto">
            <span className="text-sm text-white/50">
              Keep Your Idea Fresh
            </span>

            <div className="flex border border-white/30">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="
                  flex-1 bg-transparent px-4 py-3
                  text-sm text-white
                  placeholder:text-white/40
                  outline-none
                "
              />
              <button
                className="
                  px-6 py-3
                  bg-white text-black
                  text-sm tracking-wide
                  hover:bg-white/90 transition
                "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-end mt-24">

          {/* SOCIAL */}
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/deva-helal-eka-variski-b6087028b/" 
            className="
            w-14 h-14
            flex items-center justify-center
            rounded-full
            bg-[#757575]
            hover:bg-purple-800
            transition
            social-btn
            ">
              <Linkedin size={20} />
            </Link>
            <Link href="https://www.instagram.com/varis.ki?igsh=MTNrcXdybm84d2prdg==" className="
            w-14 h-14
            flex items-center justify-center
            rounded-full
            bg-[#757575]
            hover:bg-purple-800
            transition
            social-btn">
              <Instagram size={20} />
            </Link>
            <Link href="https://github.com/Variski" className="
            w-14 h-14
            flex items-center justify-center
            rounded-full
            bg-[#757575]
            hover:bg-purple-800
            transition
            social-btn">
              <Github size={20} />
            </Link>
          </div>
          {/* MENU */}
          <div className="space-y-2 text-xl">
            <Link href="/" className="border-b border-white/30 w-fit">Home <br /></Link>
            <Link href="#about" className="border-b border-white/30 w-fit">About <br /></Link>
            <Link href="#service" className="border-b border-white/30 w-fit">Service <br/></Link>
            <Link href="#project" className="border-b border-white/30 w-fit">Portfolio<br/></Link>
            <Link href="https://drive.google.com/file/d/1kOM761NjYkq-ohzlCSTIH41FwnGhM8HT/view?usp=drive_link" className="border-b border-white/30 w-fit">Resume<br/></Link>
          </div>

          {/* CONTACT */}
          <div className="text-xl space-y-2">
            <p className="text-white/50">Phone</p>
            <p className="border-b border-white/30 w-fit">
              +62-831-7490-2200
            </p>

            <p className="text-white/50 mt-4">Mail</p>
            <p className="border-b border-white/30 w-fit">
              variskid@gmail.com
            </p>
          </div>

          {/* LOCATION */}
          <div className="text-xl">
            <p className="text-white/50">Location</p>
            <p className="border-b border-white/30 w-fit">
              Surabaya, Indonesia
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between text-sm text-white/40">
          <span className="mt-4 sm:mt-0">
            © 2025 Deva
          </span>
        </div>
      </div>
    </section>
  );
}

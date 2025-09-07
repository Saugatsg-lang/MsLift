"use client";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-start" // 🔹 Changed h-[70vh] → h-screen
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Images/Homepic.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center" // 🔹 Ensures full image fills screen
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/30" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
          Innovation In <br /> Motion
        </h1>
        <p className="mt-4 text-lg text-gray-200">Seamless, Safe and Smart</p>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-blue-900 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-blue-800 transition"
          >
            Watch Video
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
            <video
              src="/Images/Liftvideo.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

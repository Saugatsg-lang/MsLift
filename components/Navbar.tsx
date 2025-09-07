"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebook, FaTiktok, FaLinkedin, FaInstagram  } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaLocationPinLock } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFlagPanel, setShowFlagPanel] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  const baseW = "w-[190px] sm:w-[220px] md:w-[260px]";

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about-us" },
    { name: "Our Products", href: "#our-products" },
    { name: "Our Services", href: "#our-services" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      let currentSection = menuItems[0].href;

      menuItems.forEach((item) => {
        const el = document.querySelector(item.href);
        if (el && el instanceof HTMLElement) {
          if (scrollPos >= el.offsetTop) {
            currentSection = item.href;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
      <div className="relative">
        {/* Sidebar Logo Overlay */}
        <div
          className={`absolute inset-y-0 left-0 ${baseW} z-40 bg-gray-100 shadow flex items-center justify-center px-3 sm:px-4`}
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/Images/MSL.png"
              alt="MS Elevators Logo"
              width={150}
              height={70}
              className="object-contain"
              priority
            />
          </Link>
        </div>

       {/* Top Bar */}
<div className="relative z-10 bg-[#111] text-white text-sm py-2 px-6 flex flex-wrap justify-end items-center gap-4">
  {/* 📞 First Number (always visible) */}
  <a
    href="tel:+9779858037010"
    className="flex items-center space-x-2 text-white hover:text-[rgb(255,165,0)] transition-colors duration-300"
  >
    <FiPhone className="text-lg" />
    <span className="text-sm">+977-9858037010</span>
  </a>

  {/* 📞 Second Number (hidden on mobile, only md+ screens) */}
  <a
    href="tel:+9779858033010"
    className="hidden md:flex items-center space-x-2 text-white hover:text-[rgb(255,165,0)] transition-colors duration-300"
  >
    <FiPhone className="text-lg" />
    <span className="text-sm">+977-9858033010</span>
  </a>

  {/* 📧 Email (always visible) */}
  <a
    href="mailto:ms.elevators080@gmail.com"
    className="flex items-center space-x-2 text-white hover:text-[rgb(255,165,0)] transition-colors duration-300"
  >
    <FiMail className="text-lg" />
    <span className="text-sm">ms.elevators080@gmail.com</span>
  </a>
</div>


        {/* Navbar */}
        <nav className="relative z-10 bg-white text-gray-800 border-t border-gray-200">
          <div
            className={`container mx-auto flex items-center px-6 py-4 ${baseW.replaceAll(
              "w-",
              "pl-"
            )}`}
          >
            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-8 font-semibold text-lg">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    activeSection === item.href
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-[rgba(30,58,138,0.8)] to-[rgba(30,58,138,0.3)]"
                      : "text-black hover:text-gray-700"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center ml-auto">
              {/* Flag on Desktop only */}
              <button
                onClick={() => setShowFlagPanel(!showFlagPanel)}
                className="hidden md:block ml-20 mr-10"
                aria-label="Open country panel"
              >
                <Image
                  src="/Images/Nepal.jpg"
                  alt="Nepal Flag"
                  width={60}
                  height={40}
                  priority
                />
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`ml-4 md:hidden p-2 rounded-md border border-gray-300 transition-colors duration-300 ${
                  isOpen
                    ? "bg-[dodgerblue] text-white"
                    : "hover:bg-gray-200 active:bg-[dodgerblue] active:text-white"
                }`}
              >
                {isOpen ? (
                  <X size={26} className="transition transform rotate-90" />
                ) : (
                  <Menu size={26} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown */}
{isOpen && (
  <div className="md:hidden bg-gradient-to-r from-[rgba(30,58,138,0.8)] to-[rgba(30,58,138,0.3)] text-white flex flex-col items-center space-y-4 py-6">
    {menuItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        onClick={() => {
          setActiveSection(item.href);
          setIsOpen(false);
        }}
        className={`text-lg font-medium transition-colors duration-300 ${
          activeSection === item.href
            ? "text-[dodgerblue] font-semibold"
            : "hover:text-[dodgerblue]"
        }`}
      >
        {item.name}
      </a>
    ))}
  </div>
)}


      {/* Flag Left Panel (already coded by you, unchanged) */}
     {/* Flag Left Panel (only in Hero page) */}
      {pathname === "/" && showFlagPanel && (
        <div className="fixed top-0 left-0 w-80 h-full bg-[#2A2A2A] text-white shadow-lg z-50 overflow-y-auto">
          <div className="p-6">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
              onClick={() => setShowFlagPanel(false)}
            >
              <X size={24} />
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/Images/MSL.png"
                alt="MS Elevators Logo"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>

            {/* About Us Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-[#444]">
                About Us
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                MS Elevators, based in Nepalgunj, Nepal, is a leading provider of innovative elevator and escalator solutions. Specializing in design, supply, installation, testing, commissioning, and maintenance, they deliver high-quality, durable lift systems for residential, commercial, hotel, office, educational, and healthcare facilities. With advanced technology, localized expertise, and a skilled team, MS Elevators ensures safe, efficient mobility and exceptional customer service.
              </p>
            </div>

            {/* Contact Info Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-[#444]">
                CONTACT INFO
              </h2>
              <div className="text-sm text-gray-300 space-y-3">
                <p className="flex items-start">
                  <FaLocationPinLock className="text-blue-400 mr-2 mt-1" />
                  <span>Ganapur-06, Banke, Lumbini Province, Nepalgunj, Nepal</span>
                </p>
                <p className="flex items-center">
                  <FiPhone className="text-green-400 mr-2" />
                  <a href="tel:+9779858037010" className="hover:text-blue-400">
                    +977-9858037010
                  </a>
                </p>
                <p className="flex items-center">
                  <FiPhone className="text-green-400 mr-2" />
                  <a href="tel:+9779858033010" className="hover:text-blue-400">
                    +977-9858033010
                  </a>
                </p>
                <p className="flex items-center">
                  <FiMail className="text-red-400 mr-2" />
                  <a href="mailto:ms.elevators080@gmail.com" className="hover:text-blue-400">
                    ms.elevators080@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-[#444]">
                Contact
              </h2>

              <div className="mb-6">
                <h3 className="font-semibold text-white mb-1">Make a Call</h3>
                <p className="text-xs text-gray-400 italic mb-3">Keeping you always better connected.</p>
                <div className="text-sm text-gray-300 space-y-2">
                  <p className="flex items-center">
                    <FiPhone className="text-green-400 mr-2" />
                    <a href="tel:+9779858037010" className="hover:text-blue-400">
                      +977-9858037010
                    </a>
                  </p>
                  <p className="flex items-center">
                    <FiPhone className="text-green-400 mr-2" />
                    <a href="tel:+9779858033010" className="hover:text-blue-400">
                      +977-9858033010
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-1">Send Email</h3>
                <p className="text-xs text-gray-400 italic mb-3">Drop us a mail we will answer you asap.</p>
                <div className="text-sm text-blue-400 space-y-2">
                  <p className="flex items-center">
                    <FiMail className="text-red-400 mr-2" />
                    <a href="mailto:ms.elevators080@gmail.com" className="hover:text-blue-300">
                      ms.elevators080@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
<div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-[#444]">
  {/* Facebook */}
  <Link
    href="https://www.facebook.com/profile.php?id=61555643740369"
    target="_blank"
    className="w-10 h-10 flex items-center justify-center bg-white text-blue-600 rounded-lg shadow hover:bg-blue-600 hover:text-white transition-all duration-300"
  >
    <FaFacebook size={24} />
  </Link>

  {/* TikTok */}
  <Link
    href="https://www.tiktok.com/@ms.elevators?_t=ZS-8zRK6eTWV9R&_r=1"
    target="_blank"
    className="w-10 h-10 flex items-center justify-center rounded-lg shadow text-white transition-all duration-300"
    style={{
      background: "linear-gradient(135deg, #69C9D0, #EE1D52)", // TikTok gradient
    }}
  >
    <FaTiktok size={24} />
  </Link>

  {/* Instagram */}
  <Link
    href="https://www.instagram.com/ms.elevators080/"
    target="_blank"
    className="w-10 h-10 flex items-center justify-center rounded-lg shadow text-white transition-all duration-300"
    style={{
      background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", // Instagram gradient
    }}
  >
    <FaInstagram size={24} />
  </Link>
</div>

          </div>
        </div>
      )}


    </header>
  );
}

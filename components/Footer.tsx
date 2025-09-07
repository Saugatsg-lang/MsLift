"use client"
import Image from "next/image";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-900 border-t-2 border-gray-500">

      {/* Top Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div className="flex flex-col items-start">
          <Image
            src="/Images/MSL.png"
            alt="MS Elevators Logo"
            width={150}
            height={80}
            className="mb-4"
          />
          <p className="mt-2 text-gray-600 text-base sm:text-lg leading-relaxed">
            MS Elevators is a leading manufacturer and supplier of modern,
            reliable, and energy-efficient elevators. Focused on comfort,
            safety, and quality service.
          </p>

          {/* Social Links */}
<div className="flex space-x-4 mt-6">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61555643740369"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center bg-white text-blue-900 rounded-lg shadow-lg 
               hover:bg-blue-900 hover:text-white transform hover:scale-110 transition-all duration-300"
  >
    <FaFacebook size={28} />
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@ms.elevators?_t=ZS-8zRK6eTWV9R&_r=1"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 text-white"
    style={{
      background: "linear-gradient(135deg, #69C9D0, #EE1D52)", // TikTok gradient
    }}
  >
    <FaTiktok size={28} />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/ms.elevators080/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 text-white"
    style={{
      background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", // Instagram gradient
    }}
  >
    <FaInstagram size={28} />
  </a>
</div>

        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li><a href="#home" className="hover:text-red-500">Home</a></li>
            <li><a href="#about-us" className="hover:text-red-500">About Us</a></li>
            <li><a href="#our-products" className="hover:text-red-500">Our Products</a></li>
            <li><a href="#our-services" className="hover:text-red-500">Our Services</a></li>
            <li><a href="#career" className="hover:text-red-500">Career</a></li>
            <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        {/* Our Products */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Our Products</h3>
          <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg text-gray-700">
            <li><a href="#our-products" className="hover:text-red-500">Passenger Lift</a></li>
            <li><a href="#our-products" className="hover:text-red-500">Hospital Lift</a></li>
            <li><a href="#our-products" className="hover:text-red-500">Capsule Lift</a></li>
            <li><a href="#our-products" className="hover:text-red-500">Home Lift</a></li>
            <li><a href="#our-products" className="hover:text-red-500">Hydraulic Lift</a></li>
            <li><a href="#our-products" className="hover:text-red-500">Car Lift</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-base sm:text-lg">📍 Ganapur-06, Banke, Nepalgunj, Nepal</p>
          <p className="text-base sm:text-lg mt-2">
            📞 <a href="tel:+9779858037010" className="hover:text-red-500">+977-9858037010</a>
          </p>
          <p className="text-base sm:text-lg">
            📞 <a href="tel:+9779858033010" className="hover:text-red-500">+977-9858033010</a>
          </p>
          <p className="text-base sm:text-lg mt-2">
            📧 <a href="mailto:ms.elevators080@gmail.com" className="hover:text-red-500">ms.elevators080@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="text-center py-4 text-base sm:text-lg text-white"
        style={{
          background: "linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.3))",
        }}
      >
       Copyright © {new Date().getFullYear()} MS Elevators. All Rights Reserved.
      </div>
    </footer>
  );
}

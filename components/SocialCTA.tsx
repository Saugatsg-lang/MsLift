"use client";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function SocialCTA() {
  return (
    <div className="fixed right-4 top-[60%] -translate-y-1/2 flex flex-col space-y-3 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/9779858037010" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61555643740369"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce delay-100"
      >
        <FaFacebook size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/ms.elevators080/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce delay-200"
      >
        <FaInstagram size={20} />
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@ms.elevators?_t=ZS-8zRK6eTWV9R&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce delay-300"
      >
        <FaTiktok size={20} />
      </a>
    </div>
  );
}

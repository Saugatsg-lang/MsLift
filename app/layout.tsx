// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrolltoTop";
import SocialCTA from "@/components/SocialCTA"; 
import { Toaster } from "sonner"; // ✅ Import Toaster

export const metadata = {
  title: "MSELEVATORS-Nepal",
  description: "Next.js + Tailwind CSS educational template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white scroll-smooth">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Page Content */}
        <main
          className="flex-1 pt-16 md:pt-20"
          style={{ scrollPaddingTop: "5rem" }}
        >
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll-to-top button */}
        <ScrollToTop />

        {/* ✅ Floating Social Media CTA */}
        <SocialCTA />

        {/* ✅ Toast Notifications */}
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            classNames: {
              toast:
                "bg-blue-900 text-white rounded-2xl shadow-lg px-4 py-3 border border-blue-700",
              title: "font-semibold text-lg",
              description: "text-sm opacity-90",
              actionButton:
                "bg-white text-blue-900 font-semibold px-3 py-1 rounded-lg",
              cancelButton:
                "bg-gray-200 text-gray-900 font-semibold px-3 py-1 rounded-lg",
            },
          }}
        />
      </body>
    </html>
  );
}

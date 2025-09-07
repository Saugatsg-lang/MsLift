import Navbar from "./Navbar";
import Footer from "./Footer";
import React from 'react'; // Import React to use React.ReactNode

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
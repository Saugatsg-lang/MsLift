// components/Section.tsx
"use client";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="scroll-offset">
      {children}
    </section>
  );
}

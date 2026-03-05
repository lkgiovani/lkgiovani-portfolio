import type React from "react";
interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`flex items-center py-16 ${className}`}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

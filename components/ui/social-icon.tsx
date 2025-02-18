import type { LucideIcon } from "lucide-react";

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
}

export default function SocialIcon({ href, icon: Icon }: SocialIconProps) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

import { ReactNode } from "react";

interface UnderlineProps {
  children: ReactNode;
}

export default function Underline({ children }: UnderlineProps) {
  return (
    <span className="relative">
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300"></span>
    </span>
  );
}

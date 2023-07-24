import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: string;
  padding?: string;
  className?: string;
}

export default function Button({ className, text, size }: ButtonProps) {
  let styles;

  switch (size) {
    case "large":
      styles =
        "bg-button-purple text-white rounded-full w-5/6 font-semibold px-4 py-5 text-lg";
      break;
    default:
      styles =
        "bg-button-purple text-white rounded-3xl font-semibold px-4 py-2";
  }

  return (
    <button className={`${styles} ${className} hover:bg-purple-500`}>
      {text}
    </button>
  );
}

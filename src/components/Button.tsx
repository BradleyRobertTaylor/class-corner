import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: "large" | "default";
}

const Button = ({
  className,
  text,
  size = "default",
  ...props
}: ButtonProps) => {
  const styles = {
    large: "rounded-full w-5/6 py-5 text-lg",
    default: "rounded-3xl py-2",
  };

  return (
    <button
      {...props}
      className={cn(
        "bg-button-purple text-white font-semibold px-4 hover:bg-purple-500",
        styles[size],
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;

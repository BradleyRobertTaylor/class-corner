import Link from "next/link";
import Icons from "./Icons";

interface CardProps {
  text: string;
}

export default function Card({ text }: CardProps) {
  return (
    <Link
      href="#"
      className="flex-1 border-2 border-slate-200 rounded-3xl font-semibold p-4"
    >
      <div className="aspect-square w-24 mx-auto rounded-full bg-blue-300 mb-2"></div>
      <div className="mb-4">{text}</div>
      <Icons icon="arrow" className="aspect-square w-3 mx-auto" />
    </Link>
  );
}

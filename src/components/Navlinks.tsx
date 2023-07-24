import Link from "next/link";
import Button from "./Button";

interface NavLink {
  text: string;
  href: string;
}

const links: NavLink[] = [
  { text: "About us", href: "/aboutus" },
  { text: "Log in", href: "/signin" },
];

interface NavLinkProps {
  className: string;
}

export default function NavLinks({ className }: NavLinkProps) {
  return (
    <ul className={`${className} md:flex md:gap-7 md:items-center`}>
      {links.map(({ text, href }) => {
        return (
          <li key={text} className="hover:text-orange-500">
            <Link href={href}>{text}</Link>
          </li>
        );
      })}
      <li>
        <Button text="Sign up" />
      </li>
    </ul>
  );
}

import Link from 'next/link';

import Button from './Button';

type NavLink = {
  text: string;
  href: string;
};

const links: NavLink[] = [
  { text: 'About us', href: '/aboutus' },
  { text: 'Log in', href: '/login' },
];

type NavLinkProps = {
  className: string;
};

const NavLinks = ({ className }: NavLinkProps) => {
  return (
    <ul className={`${className} md:flex md:gap-7 md:items-center`}>
      {links.map(({ text, href }) => (
        <li
          key={text}
          className="font-medium hover:text-[#FA7D1B] transition-colors"
        >
          <Link href={href}>{text}</Link>
        </li>
      ))}
      <li>
        <Button text="Sign up" />
      </li>
    </ul>
  );
};

export default NavLinks;

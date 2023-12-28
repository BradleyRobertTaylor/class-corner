import HamburgerButton from "./ui/HamburgerButton";
import Logo from "./Logo";
import NavLinks from "./Navlinks";

const Navbar = () => {
  return (
    <header className="fixed bg-white z-10 w-full flex justify-between items-center py-5 px-4 border-b border-slate-300 lg:px-32">
      <Logo />
      <nav>
        <NavLinks className="hidden md:flex" />
      </nav>
      <HamburgerButton />
    </header>
  );
};

export default Navbar;

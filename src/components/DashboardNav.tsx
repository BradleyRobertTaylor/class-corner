import Logo from "./Logo";

const DashboardNav = () => {
  return (
    <header className="fixed bg-white z-10 w-full flex justify-between items-center py-5 px-4 border-b border-slate-300 lg:px-32">
      <Logo name="Bradley Taylor" />
    </header>
  );
};

export default DashboardNav;

'use client';

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/students', name: 'Students' },
  { href: '/story', name: 'Classroom Story' },
  { href: '/events', name: 'Events' },
  { href: '/reminders', name: 'Reminders' },
];

function isRootClassroomPath(pathname: string) {
  return !/\/classrooms\/.+/.test(pathname);
}

const DashboardNav = ({ params }: { params?: { id: string } }) => {
  const pathname = usePathname();
  return (
    <header
      className={cn(
        'fixed bg-white w-full z-10 pt-2 px-4 border-b border-slate-300 lg:px-10',
        isRootClassroomPath(pathname) && 'pb-2',
      )}
    >
      <div className="flex justify-between items-center ">
        <Logo name="Bradley Taylor" />
        <button className="font-medium hover:text-[#FA7D1B] transition-colors">
          Sign Out
        </button>
      </div>
      {pathname !== '/classrooms' && (
        <nav className="mt-4 flex">
          {navLinks.map(({ href, name }) => (
            <Link
              className={cn(
                'text-sm font-semibold text-zinc-800 hover:bg-zinc-300 py-2 px-7 transition-colors',
                pathname.includes(href) &&
                  'text-[#FA7D1B] border-b-[#FA7D1B] border-b-[2px] font-bold',
              )}
              key={name}
              href={`/classrooms/${params?.id}${href}`}
            >
              {name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default DashboardNav;

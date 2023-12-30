import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Class Corner',
  description:
    'Application for classroom management and connecting parents, teachers, and administrators.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, 'antialiased bg-zinc-100')}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

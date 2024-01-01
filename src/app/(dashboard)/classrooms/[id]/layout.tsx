import DashboardNav from '@/components/DashboardNav';

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <main className="h-screen">
      <DashboardNav params={params} />
      {children}
    </main>
  );
}

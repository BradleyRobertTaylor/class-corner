import DashboardNav from "@/components/DashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-slate-100 h-screen">
      <DashboardNav />
      {children}
    </main>
  );
}

// app/(customer)/layout.tsx
import { CustomerNavbar } from "../../components/customer/customer-navbar";
import { CustomerSidebar } from "../../components/customer/customer-sidebar";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <CustomerNavbar />
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-6">
        <aside className="hidden w-64 shrink-0 lg:block">
          <CustomerSidebar />
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
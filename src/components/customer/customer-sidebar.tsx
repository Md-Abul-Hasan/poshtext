// components/admin/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function CustomerSidebar() {
  const pathname = usePathname();

const navItems = [
  { href: "/account", label: "My Account" },
  { href: "/orders", label: "My Orders" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
];

  return (
    <aside className="w-64 bg-white shadow-sm border-r flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Admin</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
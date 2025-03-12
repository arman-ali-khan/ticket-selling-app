"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Users,
  DollarSign,
  Award,
  Ticket,
  BarChart2,
  CreditCard,
  Users2,
  Wallet,
  Gift,
  LayoutDashboard,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Money",
    href: "/admin/money",
    icon: DollarSign,
  },
  {
    title: "Points",
    href: "/admin/points",
    icon: Award,
  },
  {
    title: "Tickets",
    href: "/admin/tickets",
    icon: Ticket,
  },
  {
    title: "Results",
    href: "/admin/results",
    icon: BarChart2,
  },
  {
    title: "Payment Methods",
    href: "/admin/payment-methods",
    icon: CreditCard,
  },
  {
    title: "Affiliates",
    href: "/admin/affiliates",
    icon: Users2,
  },
  {
    title: "Funds",
    href: "/admin/funds",
    icon: Wallet,
  },
  {
    title: "Prizes",
    href: "/admin/prizes",
    icon: Gift,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-background border-r min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <nav className="space-y-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-3 py-2 text-sm rounded-md group",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="h-4 w-4 mr-3" />
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
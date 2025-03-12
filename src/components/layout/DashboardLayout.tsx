import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Ticket,
  Gift,
  DollarSign,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  CreditCard,
  Users2
} from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { cn } from '../../lib/utils';

interface SidebarItemProps {
  icon: ReactNode;
  title: string;
  path: string;
  active?: boolean;
}

const SidebarItem = ({ icon, title, path, active }: SidebarItemProps) => {
  return (
    <Link to={path}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 px-2",
          active ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
        )}
      >
        {icon}
        <span>{title}</span>
      </Button>
    </Link>
  );
};

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const sidebarItems = [
    { icon: <LayoutDashboard size={20} />, title: 'Dashboard', path: '/admin' },
    { icon: <Users size={20} />, title: 'Users', path: '/admin/users' },
    { icon: <Ticket size={20} />, title: 'Tickets', path: '/admin/tickets' },
    { icon: <FileText size={20} />, title: 'Results', path: '/admin/results' },
    { icon: <Gift size={20} />, title: 'Prizes', path: '/admin/prizes' },
    { icon: <DollarSign size={20} />, title: 'Funds', path: '/admin/funds' },
    { icon: <CreditCard size={20} />, title: 'Payment Methods', path: '/admin/payment-methods' },
    { icon: <Users2 size={20} />, title: 'Affiliates', path: '/admin/affiliates' },
    { icon: <Settings size={20} />, title: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Menu"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-background border-r transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:flex",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full w-full">
          <div className="flex items-center h-16 px-6 border-b">
            <h1 className="text-xl font-bold">Lottery Admin</h1>
          </div>
          <div className="flex-1 overflow-auto py-4 px-3 space-y-1">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.path}
                icon={item.icon}
                title={item.title}
                path={item.path}
                active={currentPath === item.path}
              />
            ))}
          </div>
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LogOut size={20} />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b flex items-center justify-end px-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium">AD</span>
              </div>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></span>
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500">admin@example.com</p>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
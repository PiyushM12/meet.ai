import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardNavbar } from "@/module/dashboard/ui/components/dashboard-navbar";
import { DashboardSidebar } from "@/module/dashboard/ui/components/dashboard-sidebar";

import type { ReactNode, FC } from "react"; 

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col h-screen w-screen bg-muted">
        <DashboardNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;

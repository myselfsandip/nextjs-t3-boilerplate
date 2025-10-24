import { SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

interface Props {
    children: ReactNode;
}


function DashboardLayout({ children }: Props) {
    return (
        <>
            <SidebarProvider>
                <DashboardSidebar />
                <main className="flex flex-col  w-screen bg-muted">
                    <DashboardNavbar />
                    <div className="px-4 py-2">
                        {children}
                    </div>
                </main>
            </SidebarProvider>
        </>
    );
}

export default DashboardLayout;
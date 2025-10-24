"use client"
import { HomeIcon, FileTextIcon, CheckCircleIcon, UsersIcon, FileEditIcon, FileUserIcon } from "lucide-react";
import { SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, Sidebar } from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import DashboardUserButton from "../dashboard/DashboardUserButton";

function DashboardSidebar() {
    const pathname = usePathname();

    const mainFeatures = [
        {
            icon: HomeIcon,
            label: "Overview",
            href: "/workspace/overview"
        },
        {
            icon: FileUserIcon,
            label: "Generate Resume",
            href: "/workspace/resume"
        },
        {
            icon: FileEditIcon,
            label: "Generate Cover Letter",
            href: "/workspace/cover-letter"
        },
        {
            icon: CheckCircleIcon,
            label: "ATS Score Checker",
            href: "/workspace/ats-score"
        },
        // {
        //     icon: UsersIcon,
        //     label: "Hire Talent",
        //     href: "/workspace/hire"
        // }
    ];

    return (
        <Sidebar>
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link href="/" className="flex justify-center items-center gap-2 px-2 pt-2">
                    Logo
                </Link>

            </SidebarHeader>

            <div className="px-4 py-2">
                <Separator className="opacity-10 text-[#5D6B68]" />
            </div>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {mainFeatures.map((item, idx) => (
                                <SidebarMenuItem key={idx}>
                                    <SidebarMenuButton
                                        asChild
                                        className={cn(
                                            "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                            (pathname === item.href || pathname.includes(item.href)) && "bg-linear-to-r/oklch border-[#5D6B68]/10"
                                        )}
                                    >
                                        <Link href={item.href}>
                                            <item.icon className="size-5" />
                                            <span className="text-sm font-medium tracking-tight">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* <SidebarFooter className="text-white">
                <DashboardUserButton />
            </SidebarFooter> */}
        </Sidebar>
    );
}

export default DashboardSidebar;
"use client"

import DashboardCommand from "../dashboard/DashboardCommand";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftCloseIcon, PanelLeftIcon, UserIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { ModeToggle } from "../mode-toggle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLogout } from "@/hooks/use-logout";

function DashboardNavbar() {
    const { state, toggleSidebar, isMobile } = useSidebar();
    const [commandOpen, setCommandOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setCommandOpen((open) => !open);
            }
        }

        document.addEventListener('keydown', down);
        return () => document.removeEventListener("keydown", down);
    }, [])

    const { logout } = useLogout();

    return (
        <>
            <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />
            <nav className="flex justify-between px-2 gap-x-2 items-center py-3 border-b bg-background">
                <div>
                    <Button variant="outline" className="size-9 cursor-pointer" onClick={toggleSidebar}>
                        {(state === 'collapsed' || isMobile) ? <PanelLeftIcon className="size-4" /> : <PanelLeftCloseIcon className="size-4" />}
                    </Button>
                </div>
                <div className="pr-3 flex gap-4 items-center">
                    <ModeToggle />
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <UserIcon />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => { }}>
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={logout}>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default DashboardNavbar;
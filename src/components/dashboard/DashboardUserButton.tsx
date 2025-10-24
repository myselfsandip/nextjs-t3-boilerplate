"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLogout } from "@/hooks/use-logout"; 
import { ChevronDownIcon, CreditCard, Loader2, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import GeneratedAvatar from "../GeneratedAvatar";
import { authClient } from "@/server/auth/auth-client";

function DashboardUserButton() {
    const { logout } = useLogout();

    const { data, isPending } = authClient.useSession();

    if (isPending) {
        return <div></div>
    }

    const user = data?.user;




    const handleBilling = () => {
        console.log('Navigate to billing');
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
                {user ? (
                    <GeneratedAvatar seed={user.name as string} variant="botttsNeutral" className="size-9 mr-3" />
                ) : null}

                <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
                    <p className="text-sm truncate w-full">
                        {user?.name}
                    </p>
                    <p className="text-xs truncate w-full text-muted-foreground">
                        {user?.email}
                    </p>
                </div>
                <ChevronDownIcon className="size-4 shrink-0" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" side="right" className="w-72">
                <DropdownMenuLabel>
                    <div className="flex flex-col gap-1">
                        <span className="font-medium truncate">{user?.name}</span>
                        <span className="font-normal text-sm text-muted-foreground truncate">{user?.email}</span>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className="cursor-pointer flex items-center justify-between"
                    onClick={handleBilling}
                >
                    Billing
                    <CreditCard className="size-4" />
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="cursor-pointer flex items-center justify-between"
                    onClick={logout}
                >
                    Logout
                    <LogOut className="size-4" />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default DashboardUserButton;

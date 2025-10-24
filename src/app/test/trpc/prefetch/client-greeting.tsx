"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";


export function ClientGreeting() {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.hello.queryOptions({ text: "Broooooooooooo" }));

    if (!data) return <div>Loading...</div>;
    return <div>{data.greeting}</div>;
}

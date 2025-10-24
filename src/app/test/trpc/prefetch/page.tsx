import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ClientGreeting } from "./client-greeting";

export default async function Home() {
    await prefetch(trpc.hello.queryOptions({ text: "Broooooooooooo" }));

    return (
        <HydrateClient>
            <Suspense fallback={<div>Loading...</div>}>
                <ClientGreeting />
            </Suspense>
        </HydrateClient>
    );
}

import 'server-only'; // <-- ensure this file cannot be imported from the client
import { createTRPCOptionsProxy, TRPCQueryOptions } from '@trpc/tanstack-react-query';
import { cache } from 'react';
import { makeQueryClient } from './query-client';
import { appRouter } from '@/server/api/root';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { createTRPCContext } from '@/server/api/trpc';
// IMPORTANT: Create a stable getter for the query client that
//            will return the same client during the same request.
export const getQueryClient = cache(makeQueryClient);
export const trpc = createTRPCOptionsProxy({
    ctx: createTRPCContext,
    router: appRouter,
    queryClient: getQueryClient,
});

export function HydrateClient(props: { children: React.ReactNode }) {
    const queryClient = getQueryClient();
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {props.children}
        </HydrationBoundary>
    );
}
export async function prefetch<T extends ReturnType<TRPCQueryOptions<any>>>(
    queryOptions: T,
) {
    const queryClient = getQueryClient();
    if (queryOptions.queryKey[1]?.type === 'infinite') {
        await queryClient.prefetchInfiniteQuery(queryOptions as any);
    } else {
        await queryClient.prefetchQuery(queryOptions);
    }
}

//Right Now Caller is only usable for PublicProcedures cause No Context is Provided 
export const caller = appRouter.createCaller(createTRPCContext);

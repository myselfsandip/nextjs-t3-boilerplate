"use client"

import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

const TestPage = () => {
    const trpc = useTRPC();
    const greeting = useQuery(trpc.hello.queryOptions({ text: "Bro" }));
    if (!greeting.data) return <div>Loading...</div>;
    return <div>{greeting.data.greeting}</div>;
}

export default TestPage
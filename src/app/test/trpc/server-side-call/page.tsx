import { caller } from "@/trpc/server"

const ServerTrpcExample = async () => {
    const greeting = await caller.hello({ text: "Bro" });

    return (
        <div>
            {greeting.greeting}
        </div>
    )
}

export default ServerTrpcExample
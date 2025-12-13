import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Home() {
    return (
        <div className="flex-1 h-full w-7xl mx-auto grid grid-cols-4 gap-6">
            <div className="flex gap-3 flex-col">
                <Image
                    src="/image.jpeg"
                    alt="Developer photo"
                    width={300}
                    height={300}
                    className="rounded-full ring-2 ring-border"
                />
                <div className="space-y-1">
                    <h1 className="text-foreground text-2xl font-semibold tracking-tight">
                        Matheus Pimentel
                    </h1>
                    <h2 className="text-muted-foreground font-thin text-lg">
                        Desenvolvedor React.js e Node.js
                    </h2>
                </div>
                <Separator />
            </div>
            <div className="col-span-3 flex flex-col gap-6">
                <div className="rounded-lg border w-full h-32 py-6 px-4 text-foreground">
                    <div className="text-xs text-foreground tracking-tight flex font-mono">
                        <p>pimentellima / README</p>
                        <span className="text-muted-foreground">.md</span>
                    </div>
                    <div className="font-semibold text-xl my-2">Sobre mim</div>
                    <Separator />
                    <div className="text-muted-foreground text-sm"></div>
                </div>

                <p className="font-medium text-foreground">Trajetória</p>
            </div>
        </div>
    )
}

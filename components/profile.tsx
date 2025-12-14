import { LinkedinIcon, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export default function Profile() {
    return (
        <div className="flex gap-3 flex-col">
            <div className="flex gap-3 md:flex-col">
                <Image
                    src="https://avatars.githubusercontent.com/u/92494670"
                    alt="Profile photo"
                    width={350}
                    height={350}
                    className="rounded-full ring-2 ring-border h-16 w-16 md:h-72 md:w-72 object-cover object-top"
                />
                <div className="md:space-y-1">
                    <h1 className="text-foreground text-2xl font-bold tracking-tight">
                        Matheus Pimentel
                    </h1>
                    <h2 className="text-muted-foreground tracking-tight text-lg font-medium">
                        Desenvolvedor React.js e Node.js
                    </h2>
                </div>
            </div>
            <Link href={"mailto:matheus_dere@hotmail.com"}>
                <Button className="w-full" variant={"secondary"}>
                    Enviar mensagem
                </Button>
            </Link>
            <Separator />
            <div className="flex flex-col">
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/matheus-pimentel-7a427b259/"
                >
                    <Button
                        className="text-foreground justify-start pl-0"
                        variant={`link`}
                    >
                        <LinkedinIcon />
                        Matheus Pimentel
                    </Button>
                </Link>
                <Button
                    className="text-foreground justify-start pl-0 cursor-default hover:bg-transparent"
                    variant={`ghost`}
                >
                    <MapPin />
                    Brasil
                </Button>
            </div>
        </div>
    )
}

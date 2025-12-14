import {
    BookOpen,
    InboxIcon,
    MailIcon,
    SquareChartGantt,
    SquareCodeIcon,
    SquareStackIcon,
} from "lucide-react"
import { Link } from "react-transition-progress/next"
import NavItem from "./navitem"
import { Button } from "./ui/button"

export default function Header() {
    return (
        <nav className="h-26 grid grid-rows-2 flex-col px-10 w-full border-b bg-black">
            <div className="flex items-end justify-between">
                <div className="flex items-center gap-0.5">
                    <span className="text-xl">🎯</span>
                    <Link href={"/"}>
                        <Button size={"sm"} variant={"ghost"}>
                            pimentellima
                        </Button>
                    </Link>
                </div>
                <div>
                    <div className="relative">
                        <Button variant={"outline"}>
                            <InboxIcon />
                        </Button>
                        <div className="rounded-full bg-primary h-2 w-2 absolute -right-0.5 -top-0.5" />
                    </div>
                </div>
            </div>
            <div className="flex items-end ">
                <NavItem icon={<BookOpen />} href="/" label="Resumo" />
                <NavItem
                    icon={<SquareChartGantt />}
                    href="/projects"
                    label="Projetos"
                />
                <NavItem
                    icon={<SquareCodeIcon />}
                    href="/stack"
                    label="Stack"
                />
            </div>
        </nav>
    )
}

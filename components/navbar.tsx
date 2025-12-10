import { Link } from "react-transition-progress/next"
import { Button } from "./ui/button"
import {
    BookAIcon,
    BookIcon,
    BookKeyIcon,
    BookOpen,
    Grid2x2,
    InboxIcon,
    MailIcon,
    SquareChartGantt,
} from "lucide-react"
import NavItem from "./navitem"

export default function Navbar() {
    return (
        <nav className="bg-black h-26 grid grid-rows-2 flex-col px-10 w-full border-b">
            <div className="flex items-end justify-between">
                <div>
                    <span className="text-xl">🎯</span>
                    <Button asChild variant={"ghost"}>
                        <Link href={"/"}> pimentellima</Link>
                    </Button>
                </div>
                <div>
                    <div className="relative">
                        <Button variant={"outline"}>
                            <InboxIcon />
                        </Button>
                        <div className="rounded-full bg-primary h-2 w-2 absolute -right-0.5 -top-0.5"/>
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
                <NavItem icon={<MailIcon />} href="/contact" label="Contato" />
            </div>
        </nav>
    )
}

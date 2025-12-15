import {
    BookOpen,
    BoxIcon,
    InboxIcon,
    SquareChartGantt,
    SquareCodeIcon,
    Table2Icon,
} from "lucide-react"
import { Link } from "react-transition-progress/next"
import NavItem from "./navitem"
import NotificationDropdown from "./notification-dropdown"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Suspense } from "react"

export default function Header() {
    return (
        <nav className="h-26 grid grid-rows-2 flex-col px-4 w-full border-b bg-black">
            <div className="flex items-end justify-between">
                <Link href={"/"}>
                    <Button size={"sm"} variant={"ghost"}>
                        🎯 pimentellima
                    </Button>
                </Link>
                <Suspense
                    fallback={
                        <Button variant={"outline"}>
                            <InboxIcon />
                        </Button>
                    }
                >
                    <NotificationDropdown />
                </Suspense>
            </div>
            <div className="flex items-end ">
                <NavItem icon={<BookOpen />} href="/">
                    Resumo
                </NavItem>
                <NavItem icon={<Table2Icon />} href="/projects">
                    Projetos
                    <Badge
                        variant={"secondary"}
                        className="font-bold px-1 py-0"
                    >
                        7
                    </Badge>
                </NavItem>
                <NavItem icon={<BoxIcon />} href="/stack">
                    Stack
                </NavItem>
            </div>
        </nav>
    )
}

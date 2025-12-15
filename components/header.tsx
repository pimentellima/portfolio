import { BookOpen, BoxIcon, InboxIcon, Table2Icon } from "lucide-react"
import { Suspense } from "react"
import { Link } from "react-transition-progress/next"
import NavItem from "./navitem"
import NotificationDropdown from "./notification-dropdown"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import ToggleThemeButton from "./toggle-theme-button"
import { getTranslations } from "next-intl/server"

export default async function Header() {
    const t = await getTranslations()
    return (
        <nav className="h-26 grid grid-rows-2 flex-col px-4 w-full border-b bg-popover">
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
                    <div className="flex gap-1">
                        <ToggleThemeButton />
                        <NotificationDropdown />
                    </div>
                </Suspense>
            </div>
            <div className="flex items-end ">
                <NavItem icon={<BookOpen />} href="/">
                    {t("nav.home")}
                </NavItem>
                <NavItem icon={<Table2Icon />} href="/projects">
                    {t("nav.projects")}
                    <Badge
                        variant={"secondary"}
                        className="font-bold px-1 py-0"
                    >
                        7
                    </Badge>
                </NavItem>
                <NavItem icon={<BoxIcon />} href="/stack">
                    {t("nav.stack")}
                </NavItem>
            </div>
        </nav>
    )
}

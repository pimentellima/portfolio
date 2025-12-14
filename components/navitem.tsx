"use client"

import { Link } from "react-transition-progress/next"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"

export default function NavItem({
    icon,
    href,
    children,
}: {
    icon: React.ReactNode
    href: string
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const isActive = pathname === href
    return (
        <div className="flex flex-col gap-1.5">
            <Link href={href}>
                <Button
                    size={"sm"}
                    data-active={isActive}
                    variant={"ghost"}
                    className="data-[active=true]:font-bold font-medium"
                >
                    <span className="text-muted-foreground">{icon}</span>
                    {children}
                </Button>
            </Link>
            <div
                data-active={isActive}
                className="bg-destructive w-full h-0.5 opacity-0 data-[active=true]:opacity-100 transition-opacity"
            />
        </div>
    )
}

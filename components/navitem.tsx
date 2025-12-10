"use client"

import { Link } from "react-transition-progress/next"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"

export default function NavItem({
    icon,
    href,
    label,
}: {
    icon: React.ReactNode
    href: string
    label: string
}) {
    const pathname = usePathname()
    const isActive = pathname === href
    return (
        <div className="flex flex-col gap-1.5">
            <Link href={href}>
                <Button
                    data-active={isActive}
                    variant={"ghost"}
                    className="data-[active=true]:font-semibold font-normal"
                >
                    {icon}
                    {label}
                </Button>
            </Link>
            <div
                data-active={isActive}
                className="bg-destructive w-full h-0.5 opacity-0 data-[active=true]:opacity-100 transition-opacity"
            />
        </div>
    )
}

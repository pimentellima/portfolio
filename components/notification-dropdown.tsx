"use client"
import { CheckIcon, InboxIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

export default function NotificationDropdown() {
    const [open, setOpen] = useState(false)
    const [notificationRead, setNotificationRead] = useState(true)
    const t = useTranslations()

    useEffect(() => {
        const readStatus = localStorage.getItem("notificationRead")
        setNotificationRead(readStatus === "true")
    }, [])

    return (
        <DropdownMenu
            open={open}
            onOpenChange={(open) => {
                setOpen(open)
                setNotificationRead(true)
                localStorage.setItem("notificationRead", "true")
            }}
        >
            <div className="relative">
                <Button size={"icon-sm"} asChild variant={"outline"}>
                    <DropdownMenuTrigger>
                        <InboxIcon />
                    </DropdownMenuTrigger>
                </Button>
                <div
                    hidden={notificationRead}
                    className="rounded-full bg-primary h-2 w-2 absolute -right-0.5 -top-0.5"
                />
            </div>
            <DropdownMenuContent align="end" className="p-2 rounded-lg w-max">
                <DropdownMenuItem className="focus:bg-secondary/40 bg-secondary/40 focus:text-foreground text-foreground font-semibold">
                    {t("notification.available")} <CheckIcon />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

"use client"
import { useFormatter } from "next-intl"

export default function TimelineDate({ date }: { date: Date }) {
    const format = useFormatter()

    return (
        <p className="shrink-0 text-sm text-muted-foreground">
            {format.dateTime(date, {
                month: "short",
                day: "numeric",
            })}
        </p>
    )
}

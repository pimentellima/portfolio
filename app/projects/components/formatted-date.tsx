import { useNow, useFormatter } from "next-intl"

export default function FormattedDate({ date }: { date: Date }) {
    const now = useNow()
    const format = useFormatter()

    return (
        <p className="text-xs text-muted-foreground font-semibold">
            {format.relativeTime(date, now)}
        </p>
    )
}

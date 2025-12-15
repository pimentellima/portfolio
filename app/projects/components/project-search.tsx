"use client"
import { Input } from "@/components/ui/input"
import { useQueryState } from "nuqs"
import { useTranslations } from "next-intl"

export default function ProjectSearch() {
    const [search, setSearch] = useQueryState("q", { defaultValue: "" })
    const t = useTranslations()

    return (
        <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-border h-8"
            placeholder={t("projects.searchPlaceholder")}
        />
    )
}

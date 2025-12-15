'use client'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useQueryState } from "nuqs"
import { useTranslations } from "next-intl"

const filters = [
    { value: "personal" },
    { value: "freelance" },
    { value: "contract" },
]

export default function ProjectsFilter() {
    const t = useTranslations()
    const [filter, setFilter] = useQueryState("filter", { defaultValue: "" })
    const onSelectFilter = (value: string) => {
        setFilter(value)
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"secondary"}>{t("projects.filterButton")}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuLabel>{t("projects.filterLabel")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {filters.map((item) => (
                    <DropdownMenuCheckboxItem
                        key={item.value}
                        checked={filter === item.value}
                        onCheckedChange={() => onSelectFilter(filter === item.value ? "" : item.value)}
                    >
                        {t(`projects.type.${item.value}`)}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

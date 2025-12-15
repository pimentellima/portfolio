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

const filters = [
    { label: "Projeto pessoal", value: "personal" },
    { label: "Contrato freelance", value: "freelance" },
    { label: "Contrato fixo", value: "contract" },
]

export default function ProjectsFilter() {
    const [filter, setFilter] = useQueryState("filter", { defaultValue: "" })
    const onSelectFilter = (value: string) => {
        setFilter(value)
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"secondary"}>Filtrar por...</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuLabel>Tipo</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {filters.map((item) => (
                    <DropdownMenuCheckboxItem
                        key={item.value}
                        checked={filter === item.value}
                        onCheckedChange={() => onSelectFilter(filter === item.value ? "" : item.value)}
                    >
                        {item.label}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

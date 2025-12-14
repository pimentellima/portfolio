"use client"
import { Input } from "@/components/ui/input"
import { useQueryState } from "nuqs"
export default function ProjectSearch() {
    const [search, setSearch] = useQueryState("q", { defaultValue: "" })

    return (
        <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-border h-8"
            placeholder="Buscar projeto..."
        />
    )
}

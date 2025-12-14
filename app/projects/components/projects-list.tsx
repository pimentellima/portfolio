"use client"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"
import { useQueryState } from "nuqs"
import { useMemo } from "react"

interface Project {
    name: string
    description: string
    type: string
    skills?: string[]
    language: string
    languageColor: string
    date: string
}

export function ProjectsListWithSearch({ projects }: { projects: Project[] }) {
    const [search] = useQueryState("q", { defaultValue: "" })
    const filteredProjects = useMemo(
        () =>
            projects.filter(
                (project) =>
                    project.name.toLowerCase().includes(search.toLowerCase()) ||
                    project.description
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    project.skills?.some((skill) =>
                        skill.toLowerCase().includes(search.toLowerCase())
                    )
            ),
        [projects, search]
    )

    return <ProjectsList projects={filteredProjects} />
}

export function ProjectsList({ projects }: { projects: Project[] }) {
    return (
        <div>
            {projects.map((project) => (
                <div
                    key={project.name}
                    className="py-4 border-b last:border-b-0"
                >
                    <div className="flex items-center gap-3">
                        <p className="text-primary font-bold text-xl">
                            {project.name}
                        </p>
                        <Badge className="h-6" variant={"outline"}>
                            {project.type}
                        </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm font-medium mt-2">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.skills?.map((skill) => (
                            <Badge
                                key={skill}
                                className="h-6 bg-primary/10 text-primary"
                                variant={"secondary"}
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                    <div className="flex gap-4 flex-wrap mt-4">
                        <div className="flex items-center gap-1">
                            <span
                                className="h-3 w-3 rounded-full border-muted-foreground/50 border"
                                style={{
                                    backgroundColor: project.languageColor,
                                }}
                            />
                            <p className="text-xs text-muted-foreground font-semibold">
                                {project.language}
                            </p>
                        </div>
                        <p className="text-xs text-muted-foreground font-semibold">
                            {formatDistanceToNow(new Date(project.date), {
                                addSuffix: true,
                                locale: ptBR,
                            })}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

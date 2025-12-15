import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Suspense } from "react"
import ProjectSearch from "./components/project-search"
import ProjectsFilter from "./components/projects-filter"
import {
    Project,
    ProjectsList,
    ProjectsListWithSearch,
} from "./components/projects-list"
import { getTranslations } from "next-intl/server"

export default async function ProjectsPage() {
    const t = await getTranslations()
    const projects: Project[] = [
        {
            name: t("projects.items.smulti.name"),
            description: t("projects.items.smulti.description"),
            type: "personal",
            skills: ["AWS", "React Router v7", "Vite"],
            language: "TypeScript",
            languageColor: "#3178C6",
            date: "2025-10-24",
        },
        {
            name: t("projects.items.chatbot_whatsapp.name"),
            description: t("projects.items.chatbot_whatsapp.description"),
            type: "personal",
            skills: ["Meta API", "Nest.js"],
            language: "TypeScript",
            languageColor: "#3178C6",
            date: "2025-04-06",
        },
        {
            name: t("projects.items.tradutor_cv.name"),
            description: t("projects.items.tradutor_cv.description"),
            type: "personal",
            skills: ["Next.js", "Drizzle ORM", "OpenAI API"],
            language: "TypeScript",
            languageColor: "#3178C6",
            date: "2024-10-31",
        },
        {
            name: t("projects.items.agregador_feeds.name"),
            description: t("projects.items.agregador_feeds.description"),
            type: "personal",
            skills: ["Next.js", "Tailwind CSS", "Open API"],
            language: "TypeScript",
            languageColor: "#3178C6",
            date: "2024-07-11",
        },
        {
            name: t("projects.items.chatbot_extratos.name"),
            description: t("projects.items.chatbot_extratos.description"),
            type: "personal",
            skills: ["Next.js", "RAG", "Tailwind CSS"],
            language: "TypeScript",
            languageColor: "#3178C6",
            date: "2024-07-22",
        },
        {
            name: t("projects.items.econosonar.name"),
            description: t("projects.items.econosonar.description"),
            type: "freelance",
            language: "TypeScript",
            languageColor: "#3178C6",
            date: "2025-09-23",
        },
        {
            name: t("projects.items.dpsystem.name"),
            description: t("projects.items.dpsystem.description"),
            type: "contract",
            language: "TypeScript",
            languageColor: "#3178C6",
            date: "2023-04-03",
        },
    ]
    const sortedProjects = projects.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return (
        <main className="space-y-4">
            <div className="flex gap-2">
                <Suspense
                    fallback={
                        <Input
                            className="border-border h-8"
                            placeholder={t("projects.searchPlaceholder")}
                        />
                    }
                >
                    <ProjectSearch />
                </Suspense>
                <Suspense
                    fallback={
                        <Button variant={"secondary"}>
                            {t("projects.filterButton")}
                        </Button>
                    }
                >
                    <ProjectsFilter />
                </Suspense>
            </div>
            <Separator className="my-3" />
            <Suspense fallback={<ProjectsList projects={sortedProjects} />}>
                <ProjectsListWithSearch projects={sortedProjects} />
            </Suspense>
        </main>
    )
}

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

const projects: Project[] = [
    {
        name: "Smulti",
        description: "Downloader de vídeos do YouTube",
        type: "personal",
        skills: ["AWS", "React Router v7", "Vite"],
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2025-10-24",
    },
    {
        name: "Chatbot Whatsapp",
        description:
            "Chatbot financeiro para gestão de despesas com IA usando API da Meta",
        type: "personal",
        skills: ["Meta API", "Nest.js"],
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2025-04-06",
    },
    {
        name: "Tradutor de CV",
        description:
            "Gerador de currículos traduzidos com IA a partir de CV em PDF",
        type: "personal",
        skills: ["Next.js", "Drizzle ORM", "OpenAI API"],
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2024-10-31",
    },
    {
        name: "Agregador de feeds",
        description:
            "Agregador de feeds de redes sociais em interface personalizada",
        type: "personal",
        skills: ["Next.js", "Tailwind CSS", "Open API"],
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2024-07-11",
    },
    {
        name: "Chatbot de extratos bancários",
        description:
            "Chatbot de análise e geração de gráficos usando IA a partir de extratos bancários",
        type: "personal",
        skills: ["Next.js", "RAG", "Tailwind CSS"],
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2024-07-22",
    },
    {
        name: "Econosonar",
        description:
            "Plataforma de geração e análise de eventos econômicos para empresas a partir de notícias",
        type: "freelance",
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2025-09-23",
    },
    {
        name: "DpSystem",
        description:
            "Sistema de gestão de clínicas médicas com controle financeiro",
        type: "contract",
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2023-04-03",
    },
]

export default function ProjectsPage() {
    const sortedProjects = projects.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <Suspense
                    fallback={
                        <Input
                            className="border-border h-8"
                            placeholder="Buscar projeto..."
                        />
                    }
                >
                    <ProjectSearch />
                </Suspense>
                <Suspense
                    fallback={
                        <Button variant={"secondary"}>
                            Filtrar por...
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
        </div>
    )
}

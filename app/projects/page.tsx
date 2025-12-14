import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

const projects = [
    {
        name: "Smulti",
        description: "Downloader de vídeos do YouTube",
        type: "Projeto freelance",
        skills: ["AWS", "React Router v7", "Vite"],
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2025-10-24",
    },
    {
        name: "Chatbot Whatsapp",
        description:
            "Chatbot financeiro para gestão de despesas com IA usando API da Meta",
        type: "Projeto pessoal",
        skills: ["Meta API", "Nest.js"],
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2025-04-06",
    },
    {
        name: "Tradutor de CV",
        description:
            "Gerador de currículos traduzidos com IA a partir de CV em PDF",
        type: "Projeto freelance",
        skills: ["Next.js", "Drizzle ORM", "OpenAI API"],
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2024-10-31",
    },
    {
        name: "Agregador de Feeds",
        description:
            "Agregador de feeds de redes sociais em interface personalizada",
        type: "Projeto pessoal",
        skills: ["Next.js", "Tailwind CSS", "Open API"],
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2024-07-11",
    },
    {
        name: "Chatbot para extratos bancários",
        description:
            "Chatbot para análise e geração de gráficos usando IA a partir de extratos bancários",
        type: "Projeto freelance",
        skills: ["Next.js", "RAG", "Tailwind CSS"],
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2024-07-22",
    },
    {
        name: "Econosonar",
        description:
            "Plataforma de geração e análise de eventos econômicos para empresas a partir de notícias",
        type: "Contrato freelance",
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2025-09-23",
    },
    {
        name: "DpSystem",
        description:
            "Sistema de gestão de clínicas médicas com controle financeiro",
        type: "Contrato fixo",
        language: "TypeScript",
        languageColor: "#3178C6",
        date: "2023-04-03",
    },
]

export default function ProjectsPage() {
    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <Input
                    className="border-border h-8"
                    placeholder="Buscar projeto..."
                />
                <Button variant={"secondary"}>Filtrar por...</Button>
            </div>
            <Separator className="my-3" />
            {projects
                .sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .map((project) => (
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

import {
    Timeline,
    TimelineHeader,
    TimelineItem,
    TimelineProject,
    TimelineSeparator,
    TimelineWork,
    TimelineWorkActivity,
} from "@/components/timeline"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import {
    ArrowUpDown,
    BookTextIcon,
    BrainIcon,
    BriefcaseIcon,
    ChevronsUpDownIcon,
    Folder,
    GitPullRequest,
} from "lucide-react"

export default function Home() {
    return (
        <div className="contents">
            <div className="rounded-lg border w-full py-6 px-4 text-foreground">
                <div className="text-xs text-foreground tracking-tight flex font-mono">
                    <p>pimentellima / README</p>
                    <span className="text-muted-foreground">.md</span>
                </div>
                <div className="font-semibold mt-2 text-xl">Sobre mim</div>
                <Separator className="my-2" />
                <div className="font-medium text-sm">
                    Sou um desenvolvedor full stack brasileiro 🇧🇷 que ama
                    construir e acompanhar as tendências tecnológicas.
                    <br />
                    <br />
                    Desde 2023, trabalho desenvolvendo aplicações web usando{" "}
                    <span className="font-semibold">TypeScript</span>,{" "}
                    <span className="font-semibold">React.js</span> e{" "}
                    <span className="font-semibold">Node.js</span>.
                    <br />
                    Também desenvolvo projetos autorais para explorar novas
                    ideias e tecnologias.
                </div>
            </div>

            <div className="container">
                <TimelineHeader>Trajetória</TimelineHeader>
                <TimelineSeparator>2025</TimelineSeparator>
                <Timeline>
                    <TimelineItem
                        icon={<BriefcaseIcon className="h-4 w-4" />}
                        date="Set 23"
                    >
                        <Collapsible defaultOpen>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <CollapsibleTrigger className="flex gap-1 items-center group cursor-pointer w-full">
                                        <p className="text-base text-foreground group-hover:text-primary transition-colors font-semibold">
                                            Atuou como Tech Lead no Econosonar
                                        </p>
                                        <ChevronsUpDownIcon className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </CollapsibleTrigger>
                                </div>

                                <CollapsibleContent className="space-y-2">
                                    <TimelineWork name="econosonar" />
                                    <TimelineWorkActivity content="ajudou a tirar a ideia do papel, desenvolvendo a plataforma de análise de eventos econômicos" />
                                    <TimelineWorkActivity content="criou o workflow de análise periódica de notícias e agrupamento com IA e métricas personalizadas" />
                                    <TimelineWorkActivity content="construiu o painel de administradores para visualização das tabelas geradas no banco" />
                                    <TimelineWorkActivity content="criou o fluxo de onbording de novos usuários com acesso antecipado" />
                                </CollapsibleContent>
                            </div>
                        </Collapsible>
                    </TimelineItem>
                    <TimelineItem
                        icon={<Folder className="h-4 w-4" />}
                        date="Fev 20"
                        isLast
                    >
                        <Collapsible defaultOpen>
                            <div className="space-y-3">
                                <CollapsibleTrigger className="flex gap-1 items-center group cursor-pointer w-full">
                                    <p className="text-base text-foreground group-hover:text-primary transition-colors font-semibold">
                                        Publicou projetos pessoais
                                    </p>
                                    <ChevronsUpDownIcon className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-2">
                                    <TimelineProject name="pimentellima/smulti" />
                                    <TimelineProject name="pimentellima/tradutor-cv" />
                                    <TimelineProject name="pimentellima/agregador-feeds" />
                                    <TimelineProject name="pimentellima/chatbot-whatsapp" />
                                    <TimelineProject name="pimentellima/chatbot-extratos" />
                                </CollapsibleContent>
                            </div>
                        </Collapsible>
                    </TimelineItem>
                </Timeline>

                <TimelineSeparator>2023</TimelineSeparator>
                <Timeline>
                    <TimelineItem
                        icon={<BriefcaseIcon className="h-4 w-4" />}
                        date="Abr 3"
                        isLast
                    >
                        <Collapsible defaultOpen>
                            <div className="space-y-3">
                                <CollapsibleTrigger className="flex gap-1 items-center group cursor-pointer w-full">
                                    <p className="text-base text-foreground group-hover:text-primary font-semibold">
                                        Iniciou atuação como Desenvolvedor
                                        React.js e Node.js na DpSystem
                                    </p>
                                    <ChevronsUpDownIcon className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-2">
                                    <TimelineWork name="dpsystemltda" />
                                    <TimelineWorkActivity content="ajudou a construir os módulos de agendamento e consulta, autenticação e permissões" />
                                    <TimelineWorkActivity content="construiu o fluxo de conciliação bancária e geração de relatório contábil" />
                                    <TimelineWorkActivity content="desenvolveu o módulo de criação de prontuários dinâmicos e integração com IA" />
                                    <TimelineWorkActivity content="realizou a integração do sistema com API Meta para envio de notificações via WhatsApp" />
                                    <TimelineWorkActivity content="participou da migração do sistema de CRA para Vite e TanStack Router" />
                                </CollapsibleContent>
                            </div>
                        </Collapsible>
                    </TimelineItem>
                </Timeline>

                <TimelineSeparator>2022</TimelineSeparator>
                <Timeline>
                    <TimelineItem
                        icon={<Folder className="h-4 w-4" />}
                        date="Fev 17"
                    >
                        <Collapsible defaultOpen>
                            <div className="space-y-2">
                                <CollapsibleTrigger className="flex gap-1 items-center group cursor-pointer w-full">
                                    <p className="text-base text-foreground group-hover:text-primary font-semibold">
                                        Começou a desenvolver projetos em React.js
                                        e Node.js
                                    </p>
                                    <ChevronsUpDownIcon className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-2">
                                    <TimelineProject name="pimentellima/todo-app" />
                                    <TimelineProject name="pimentellima/fwitter" />
                                </CollapsibleContent>
                            </div>
                        </Collapsible>
                    </TimelineItem>
                    <TimelineItem
                        isLast
                        icon={<BrainIcon className="h-4 w-4" />}
                        date="Jan 10"
                    >
                        <p className="text-base text-foreground font-semibold">
                            Deu início ao estudo de APIs REST e ferramentas
                            front-end
                        </p>
                    </TimelineItem>
                </Timeline>
                <TimelineSeparator>2021</TimelineSeparator>
                <Timeline>
                    <TimelineItem
                        isLast
                        icon={<BookTextIcon className="h-4 w-4" />}
                        date="Jun 14"
                    >
                        <div className="space-y-2">
                            <p className="text-base text-foreground font-semibold">
                                Começou o curso de Ciência da Computação na
                                Universidade Federal de Sergipe (Brasil)
                            </p>
                        </div>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}

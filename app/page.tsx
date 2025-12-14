import {
    Timeline,
    TimelineHeader,
    TimelineItem,
    TimelineProject,
    TimelineSeparator,
    TimelineWork,
} from "@/components/timeline"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    BookTextIcon,
    BrainIcon,
    BriefcaseIcon,
    Folder,
    GitPullRequest,
    MailIcon,
    MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className="flex-1 h-full w-6xl mx-auto grid grid-cols-4 gap-6">
            <div className="flex gap-3 flex-col">
                <Image
                    src="/image.jpeg"
                    alt="Profile photo"
                    width={350}
                    height={350}
                    className="rounded-full ring-2 ring-border"
                />
                <div className="space-y-1">
                    <h1 className="text-foreground text-2xl font-bold tracking-tight">
                        Matheus Pimentel
                    </h1>
                    <h2 className="text-muted-foreground tracking-tight text-lg font-medium">
                        Desenvolvedor React.js e Node.js
                    </h2>
                </div>
                <Separator />
                <div className="space-y-1">
                    <Link href="mailto:matheus_dere@hotmail.com">
                        <Button
                            className="text-foreground justify-start pl-0"
                            variant={`link`}
                        >
                            <MailIcon />
                            matheus_dere@hotmail.com
                        </Button>
                    </Link>
                    <Button
                        className="text-foreground justify-start pl-0 cursor-default hover:bg-transparent"
                        variant={`ghost`}
                    >
                        <MapPin />
                        Brasil
                    </Button>
                </div>
            </div>
            <div className="col-span-3 flex flex-col gap-6">
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
                        Desde 2023, trabalho desenvolvendo aplicações web usando
                        TypeScript, React.js e Node.js.
                        <br />
                        Na minha trajetória, ganhei experiência em design de
                        interfaces, integração com APIs, automação e IA.
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
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <p className="text-base text-foreground">
                                        Atuou como Tech Lead no Econosonar
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <TimelineWork name="econosonar" />
                                    <div className="flex items-center gap-2">
                                        <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-sm text-foreground">
                                            ajudou a tirar a ideia do papel,
                                            desenvolvendo a plataforma de
                                            análise de eventos econômicos
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-sm text-foreground">
                                            criou o workflow de análise
                                            periódica de notícias e agrupamento
                                            com IA e métricas personalizadas
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-sm text-foreground">
                                            construiu o painel de
                                            administradores para visualização
                                            das tabelas geradas no banco
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-sm text-foreground">
                                            criou o fluxo de onbording de novos
                                            usuários com acesso antecipado
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </TimelineItem>
                        <TimelineItem
                            icon={<Folder className="h-4 w-4" />}
                            date="Fev 20"
                            isLast
                        >
                            <div className="space-y-2">
                                <p className="text-base text-foreground">
                                    Publicou projetos pessoais
                                </p>
                                <div className="flex gap-3">
                                    <TimelineProject name="pimentellima/smulti" />
                                </div>
                                <div className="flex gap-3">
                                    <TimelineProject name="pimentellima/tradutor-cv" />
                                </div>
                                <div className="flex gap-3">
                                    <TimelineProject name="pimentellima/agregador-feeds" />
                                </div>
                                <div className="flex gap-3">
                                    <TimelineProject name="pimentellima/chatbot-whatsapp" />
                                </div>
                                <div className="flex gap-3">
                                    <TimelineProject name="pimentellima/chatbot-extratos" />
                                </div>
                            </div>
                        </TimelineItem>
                    </Timeline>

                    <TimelineSeparator>2023</TimelineSeparator>
                    <Timeline>
                        <TimelineItem
                            icon={<BriefcaseIcon className="h-4 w-4" />}
                            date="Abr 3"
                            isLast
                        >
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <p className="text-base text-foreground">
                                        Iniciou atuação como Desenvolvedor
                                        React.js e Node.js na DpSystem
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <TimelineWork name="dpsystemltda" />
                                    <div className="flex items-center gap-2">
                                        <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-sm text-foreground">
                                            ajudou a construir os módulos de
                                            agendamento e consulta, autenticação
                                            e permissões
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-sm text-foreground">
                                            construiu o fluxo de conciliação
                                            bancária e geração de relatório
                                            contábil
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-sm text-foreground">
                                            desenvolveu o módulo de criação de
                                            prontuários dinâmicos e integração
                                            com IA
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-sm text-foreground">
                                            realizou a integração do sistema com
                                            API Meta para envio de notificações
                                            via WhatsApp
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-sm text-foreground">
                                            participou da migração do sistema de
                                            CRA para Vite e TanStack Router
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </TimelineItem>
                    </Timeline>

                    <TimelineSeparator>2022</TimelineSeparator>
                    <Timeline>
                        <TimelineItem
                            icon={<Folder className="h-4 w-4" />}
                            date="Fev 17"
                        >
                            <div className="space-y-2">
                                <p className="text-base text-foreground">
                                    Começou a desenvolver projetos em React e
                                    Node.js
                                </p>
                                <TimelineProject name="pimentellima/todo-app" />
                                <TimelineProject name="pimentellima/fwitter" />
                            </div>
                        </TimelineItem>
                        <TimelineItem
                            isLast
                            icon={<BrainIcon className="h-4 w-4" />}
                            date="Jan 10"
                        >
                            <p className="text-base text-foreground">
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
                                <p className="text-base text-foreground">
                                    Começou o curso de Ciência da Computação na
                                    Universidade Federal de Sergipe (Brasil)
                                </p>
                            </div>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

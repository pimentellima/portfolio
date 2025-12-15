import {
    Timeline,
    TimelineHeader,
    TimelineItem,
    TimelineProject,
    TimelineSeparator,
    TimelineWork,
    TimelineWorkActivity,
} from "@/components/timeline"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import {
    BookTextIcon,
    BrainIcon,
    BriefcaseIcon,
    ChevronsUpDownIcon,
    Folder
} from "lucide-react"
import { getTranslations } from "next-intl/server"

export default async function Home() {
    const t = await getTranslations()
    return (
        <div className="contents">
            <div className="rounded-lg border w-full py-6 px-4 text-foreground">
                <div className="text-xs text-foreground tracking-tight flex font-medium font-mono">
                    <p>{t("header.readme")}</p>
                    <span className="text-muted-foreground">{t("header.ext")}</span>
                </div>
                <div className="font-bold mt-2 text-xl">{t("about.title")}</div>
                <Separator className="my-2" />
                <div className="font-medium text-sm">
                    {t("about.p1")}
                    <br />
                    <br />
                    {t("about.p2")} {" "}
                    <span className="font-semibold">TypeScript</span>,{" "}
                    <span className="font-semibold">React.js</span> e{" "}
                    <span className="font-semibold">Node.js</span>. {t("about.p3")}
                </div>
            </div>

            <div className="container">
                <TimelineHeader>{t("timeline.header")}</TimelineHeader>
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
                                        <p className="text-base text-foreground group-hover:text-primary transition-colors font-semibold text-left">
                                            {t("timeline.econosonar.title")}
                                        </p>
                                        <ChevronsUpDownIcon className="hidden md:block size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </CollapsibleTrigger>
                                </div>

                                <CollapsibleContent className="space-y-2">
                                    <TimelineWork
                                        href="https://www.econosonar.com"
                                        name="econosonar"
                                    />
                                    <TimelineWorkActivity content={t("timeline.econosonar.activity.1")} />
                                    <TimelineWorkActivity content={t("timeline.econosonar.activity.2")} />
                                    <TimelineWorkActivity content={t("timeline.econosonar.activity.3")} />
                                    <TimelineWorkActivity content={t("timeline.econosonar.activity.4")} />
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
                                    <p className="text-base text-foreground group-hover:text-primary transition-colors font-semibold text-left">
                                        {t("timeline.personal.title")}
                                    </p>
                                    <ChevronsUpDownIcon className="hidden md:block size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
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
                                    <p className="text-base text-foreground group-hover:text-primary font-semibold text-left">
                                        {t("timeline.dpsystem.title")}
                                    </p>
                                    <ChevronsUpDownIcon className="hidden md:block size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-2">
                                    <TimelineWork name="dpsystemltda" />
                                    <TimelineWorkActivity content={t("timeline.dpsystem.activity.1")} />
                                    <TimelineWorkActivity content={t("timeline.dpsystem.activity.2")} />
                                    <TimelineWorkActivity content={t("timeline.dpsystem.activity.3")} />
                                    <TimelineWorkActivity content={t("timeline.dpsystem.activity.4")} />
                                    <TimelineWorkActivity content={t("timeline.dpsystem.activity.5")} />
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
                                    <p className="text-base text-foreground group-hover:text-primary font-semibold text-left">
                                        {t("timeline.startedProjects.title")}
                                    </p>
                                    <ChevronsUpDownIcon className="hidden md:block size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
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
                            {t("timeline.startedStudy.title")}
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
                                {t("timeline.study.course")}
                            </p>
                        </div>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}

import { Separator } from "@/components/ui/separator"
import { getTranslations } from "next-intl/server"

export default async function StackPage() {
    const t = await getTranslations()
    return (
        <main className="rounded-lg border w-full pt-6 px-4 text-foreground">
            <div className="font-bold text-xl">{t("stack.title")}</div>
            <Separator className="mb-4 mt-2" />
            <div className="font-medium text-sm space-y-4">
                <p>
                    {t("stack.p1")}
                </p>
                <div className="flex flex-col mt-1 gap-1">
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            React
                        </span>
                    </div>
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            Tailwind CSS
                        </span>
                    </div>
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            Next.js
                        </span>
                    </div>
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            Drizzle ORM
                        </span>
                    </div>
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            shadcn/ui
                        </span>
                    </div>
                </div>
                <p>
                    {t("stack.p2")}
                </p>
                <p>{t("stack.alsoWorked")}</p>
                <div className="flex flex-col mt-1 gap-1">
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            Node.js
                        </span>
                    </div>
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            Express.js
                        </span>
                    </div>
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            Remix
                        </span>
                    </div>
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            MongoDB
                        </span>
                    </div>
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            Prisma ORM
                        </span>
                    </div>
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            Nest JS
                        </span>
                    </div>
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            AdonisJS
                        </span>
                    </div>
                    <div>
                        <span>•</span>{" "}
                        <span className="text-primary font-semibold">
                            Vitest
                        </span>
                    </div>
                    <div>
                        <span>{t("stack.counting")}</span>
                    </div>
                </div>
                <br />
            </div>
        </main>
    )
}

import { Separator } from "@/components/ui/separator"

export default function StackPage() {
    return (
        <div className="rounded-lg border w-full pt-6 px-4 text-foreground">
            <div className="font-bold text-xl">Minha stack</div>
            <Separator className="mb-4 mt-2" />
            <div className="font-medium text-sm space-y-4">
                <p>
                    Atualmente tenho foco no front-end, e venho usando
                    constantemente nos meus projetos a seguinte stack:
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
                    Escolho React.js pelo suporte da comunidade, Next.js pela
                    rapidez em sair da ideia para v0, Tailwind CSS pelo boost de
                    produtividade, Drizzle ORM por ser leve e flexível, e
                    shadcn/ui por fornecer componentes prontos e
                    personalizáveis.
                </p>
                <p>Também já trabalhei com</p>
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
                        <span>e contando...</span>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

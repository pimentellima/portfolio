export default function StackPage() {
    return (
        <div className="rounded-lg border w-full py-6 px-4 text-foreground space-y-2">
            <div className="font-semibold text-xl">Minha stack</div>
            <div className="font-medium text-sm">
                Atualmente tenho foco no front-end e minha stack principal é{" "}
                <span className="text-primary font-semibold">React</span>,
                <span className="text-primary font-semibold">Tailwind CSS</span>
                , <span className="text-primary font-semibold">Next.js</span>,{" "}
                <span className="text-primary font-semibold">Drizzle ORM</span>{" "}
                e <span className="text-primary font-semibold">shadcn/ui</span>
                .
                <br />
                Também já trabalhei com{" "}
                <span className="text-primary font-semibold">Remix</span>,{" "}
                <span className="text-primary font-semibold">MongoDB</span>,{" "}
                <span className="text-primary font-semibold">Express.js</span>,{" "}
                <span className="text-primary font-semibold">Prisma ORM</span>,{" "}
                <span className="text-primary font-semibold">Nest.js</span>, e
                contando...
                <br />
            </div>
        </div>
    )
}

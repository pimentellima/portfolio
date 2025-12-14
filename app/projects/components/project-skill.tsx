export default function ProjectSkill({
    skillName,
    skillColor,
}: {
    skillName: string
    skillColor: string
}) {
    return (
        <div className="flex items-center gap-2">
            {skillColor && (
                <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: skillColor }}
                />
            )}
            <span className="text-sm text-foreground">{skillName}</span>
        </div>
    )
}

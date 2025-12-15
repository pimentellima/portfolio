import { MoonIcon, SunIcon } from "lucide-react"
import { ComponentProps } from "react"
import { Button } from "./ui/button"

export function ToggleThemeButton({
    theme,
    ...props
}: ComponentProps<typeof Button> & { theme: string }) {
    return (
        <Button
            aria-label="toggle-theme-button"
            size={"icon-sm"}
            variant={"outline"}
            {...props}
        >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
}

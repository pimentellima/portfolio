"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function ToggleThemeButton() {
    const { theme, setTheme } = useTheme()

    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }
    
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <Button size={"icon-sm"} variant={"outline"} onClick={toggleTheme}>
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
}

"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ToggleThemeButton } from "./toggle-theme-button"

export function ToggleTheme() {
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

    return <ToggleThemeButton onClick={toggleTheme} theme={theme || "dark"} />
}

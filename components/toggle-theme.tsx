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
        return <ToggleThemeButton theme="dark" />
    }

    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches

    const resolvedTheme = theme
        ? theme === "system"
            ? prefersDark
                ? "dark"
                : "light"
            : theme
        : "light"

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    return <ToggleThemeButton onClick={toggleTheme} theme={resolvedTheme} />
}

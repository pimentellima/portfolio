import Header from "@/components/header"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { LinkedinIcon, MailIcon, MapPin, ShareIcon } from "lucide-react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { ProgressBar, ProgressBarProvider } from "react-transition-progress"
import "./globals.css"
import Profile from "@/components/profile"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "pimentellima - Desenvolvedor",
    description: "Portfolio de Matheus Pimentel Lima",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NuqsAdapter>
                    <ProgressBarProvider>
                        <ProgressBar className="w-full fixed top-0 left-0 right-0 z-50 h-1 bg-primary/50" />
                        <div className="flex min-h-screen flex-col bg-background">
                            <Header />
                            <div className="flex-1 py-8">
                                <div className="flex-1 h-full md:w-312 mx-auto flex flex-col md:grid grid-cols-4 px-4 gap-3 md:gap-6">
                                    <Profile />
                                    <div className="col-span-3 flex flex-col gap-6">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ProgressBarProvider>
                </NuqsAdapter>
            </body>
        </html>
    )
}

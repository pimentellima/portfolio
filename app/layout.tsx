import Header from "@/components/header"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MailIcon, MapPin } from "lucide-react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { ProgressBar, ProgressBarProvider } from "react-transition-progress"
import "./globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "pimentellima - Dev",
    description: "Website pessoal de Matheus Pimentel Lima",
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
                            <div className="flex-1 py-6">
                                <div className="flex-1 h-full w-6xl mx-auto grid grid-cols-4 gap-6">
                                    <div className="flex gap-3 flex-col">
                                        <Image
                                            src="/image.jpeg"
                                            alt="Profile photo"
                                            width={350}
                                            height={350}
                                            className="rounded-full ring-2 ring-border"
                                        />
                                        <div className="space-y-1">
                                            <h1 className="text-foreground text-2xl font-bold tracking-tight">
                                                Matheus Pimentel
                                            </h1>
                                            <h2 className="text-muted-foreground tracking-tight text-lg font-medium">
                                                Desenvolvedor React.js e Node.js
                                            </h2>
                                        </div>
                                        <Separator />
                                        <div className="space-y-1">
                                            <Link href="mailto:matheus_dere@hotmail.com">
                                                <Button
                                                    className="text-foreground justify-start pl-0"
                                                    variant={`link`}
                                                >
                                                    <MailIcon />
                                                    matheus_dere@hotmail.com
                                                </Button>
                                            </Link>
                                            <Button
                                                className="text-foreground justify-start pl-0 cursor-default hover:bg-transparent"
                                                variant={`ghost`}
                                            >
                                                <MapPin />
                                                Brasil
                                            </Button>
                                        </div>
                                    </div>
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

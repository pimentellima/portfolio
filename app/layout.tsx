import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { ProgressBar, ProgressBarProvider } from "react-transition-progress"

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
                <ProgressBarProvider>
                    <ProgressBar className="w-full fixed top-0 left-0 right-0 z-50 h-1 bg-primary/50" />
                    <div className="flex min-h-screen flex-col bg-background">
                        <Header />
                        <div className="flex-1 py-10">{children}</div>
                    </div>
                </ProgressBarProvider>
            </body>
        </html>
    )
}

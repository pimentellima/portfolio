import type React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { GitBranch, GitCommit, Folder, GitPullRequest } from "lucide-react"
import { Separator } from "./ui/separator"
import Link from "next/link"

export interface TimelineItemProps {
    icon?: React.ReactNode
    date?: string
    children: React.ReactNode
    isLast?: boolean
}

export function TimelineItem({
    icon,
    date,
    children,
    isLast = false,
}: TimelineItemProps) {
    return (
        <div className="relative flex gap-4 pb-8">
            {/* Vertical line */}
            {!isLast && (
                <div className="absolute left-[15px] top-8 h-full w-px bg-border" />
            )}

            {/* Icon container */}
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                {icon}
            </div>

            {/* Content */}
            <div className="flex flex-1 items-start justify-between gap-4">
                <div className="flex-1">{children}</div>
                {date && (
                    <time className="shrink-0 text-sm text-muted-foreground">
                        {date}
                    </time>
                )}
            </div>
        </div>
    )
}

export interface CommitActivity {
    repo: string
    count: number
    percentage?: number
}

export function TimelineCommits({
    total,
    repositories,
    commits,
}: {
    total: number
    repositories: number
    commits: CommitActivity[]
}) {
    return (
        <div className="space-y-3">
            <p className="text-base text-foreground">
                Created {total} commits in {repositories}{" "}
                {repositories === 1 ? "repository" : "repositories"}
            </p>
            <div className="space-y-2">
                {commits.map((commit, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <a
                            href={`#${commit.repo}`}
                            className="min-w-0 flex-shrink text-sm text-blue-500 hover:underline"
                        >
                            {commit.repo}
                        </a>
                        <span className="shrink-0 text-sm text-muted-foreground">
                            {commit.count}{" "}
                            {commit.count === 1 ? "commit" : "commits"}
                        </span>
                        {commit.percentage && (
                            <div className="flex-1">
                                <div className="h-2 overflow-hidden rounded-full bg-border">
                                    <div
                                        className="h-full rounded-full bg-green-500"
                                        style={{
                                            width: `${commit.percentage}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export function TimelineProject({ name }: { name: string }) {
    return (
        <div className="flex items-center gap-3">
            <Folder className="h-4 w-4" />
            <Link
                href={`/${name}`}
                className="text-sm text-primary hover:underline"
            >
                {name}
            </Link>
        </div>
    )
}

export function TimelineWork({ name, href }: { name: string; href?: string }) {
    if (!href)
        return (
            <div className="text-sm text-muted-foreground">
                {name}
            </div>
        )
    return (
        <div>
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:underline"
            >
                {name}
            </Link>
        </div>
    )
}

export function TimelineWorkActivity({ content }: { content: string }) {
    return (
        <div className="flex items-center gap-2">
            <GitPullRequest className="h-4 w-4 text-muted-foreground shrink-0" />
            <p className="text-sm text-foreground">{content}</p>
        </div>
    )
}

export interface PullRequestProps {
    title: string
    repo: string
    additions: number
    deletions: number
    comments: number
    status?: "open" | "closed" | "merged"
}

export function TimelinePullRequest({
    title,
    repo,
    additions,
    deletions,
    comments,
    status = "open",
}: PullRequestProps) {
    return (
        <div className="space-y-3">
            <div>
                <p className="text-base text-foreground">
                    Created a pull request in{" "}
                    <a
                        href={`#${repo}`}
                        className="text-blue-500 hover:underline"
                    >
                        {repo}
                    </a>{" "}
                    that received {comments}{" "}
                    {comments === 1 ? "comment" : "comments"}
                </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-2">
                    <GitBranch className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="flex-1 space-y-2">
                        <a
                            href="#pr"
                            className="text-base font-medium text-foreground hover:text-blue-500 hover:underline"
                        >
                            {title}
                        </a>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span
                                className={cn(
                                    "inline-flex gap-1",
                                    additions > 0 && "text-green-500"
                                )}
                            >
                                +{additions}
                            </span>
                            <span
                                className={cn(
                                    "inline-flex gap-1",
                                    deletions > 0 && "text-red-500"
                                )}
                            >
                                -{deletions}
                            </span>
                            <span className="inline-flex h-2 gap-1">
                                {additions > 0 && (
                                    <span
                                        className="h-full w-2 rounded-sm bg-green-500"
                                        style={{
                                            width: `${Math.min(
                                                additions * 2,
                                                24
                                            )}px`,
                                        }}
                                    />
                                )}
                                {deletions > 0 && (
                                    <span
                                        className="h-full w-2 rounded-sm bg-red-500"
                                        style={{
                                            width: `${Math.min(
                                                deletions * 2,
                                                24
                                            )}px`,
                                        }}
                                    />
                                )}
                            </span>
                            <span>lines changed</span>
                            <span>
                                • {comments}{" "}
                                {comments === 1 ? "comment" : "comments"}
                            </span>
                        </div>
                    </div>
                    {status === "merged" && (
                        <Badge
                            variant="secondary"
                            className="gap-1 bg-purple-500/20 text-purple-400 hover:bg-purple-500/20"
                        >
                            <GitCommit className="h-3 w-3" />
                            merged
                        </Badge>
                    )}
                </div>
            </div>
        </div>
    )
}

export function TimelineHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
                {children}
            </h2>
        </div>
    )
}

export function TimelineSeparator({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-4 flex items-center justify-between gap-4 w-full">
            <p className="text-xs font-bold text-foreground text-nowrap">
                {children}
            </p>
            <Separator className="flex-1" />
        </div>
    )
}

export function Timeline({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return <div className={cn("space-y-0", className)}>{children}</div>
}

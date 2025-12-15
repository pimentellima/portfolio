import { InboxIcon } from "lucide-react"
import { Button } from "./ui/button"
import { ComponentProps } from "react"

export function NotificationButton(props: ComponentProps<typeof Button>) {
    return (
        <Button
            {...props}
            aria-label="notification-button"
            size={"icon-sm"}
            variant={"outline"}
        >
            <InboxIcon />
        </Button>
    )
}

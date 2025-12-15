import { getRequestConfig } from "next-intl/server"
import { headers } from "next/headers"

export default getRequestConfig(async () => {
    const acceptLanguage = (await headers()).get("accept-language")
    console.log("Accept-Language:", acceptLanguage)
    let locale = "en"

    if (acceptLanguage?.startsWith("pt")) {
        locale = "pt-BR"
    }
    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    }
})

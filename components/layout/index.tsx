import { ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            {children}
        </>
    )
}

export { Layout }
import { ReactNode } from "react"
import { Header } from "@components/header"
import styled from "styled-components"

const RootComponent = styled.main`
    &{
        background-color: #3d5a80 ;
        margin-top: 12px;
        padding: 12px;
        width: 70%;
        margin: 0px auto;
        max-width: 1440px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 12px;
        box-shadow: 6px 6px 12px 6px #00000040;
    }
`

interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <RootComponent>
                {children}
            </RootComponent>
        </>
    )
}

export { Layout }
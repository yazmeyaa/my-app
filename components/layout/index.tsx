import { Fragment, ReactNode } from "react"
import { Header } from "@components/header"
import styled from "styled-components"

const RootComponent = styled.main`
    &{
        width: fit-content;
        margin: 0px auto;
        padding: 0px 2rem;
    }
`

interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <Fragment>
            <Header />
            <RootComponent>
                {children}
            </RootComponent>
        </Fragment>
    )
}

export { Layout }
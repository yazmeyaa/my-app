import { Fragment, ReactNode } from "react"
import { Header } from "@components/header"
import styled from "styled-components"
import { Footer } from "@components/footer"


const RootComponent = styled.main`
    &{
        position: relative;
        width: fit-content;
        margin: 0px auto;
        padding: 0px 2rem;
        flex: 1 0 auto;
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
            <Footer />
        </Fragment>
    )
}

export { Layout }
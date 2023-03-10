import { Fragment, ReactNode } from "react"
import { Header } from "@components/header"
import styled from "styled-components"
import { Footer } from "@components/footer"


const RootComponent = styled.main`
    &{
        max-width: 1440px;
        position: relative;
        width: auto;
        margin: 0px auto;
        padding: 0px 2rem;
        flex: 1 0 auto;
        margin-bottom: 80px;
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
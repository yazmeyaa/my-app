import Link from "next/link"
import { Container, StyledLink, NavigationLinks, NavLinkItem, Title } from "./styled"

function Header() {
    return (
        <Container>
            <Title>yazmeyaa</Title>
            <nav>
                <NavigationLinks>
                        <StyledLink href={'/'}>
                            <NavLinkItem>Главная</NavLinkItem>
                        </StyledLink>
                        <StyledLink href={'/projects'}>
                            <NavLinkItem>Проекты</NavLinkItem>
                        </StyledLink>
                        <StyledLink href={'/contacts'}>
                            <NavLinkItem>Контакты</NavLinkItem>
                        </StyledLink>
                </NavigationLinks>
            </nav>
        </Container>
    )
}

export { Header }

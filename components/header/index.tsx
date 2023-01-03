import { MouseEvent, useState } from "react"
import { Container, NavigationContainer, NavigationLink, NavigationList, StyledLogoLink, TextLogo } from "./styled"

function Header() {

    return (
        <Container>
            <StyledLogoLink href={'/'}><TextLogo>yazmeyaa</TextLogo></StyledLogoLink>
            <NavigationContainer>
                <NavigationList>
                    <NavigationLink href={'/'}><li>Обо мне</li></NavigationLink>
                    <NavigationLink href={'/projects'}><li>Проекты</li></NavigationLink>
                    <NavigationLink href={'/contacts'}><li>Контакты</li></NavigationLink>
                </NavigationList>
            </NavigationContainer>
        </Container>
    )
}

export { Header }

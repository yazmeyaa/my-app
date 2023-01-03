import { NavigationLink } from "@components/navigationLink/styled"
import { useRouter } from "next/router"
import { Container, NavigationContainer, NavigationList, StyledLogoLink, TextLogo } from "./styled"

const links = [
    {
        href: '/',
        text: 'Обо мне'
    },
    {
        href: '/projects',
        text: 'Проекты'
    },
    {
        href: '/contacts',
        text: 'Контакты'
    },
]

function Header() {

    const router = useRouter()
    const mappedLinks = links.map((link, index) => {
        const isCurrentLink = link.href === router.pathname
        return <NavigationLink
            color={'black'}
            key={index}
            href={link.href}
            current={isCurrentLink}
        >{link.text}</NavigationLink>
    })

    return (
        <Container>
            <StyledLogoLink href={'/'}><TextLogo>yazmeyaa</TextLogo></StyledLogoLink>
            <NavigationContainer>
                <NavigationList>
                    {mappedLinks}
                </NavigationList>
            </NavigationContainer>
        </Container>
    )
}

export { Header }

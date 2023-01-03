import { NavigationLink } from "@components/navigationLink/styled"
import { useRouter } from "next/router"
import { Container, Navigation } from "./styled"

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

function Footer() {
    const router = useRouter()
    const mappedLinks = links.map((link, index) => {
        const isCurrentLink = link.href === router.pathname
        return <NavigationLink color={'white'} key={index} href={link.href} current={isCurrentLink}>{link.text}</NavigationLink>
    })

    return (
        <Container>
            <nav>
                <Navigation>
                    {mappedLinks}
                </Navigation>
            </nav>
        </Container>
    )
}

export { Footer }

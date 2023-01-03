import { Container, Navigation, NavigationLink } from "./styled"

function Footer() {
    return (
        <Container>
            <nav>
                <Navigation>
                    <NavigationLink href={'/'}><li>Обо мне</li></NavigationLink>
                    <NavigationLink href={'/projects'}><li>Проекты</li></NavigationLink>
                    <NavigationLink href={'/contacts'}><li>Контакты</li></NavigationLink>
                </Navigation>
            </nav>
        </Container>
    )
}

export { Footer }

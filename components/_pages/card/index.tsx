import { StaticImageData } from "next/image"
import Link from "next/link"
import { CardInterface } from "types/cards"
import { ButtonsContainer, Container, Description, StyledImage, StyledLink, Title } from "./styled"




function Card({ name, description, img, href, githubUrl }: CardInterface) {
    return (
        <Container>
            {href ? <Link href={href} target='_blank'>
                <StyledImage alt={name} src={img} />
            </Link> : <StyledImage alt={name} src={img} />}

            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <ButtonsContainer>
                {href && <StyledLink href={href} target='_blank'>Смотреть в браузере</StyledLink>}
                {githubUrl && <StyledLink href={githubUrl} target="_blank">Открыть в Github</StyledLink>}
            </ButtonsContainer>
        </Container>
    )
}

export { Card }

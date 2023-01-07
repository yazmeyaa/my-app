import { StaticImageData } from "next/image"
import Link from "next/link"
import { Container, Description, StyledImage, StyledLink, Title } from "./styled"


interface CardProps {
    name: string
    description: string
    img: StaticImageData
    href: string
}

function Card({ name, description, img, href }: CardProps) {
    return (
        <Container>
            <Link href={href} target='_blank'>
                <StyledImage alt={name} src={img} />
            </Link>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <StyledLink href={href} target='_blank'>
                Смотреть в браузере
            </StyledLink>
        </Container>
    )
}

export { Card }

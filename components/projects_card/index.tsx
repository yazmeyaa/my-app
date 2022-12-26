import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { CardDescription, CardName, Container } from "./styled"

const StyledLink = styled(Link)`
    &{
        text-decoration: none;
    }
    &:visited {
        text-decoration: none;
    }
`

interface CardProps {
    name: string
    description: string
    img: StaticImageData
    href: string
}

function Card({ name, description, img, href }: CardProps) {
    return (
        <StyledLink href={href} target="_blank">
            <Container>
                <Image src={img.src} alt={name} width={img.width} height={img.height} />
                <CardName>{name}</CardName>
                <CardDescription>{description}</CardDescription>
            </Container>
        </StyledLink>
    )
}

export { Card }

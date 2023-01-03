import Image, { StaticImageData } from "next/image"
import { Container } from "./styled"


interface CardProps {
    name: string
    description: string
    img: StaticImageData
    href: string
}

function Card({ name, description, img, href }: CardProps) {
    return (
        <Container>
            {name}
        </Container>
    )
}

export { Card }

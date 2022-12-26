import { Card } from "@components/projects_card"
import { StaticImageData } from "next/image"
import React from "react"

interface CardInterface {
    name: string
    description: string
    href: string
    previewImage: StaticImageData
}

interface ProjectsProps {
    cards: CardInterface[]
}

export default function Projects({ cards }: ProjectsProps) {
    return <CardsComponent cards={cards} />
}


interface CardsProps {
    cards: CardInterface[]
}

function CardsComponent({ cards }: CardsProps) {
    return (
        <React.Fragment>
            {cards.map((item, index) => <Card key={index} name={item.name} description={item.description} href={item.href} img={item.previewImage} />)}
        </React.Fragment>
    )
}

export async function getStaticProps() {
    const response = await fetch(`http://localhost:3000/api/get_projects`)
    const cards = await response.json() as CardInterface[]
    return {
        props: {
            cards
        }
    }
}

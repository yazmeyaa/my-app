import { Card } from "@components/projects_card"
import { StaticImageData } from "next/image"
import React, { useEffect, useState } from "react"

interface CardInterface {
    name: string
    description: string
    href: string
    previewImage: StaticImageData
}

interface ProjectsProps {
    cards: CardInterface[]
}

export default function Projects() {
    const [projectList, setProjectList] = useState<CardInterface[]>([])
    useEffect(() => {
        fetch('/api/get_projects')
            .then(data => data.json())
            .then(setProjectList)
    }, [])
    return <CardsComponent cards={projectList} />
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

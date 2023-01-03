import { Card } from "@components/projects_card"
import { StaticImageData } from "next/image"
import React, { useEffect, useState } from "react"

interface CardInterface {
    name: string
    description: string
    href: string
    previewImage: StaticImageData
}

export default function CardsComponent() {
    const [projectList, setProjectList] = useState<CardInterface[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        setLoading(true)
        fetch('/api/get_projects')
            .then(data => data.json())
            .then(data => {
                setProjectList(data)
                setLoading(false)
            })
    }, [])

    return (
        <React.Fragment>
            {loading ? 'LOADING' : projectList.map((item, index) => <Card key={index} name={item.name} description={item.description} href={item.href} img={item.previewImage} />)}
        </React.Fragment>
    )
}

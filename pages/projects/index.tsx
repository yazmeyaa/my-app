import { Card } from '@components/_pages/card'
import { CardsContainer, PageContainer, PageDescription, Title } from '@components/_pages/projects'
import { withOpenGraph } from 'helpers/withOpenGraph'
import { useEffect, useState } from "react"
import { CardInterface } from 'types/cards'


function CardsComponent() {
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

    const MappedCards = projectList.map((item, key) => {
        return <Card key={key} {...item} />
    })


    return (
        <PageContainer>
            <Title>Мои проекты</Title>
            <PageDescription>Здесь находятся мои проекты: от самых новых до самых старых.</PageDescription>
            <CardsContainer>
                {loading ? <h1>Проекты загружаются...</h1> : MappedCards}
            </CardsContainer>
        </PageContainer>
    )
}

export default withOpenGraph(CardsComponent, {
    title: "Проекты",
    description: "Список разработанных мной проектов."
})
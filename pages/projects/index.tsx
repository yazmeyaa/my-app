import { Card } from '@components/_pages/card'
import { CardsContainer, PageContainer, PageDescription, Title } from '@components/_pages/projects'
import Head from 'next/head'
import { Fragment, useEffect, useState } from "react"
import { CardInterface } from 'types/cards'


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

    const MappedCards = projectList.map((item, key) => {
        return <Card key={key} {...item} />
    })


    return (
        <Fragment>
            <HeadersMeta />
            <PageContainer>
                <Title>Мои проекты</Title>
                <PageDescription>Здесь находятся мои проекты: от самых новых до самых старых.</PageDescription>
                <CardsContainer>
                    {loading ? <h1>Проекты загружаются...</h1> : MappedCards}
                </CardsContainer>
            </PageContainer>
        </Fragment>
    )
}

function HeadersMeta() {
    return (
        <Head>
            <meta property="og:title" content="Проекты" />
            <meta property="og:description" content="Список разработанных мной проектов." />
            <meta property="og:site_name" content="Евгений Антоненков" />
            <meta property="og:url" content="https://yazmeyaa.itracers.xyz/" />
            <meta property="og:type" content="article" />
            <meta property="og:image" content="https://yazmeyaa.itracers.xyz/images/my_photo.jpg" />
            <meta property="og:image:width" content="630" />
            <meta property="og:image:height" content="630" />
        </Head>
    )
}

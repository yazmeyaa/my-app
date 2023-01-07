import Head from 'next/head';
import MyPhoto from 'public/images/my_photo.jpg'
import { Fragment } from 'react';
import { About, ContentContainer, DownloadButton, StyledImage } from "@components/_pages";

export default function Home() {
  const now = new Date()
  const birth = new Date('Sun Jun 14 1998 12:00:00 GMT+0400 (Москва, летнее время)')
  const currentYears = now.getFullYear() - birth.getFullYear()
  const correctedYears = now.getMonth() < 6 ? currentYears - 1 : currentYears

  return (
    <Fragment>
      <Head>
        <meta property="og:title" content="Fullstack NextJS разработчик." />
        <meta property="og:description" content="С большим удовольствием готов принять участие в каком-нибудь проекте или обсудить любые другие вопросы." />
        <meta property="og:site_name" content="Евгений Антоненков" />
        <meta property="og:url" content="https://yazmeyaa.itracers.xyz/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://yazmeyaa.itracers.xyz/images/my_photo.jpg" />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:height" content="630" />
      </Head>
      <ContentContainer>
        <About>
          <h1>
            Разрабатываю WEB-приложения. Делаю классно и быстро.
          </h1>
          <br />
          <h2>
            Fullstack-разработчик
          </h2>

          <small>
            Привет, меня зовут Евгений, мне {correctedYears} года. Занимаюсь разработкой два года с использованием всех современных технологий. На этой странице Вы сможете найти список моих работ, которые я разрабатывал: от самых первых до ныне разрабатываемых, а также способы связаться со мной.
          </small>
          <DownloadButton href='/CV.pdf' target="_blank">Скачать резюме →</DownloadButton>
        </About>
        <StyledImage src={MyPhoto} alt='My photo <3' priority />
      </ContentContainer>
    </Fragment >
  )
}

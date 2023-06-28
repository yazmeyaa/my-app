import MyPhoto from 'public/images/my_photo.jpg'
import { About, ContentContainer, DownloadButton, StyledImage } from "@components/_pages";
import { withOpenGraph } from 'helpers/withOpenGraph';

function Home() {
  const now = new Date()
  const birth = new Date('Sun Jun 14 1998 12:00:00 GMT+0400 (Москва, летнее время)')
  const currentYears = now.getFullYear() - birth.getFullYear()
  const correctedYears = now.getMonth() < 5 ? currentYears - 1 : currentYears

  return (
    <ContentContainer>
      <About>
        <h1>Разрабатываю WEB-приложения. Классно и быстро.</h1>
        <br />
        <h2>Fullstack-разработчик</h2>
        <p>Привет, меня зовут Евгений, мне {correctedYears} года. Занимаюсь разработкой два года с использованием всех современных технологий. На этом сайте есть список моих работ, а также способы связаться со мной.</p>
        <DownloadButton href='/CV.pdf' target="_blank">Скачать резюме →</DownloadButton>
      </About>
      <StyledImage src={MyPhoto} alt='My photo <3' priority />
    </ContentContainer>
  )
}


export default withOpenGraph(Home, {
  title: "Fullstack NextJS разработчик.",
  description: "С большим удовольствием готов принять участие в каком-нибудь проекте или обсудить любые другие вопросы."
})
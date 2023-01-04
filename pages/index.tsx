import MyPhoto from 'public/images/my_photo.jpg'
import { About, ContentContainer, DownloadButton, StyledImage } from "styles";

export default function Home() {
  const now = new Date()
  const birth = new Date('Sun Jun 14 1998 12:00:00 GMT+0400 (Москва, летнее время)')
  const currentYears = now.getFullYear() - birth.getFullYear()
  const correctedYears = now.getMonth() < 6 ? currentYears - 1 : currentYears

  return (
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
          Привет, меня зовут Евгений, мне {correctedYears} года. Занимаюсь разработкой два года с использованием всех современных технологий. На этой странице Вы сможете найти небольшой список моих работ, которые я делал от самых первых, до ныне разрабатываемых. 
        </small>
        <DownloadButton href='/CV.pdf' target="_blank">Скачать резюме →</DownloadButton>
      </About>
      <StyledImage src={MyPhoto} alt='My photo <3' priority />
    </ContentContainer>
  )
}

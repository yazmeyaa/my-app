import { Button, ContactsBlock, Container, Form, TextArea, TextField } from "styles/contacts"
import Telegram from 'assets/icons/telegram.svg'
import VK from 'assets/icons/vk.svg'
import Mail from 'assets/icons/mail.svg'
import { GithubSVG } from "assets/icons/github"
import { FormEvent, Fragment, useState } from "react"
import Link from "next/link"
import axios from "axios"
import Head from "next/head"

function Contacts() {
    const [loading, setLoading] = useState<boolean>(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        const send_message_epoch = localStorage.getItem('send_message_epoch')
        if (send_message_epoch && (Date.now() - Number(send_message_epoch) < 60000)) {
            const seconds = Math.floor((60000 - (Date.now() - Number(send_message_epoch))) / 1000)
            return alert(`Для следующей отправки сообщения нужно подождать ${seconds} секунд`)
        }
        setName('')
        setEmail('')
        setMessage('')
        setLoading(true)
        const formData = new FormData(event.currentTarget)
        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')

        axios.post<{ message: string }>('/api/send_message', {
            data: {
                name: name,
                email: email,
                message: message
            }
        })
            .then(() => {
                localStorage.setItem('send_message_epoch', String(Date.now()))
                alert('Отправлено!')
            })
            .catch(console.log)
            .finally(() => setLoading(false))
    }

    return (
        <Fragment>
            <Head>
                <meta property="og:title" content="Контакты" />
                <meta property="og:description" content="Найти контакты или отправить сообщение. " />
                <meta property="og:site_name" content="Евгений Антоненков" />
                <meta property="og:url" content="https://yazmeyaa.itracers.xyz/" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://yazmeyaa.itracers.xyz/images/my_photo.jpg" />
                <meta property="og:image:width" content="630" />
                <meta property="og:image:height" content="630" />
            </Head>
            <Container>
                <ContactsBlock>
                    <Link href="https://t.me/future_undefined" target="_blank">
                        <Telegram />
                    </Link>
                    <Link href="https://vk.com/yazmeyaaa" target="_blank">
                        <VK />
                    </Link>
                    <Link href="mailto:evgenijantonenkov456@gmail.com" target="_blank">
                        <Mail />
                    </Link>
                    <Link href="https://github.com/yazmeyaa" target="_blank">
                        <GithubSVG />
                    </Link>
                </ContactsBlock>
                <Form onSubmit={handleSubmit}>
                    <label>
                        <span>Имя</span>
                        <TextField name="name" value={name} onChange={(event) => {
                            setName(event.target.value)
                        }} />
                    </label>
                    <label>
                        <span>Email</span>
                        <TextField name="email" value={email} onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                    </label>
                    <label>
                        <span>Сообщение</span>
                        <TextArea name="message" value={message} onChange={(event) => {
                            setMessage(event.target.value)
                        }} />
                    </label>
                    <Button type="submit">Свяжитесь со мной</Button>
                    {loading && 'Загрузка!'}
                </Form>
            </Container>
        </Fragment>

    )
}

export default Contacts
import { Button, ContactsBlock, Container, ErrorText, Form, TextArea, TextField } from "@components/_pages/contacts"
import Telegram from 'assets/icons/telegram.svg'
import VK from 'assets/icons/vk.svg'
import Mail from 'assets/icons/mail.svg'
import GithubSVG from "assets/icons/github.svg"
import { FormEvent, Fragment, useState } from "react"
import Link from "next/link"
import axios from "axios"
import Head from "next/head"
import { useForm } from "react-hook-form"
import { Modal } from "@components/modal"

interface FormValues {
    name: string
    email: string
    message: string
}

function Contacts() {
    const [showModal, setShowModal] = useState(false)
    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm<FormValues>({
        mode: "all"
    })

    function onModalClose() {
        setShowModal(false)
    }

    const onSubmit = (data: FormValues) => {

        axios.post('/api/send_message', {
            data
        })
            .then(() => {
                reset()
                setShowModal(true)
            })
    }

    return (
        <Fragment>
            <HeadersMeta />
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
                <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <span>Имя</span>
                        <TextField {...register("name", {
                            required: "Поле обязательно для заполнения", maxLength: {
                                message: "Предел символов для ввода — 42",
                                value: 42
                            }
                        })}
                            autoComplete='off' />
                        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                    </label>
                    <label>
                        <span>Email</span>
                        <TextField type="email" {...register("email", {
                            required: "Поле обязательно для заполнения", maxLength: {
                                message: "Предел символов для ввода — 50",
                                value: 50
                            },
                            pattern: {
                                message: "Введён некорректный email",
                                value: /^\S+@\S+\.\S+$/i
                            }
                        })}
                            autoComplete='off' />
                        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                    </label>
                    <label>
                        <span>Сообщение</span>
                        <TextArea {...register("message", {
                            required: "Поле обязательно для заполнения",
                            maxLength: {
                                message: "Предел символов для ввода — 500",
                                value: 500
                            },
                        })} />
                        {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
                    </label>
                    <Button type="submit" disabled={!isValid}>Свяжитесь со мной</Button>
                    {false && 'Загрузка!'}
                </Form>
            </Container>
            <Modal onClose={onModalClose} show={showModal} title="Успех!"> Сообщение успешно доставлено!</Modal>
        </Fragment>

    )
}

export default Contacts

function HeadersMeta() {
    return (
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
    )
}

import { Button, ContactsBlock, Container, ErrorText, Form, FormTitle, TextArea, TextField } from "@components/_pages/contacts"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Modal } from "@components/modal"
import { withOpenGraph } from "helpers/withOpenGraph"
import Telegram from 'assets/icons/telegram.svg'
import VK from 'assets/icons/vk.svg'
import Mail from 'assets/icons/mail.svg'
import GithubSVG from "assets/icons/github.svg"
import Link from "next/link"
import axios from "axios"

interface FormValues {
    name: string
    email: string
    message: string
}

function Contacts() {
    const [showModal, setShowModal] = useState(false)
    const { register, formState, handleSubmit, reset } = useForm<FormValues>({
        mode: "all"
    })

    function onModalClose() {
        setShowModal(false)
    }

    const onSubmit = async (data: FormValues) => {
        return axios.post('/api/send_message', {
            data
        })
            .then(() => {
                reset()
                setShowModal(true)
            })
    }

    return (
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
                <FormTitle>Написать мне сообщение</FormTitle>
                <label>
                    <span>Имя</span>
                    <TextField {...register("name", {
                        required: "Поле обязательно для заполнения", maxLength: {
                            message: "Предел символов для ввода — 42",
                            value: 42
                        }
                    })}
                        autoComplete='off' />
                    {formState.errors.name && <ErrorText>{formState.errors.name.message}</ErrorText>}
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
                    {formState.errors.email && <ErrorText>{formState.errors.email.message}</ErrorText>}
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
                    {formState.errors.message && <ErrorText>{formState.errors.message.message}</ErrorText>}
                </label>
                <Button type="submit" disabled={formState.isSubmitting || !formState.isValid}>Отправить</Button>
                {false && 'Загрузка!'}
            </Form>
            <Modal onClose={onModalClose} show={showModal} title="Успех!"> Сообщение успешно доставлено!</Modal>
        </Container>
    )
}

export default withOpenGraph(Contacts, {
    title: "Контакты",
    description: "Найти контакты или отправить сообщение."
})

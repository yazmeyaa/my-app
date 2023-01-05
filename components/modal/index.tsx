import { ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { CloseButton, Container, Content, Title } from "./styled"

interface ModalProps {
    children: ReactNode
    title: string
    show: boolean
    onClose: () => void
}



function Modal({ show, children, title, onClose }: ModalProps) {
    const [isBrowser, setIsBrowser] = useState(false)

    const ModalContent = show ? (
        <Container>
            <Content>
                <Title>{title}</Title>
                <CloseButton onClick={onClose}>X</CloseButton>
                <div>
                    {children}
                </div>
            </Content>
        </Container>
    ) : null

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    if (isBrowser) {
        return createPortal(ModalContent, document.getElementById('modal')!)
    } else return null
}


export { Modal }

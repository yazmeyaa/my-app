import { StaticImageData } from "next/image"

export interface CardInterface {
    name: string
    description: string
    href: string
    img: StaticImageData
    githubUrl: string
}
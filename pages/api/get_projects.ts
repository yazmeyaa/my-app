import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { StaticImageData } from "next/image";


interface CardInterface {
    name: string
    description: string
    href: string
    img: StaticImageData
}

const cards: CardInterface[] = [
    {
        name: 'Мой сайт',
        description: 'Сайт обо мне, моих проектах и прочем. Собственно, Вы здесь и находитесь. Технологии: NextJS, styled-components',
        href: 'https://yazmeyaa.itracers.xyz',
        img: require('assets/images/myWebsite.png')
    },
    {
        name: 'Aita GameBot',
        description: 'Игровой бот в Telegram, написанный на node-telegram-bot-api, MySQL, Redis',
        href: 'https://t.me/aitagame_bot',
        img: require('assets/images/aita_bot.png').default
    },
    {
        name: 'Погода',
        description: 'Получение текущей погоды и прогноза с использованием ReactJS и ExpressJS',
        href: 'https://itracers.xyz/temp/yazmeyaa/weatherapp/',
        img: require('assets/images/weather.png').default
    },
    {
        name: 'Скринер',
        description: 'Получение случайных изображений с интервалом',
        href: 'https://itracers.xyz/temp/yazmeyaa/screens/',
        img: require('assets/images/screener.png').default
    },
    {
        name: 'Звёзды',
        description: 'Симуляция полёта через звёзды на canvasAPI',
        href: 'https://itracers.xyz/temp/yazmeyaa/stars/',
        img: require('assets/images/stars.png').default
    },
    {
        name: 'Кубики',
        description: 'Летящие кубики, которые избегают курсор',
        href: 'https://itracers.xyz/temp/yazmeyaa/cubes/',
        img: require('assets/images/cubes.png').default
    },
    {
        name: 'Таймер до Нового года',
        description: 'Небольшая сцена на canvasAPI с отсчётом времени до Нового года',
        href: 'https://itracers.xyz/temp/yazmeyaa/snowflake/',
        img: require('assets/images/newYear.png').default
    }
]

export default function handler(
    _: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).send(JSON.stringify(cards))
}
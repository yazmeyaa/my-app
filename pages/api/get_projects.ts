import { NextApiRequest, NextApiResponse } from "next";
import { CardInterface } from "types/cards";



const cards: CardInterface[] = [
    {
        name: 'WebGL Cube',
        description: 'Трёхмерный куб, который можно вращать в пространстве. Выполнено с использованием WebGL.',
        href: 'https://yazmeyaa.github.io/webgl_cube3d/',
        img: require('assets/images/webgl_cube.png'),
        githubUrl: "https://github.com/yazmeyaa/webgl_cube3d"
    },
    {
        name: 'WebGL Clock',
        description: 'Аналоговые часы выполненые с технологией WebGL.',
        href: 'https://yazmeyaa.github.io/webgl_clock/',
        img: require('assets/images/webgl_clock.png'),
        githubUrl: "https://github.com/yazmeyaa/webgl_clock"
    },
    {
        name: 'Modern Spreadsheet',
        description: 'Основанная на CanvasAPI таблица. Поддержка нативного скрола, высокая производительность, с лёгкостью может рендерить миллионы клеток. Опубликовано в npmjs.com.',
        href: 'https://yazmeyaa.github.io/modern_spreadsheet/',
        img: require('assets/images/spreadsheet.png').default,
        githubUrl: "https://github.com/yazmeyaa/modern_spreadsheet"
    },
    {
        name: 'Mafia game',
        description: 'Fullstack приложение для игры в мафию. Стек: Turborepo, SvelteKit, ExpressJS.',
        img: require('assets/images/mafia.png').default,
        githubUrl: "https://github.com/yazmeyaa/mafia_game"
    },
    {
        name: 'Virtual scrolling table',
        description: 'Пример выполнения виртуальной прокрутки элемента. В DOM-дерево монтируется лишь то, что может попасть во вьюпорт, а всё остальное пространство занимают пустые блоки с динамической высотой.',
        href: 'https://yazmeyaa.github.io/virtual_scroll_table/',
        img: require('assets/images/virtualScroll.png'),
        githubUrl: "https://github.com/yazmeyaa/virtual_scroll_table"
    },
    {
        name: 'Мой сайт',
        description: 'Сайт обо мне и моих проектах. Собственно, Вы здесь и находитесь. Технологии: NextJS, styled-components',
        href: 'https://yazmeyaa.itracers.xyz',
        img: require('assets/images/myWebsite.png'),
        githubUrl: "https://github.com/yazmeyaa/my-app"
    },
    {
        name: 'Aita GameBot',
        description: 'Игровой бот в Telegram, написанный на node-telegram-bot-api, MySQL, Redis',
        href: 'https://t.me/aitagame_bot',
        img: require('assets/images/aita_bot.png').default,
        githubUrl: "https://github.com/aitagame/aita_tg_bot"
    },
    {
        name: 'Погода',
        description: 'Текущая погода и прогноз. Использованы ReactJS и ExpressJS',
        href: 'https://itracers.xyz/temp/yazmeyaa/weatherapp/',
        img: require('assets/images/weather.png').default,
        githubUrl: "https://github.com/yazmeyaa/weather-app-frontend"
    },
    {
        name: 'Скринер',
        description: 'Получение случайных изображений с интервалом',
        href: 'https://itracers.xyz/temp/yazmeyaa/screens/',
        img: require('assets/images/screener.png').default,
        githubUrl: "https://github.com/yazmeyaa/screener"   
    },
    {
        name: 'Звёзды',
        description: 'Симуляция полёта через звёзды на canvasAPI',
        href: 'https://itracers.xyz/temp/yazmeyaa/stars/',
        img: require('assets/images/stars.png').default,
        githubUrl: "https://github.com/yazmeyaa/starwalk"
    },
    {
        name: 'Кубики',
        description: 'Летящие кубики, которые избегают курсор',
        href: 'https://itracers.xyz/temp/yazmeyaa/cubes/',
        img: require('assets/images/cubes.png').default,
        githubUrl: "https://github.com/yazmeyaa/cubes"
    },
    {
        name: 'Таймер до Нового года',
        description: 'Небольшая сцена на canvasAPI с отсчётом времени до Нового года',
        href: 'https://itracers.xyz/temp/yazmeyaa/snowflake/',
        img: require('assets/images/newYear.png').default,
        githubUrl: "https://github.com/yazmeyaa/snowFlake"
    }
]

export default function handler(
    _: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).send(JSON.stringify(cards))
}
import { NextApiRequest, NextApiResponse } from "next";
import TelegramBot from 'node-telegram-bot-api'
import NextCors from 'nextjs-cors'

interface RequestWithBody extends NextApiRequest {
    body: {
        data: {
            name: string
            email: string
            message: string
        }

    }
}

export default async function getWeatherByCityName(req: RequestWithBody, res: NextApiResponse) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const API_KEY = process.env.TELEGRAM_BOT_API_KEY
    const myChatId = 279603779
    if (!API_KEY) throw new Error('NO API KEY PROVIDED')
    const bot = new TelegramBot(API_KEY, {
        polling: false
    })
    const data = req.body.data
    const fromWebMessage = `
Отправитель: ${data.name}
Почтовый адрес: ${data.email}
Сообщение: ${data.message}    
`
    bot.sendMessage(myChatId, fromWebMessage)
    res.status(200).send({ message: 'ok' })
}

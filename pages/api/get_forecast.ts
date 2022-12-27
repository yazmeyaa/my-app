import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

import debug from '@utils/addPrefixToLog'

interface RequestWithData extends NextApiRequest {
    query: {
        city: string
        days: string
    }
}


export default async function hanlder(req: RequestWithData, res: NextApiResponse) {
    const { days, city } = req.query
    const secretAPIkey = process.env.WEATHER_API_KEY

    if (!secretAPIkey) {
        const errorMessage = 'WEATHER_API_KEY IS REQUIRED'
        debug(errorMessage)
        throw new Error(errorMessage)
    }

    if (!days || !city) {
        debug(`missing required params ${city} ${days}`)
        return res.status(400).send({
            error: 'missing required params'
        })
    }

    axios({
        url: 'http://api.weatherapi.com/v1/forecast.json',
        method: 'GET',
        params: {
            key: secretAPIkey,
            q: city,
            days: days
        },
        headers: {
            "Accept-Encoding": "*"
        }
    })
        .then(data => {
            return res.status(200).send(data.data)
        })
        .catch(() => {
            return res.status(200).send({
                error: 'Something wrong'
            })
        })

}
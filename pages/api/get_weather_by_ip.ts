import axios from 'axios'
import { AddressInfo, isIP } from 'net'
import { NextApiRequest, NextApiResponse } from 'next'
import debug from '@utils/addPrefixToLog'
import requestIp from 'request-ip'


export default async function getWeatherByIP(req: NextApiRequest, res: NextApiResponse) {

    const secretAPIkey = process.env.WEATHER_API_KEY
    const clientIPaddress = requestIp.getClientIp(req)

    if(!clientIPaddress) {
        debug(`No ip address: ${clientIPaddress}`)
        return res.status(400).send({
            error: 'Internal error'
        })
    }

    if (!isIP(clientIPaddress)) {
        debug(`wrong ip address recieved ${clientIPaddress}`)
        return res.status(400).send({ error: 'wrong ip address recieved' })
    }

    if (!secretAPIkey) {
        debug('WEATHER_API_KEY IS REQUIRED')
        throw new Error('WEATHER_API_KEY IS REQUIRED')
    }

    axios({
        url: 'http://api.weatherapi.com/v1/current.json',
        method: 'GET',
        params: {
            key: secretAPIkey,
            lang: 'ru',
            q: clientIPaddress
        },
        headers: {
            "Accept-Encoding": "*"
        }
    })
        .then(data => {
            return res.status(200).send(data.data)
        })
        .catch(responseError => {
            if (axios.isAxiosError(responseError)) {
                debug(responseError.message)
                return res.status(400).send({
                    error: 'something wrong',
                    errorMessage: responseError.message,
                    ip: clientIPaddress
                })
            }
        })
}
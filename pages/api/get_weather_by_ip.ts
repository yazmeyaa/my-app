import axios from 'axios'
import { AddressInfo, isIP } from 'net'
import { NextApiRequest, NextApiResponse } from 'next'
import debug from '@utils/addPrefixToLog'


export default async function getWeatherByIP(req: NextApiRequest, res: NextApiResponse) {

    const secretAPIkey = process.env.WEATHER_API_KEY
    const clientIPaddress = req.socket.address() as AddressInfo

    if (!isIP(clientIPaddress.address)) {
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
                    errorMessage: responseError.message
                })
            }
        })
}
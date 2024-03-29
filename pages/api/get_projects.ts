import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("http://151.115.33.89:17645/api/projects");
  const cards = await response.json()
  res.status(200).send(JSON.stringify(cards.data));
}

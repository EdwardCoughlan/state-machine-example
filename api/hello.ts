import { NowRequest, NowResponse } from '@vercel/node'

const request = (request: NowRequest, response: NowResponse) => {
  const { name = 'World' } = request.query;

  response.status(200).send(`Hello ${name}!`)
}

export default request;

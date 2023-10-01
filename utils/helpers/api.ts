import { __host__, __port__, __site__ } from './constants'
import axios from 'axios'

export const NotImplemented = (file?: string) => {
  return { code: 500, message: `${file ? file + ': ' : ''}Not implemented` }
}

export const apiUrl = (url: string) => `/api/${url}`

const postData = (body: any) => {
  return {
    ...body,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }
}

export const parseResponse = (response: any) =>
  JSON.parse(JSON.stringify(response))

export const getApi = async <T>(url: string): Promise<T | any> => {
  return parseResponse((await axios.get(apiUrl(url))).data)
}

export const sendApi = async (url: string, body: any) => {
  const sendTo = apiUrl(url)
  const post = postData({ ...body })
  return axios.post(sendTo, post)
}

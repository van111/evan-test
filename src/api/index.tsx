import Axios from 'axios'
import { QueryStringParams, Payload } from './types'
import { parseErrors } from './utils'

const api_url = process.env.LHX_API_HOST
const headers = {}

export const getApi = async (endpoint: string, params: QueryStringParams) => {
  const url = `${api_url}/${endpoint}?${params}`
  const response = Axios.get(
    url,
    headers
  ).catch((e) => parseErrors(e))

  return response
}

export const postApi = async (endpoint: string, payload: Payload) => {
  const url = `${api_url}/${endpoint}`
  const response = Axios.post(
    url,
    payload,
    headers
  ).catch((e) => parseErrors(e))

  return response
}

export const patchApi = async (endpoint: string, payload: Payload) => {
  const url = `${api_url}/${endpoint}`
  const response = Axios.patch(
    url,
    payload,
    headers
  ).catch((e) => parseErrors(e))

  return response
}

export const putApi = async (endpoint: string, payload: Payload) => {
  const url = `${api_url}/${endpoint}`
  const response = Axios.patch(
    url,
    payload,
    headers
  ).catch((e) => parseErrors(e))

  return response
}

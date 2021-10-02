import axios from 'axios';
import {config} from "../config";
import useSWR from "swr";

const BASE_URL = `${config.url.API_URL}`


let axiosPublicRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 35000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

/**
 * fetcher used in SWR requests. It uses axiosPublicRequest as its transport
 * adapter as this will allow for interceptors in the future.
 * @param url
 * @returns {Promise<AxiosResponse<any>>}
 */
const fetcher = (url) => axiosPublicRequest.get(url).then(res => res.data)

/**
 * Create a new short link from user supplied input in the form field
 * @param data
 * @returns {Promise<unknown>}
 */
const createShortLink = async (data) => {
  return axiosPublicRequest.post(`/new`, data)
    .then((response) => {
      return Promise.resolve(response.data)
    }).catch((error) => {
      return Promise.reject(error)
    })
}

/**
 * Retrieve a single link by its hash
 * @param hash
 * @returns {Promise<unknown>}
 */
const axiosShortLink = async (hash) => {
  return axiosPublicRequest.get(`${hash}`)
    .then((response) => {
      return Promise.resolve(response.data)
    }).catch((error) => {
      console.log(error)
      return Promise.reject(error)
    })
}

/**
 * SWR fetcher for data/analytics. Using SWR so we get updates as they arrive.
 * @param hash
 */
function getLinkQuery(hash) {
  const {
    data,
    error,
    mutate
  } = useSWR([`${hash}/query`, hash], fetcher)
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
    mutate: mutate
  }
}

export {createShortLink, getLinkQuery, axiosShortLink}

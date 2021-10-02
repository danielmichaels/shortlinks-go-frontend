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

// Link Analytics/Data queries
/**
 * Retrieve data/analytics on a given url from its hash
 * @param hash
 * @returns {Promise<unknown>}
 */
const axiosShortLinkQuery = async (hash) => {
  return axiosPublicRequest.get(`${hash}/query`)
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
 * @returns {{isLoading: boolean, mutate: KeyedMutator<any>, isError: any, data: any}}
 */
function getLinkQuery(hash) {
  const {
    data,
    error,
    mutate
  } = useSWR(hash ? `${hash}` : undefined, axiosShortLink(hash))

  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
    mutate: mutate
  }
}

export {createShortLink, getLinkQuery, axiosShortLink, axiosShortLinkQuery}

import axios, { AxiosRequestConfig } from 'axios'
import { HEADERS } from 'global';
import { RequestConfig } from 'models/request';
import { Response } from 'models/response'
import { StatusCode } from 'models/status-code';

const AppApi = () => {
  const getAllProducts = async () => {
    const config: AxiosRequestConfig<RequestConfig> = {
      method: 'get',
      url: 'https://imcetron-backend-dev.herokuapp.com/api/items',
      headers: HEADERS
    };
    const { status, data, request } = await axios(config)

    if (status == StatusCode.Ok) return data

    const { errors } = request
    throw errors
  }

  const getProductByID = async (productID: string) => {
    const config: AxiosRequestConfig<RequestConfig> = {
      method: 'get',
      url: `https://imcetron-backend-dev.herokuapp.com/api/item/${productID}`,
      headers: HEADERS
    };
    const { status, data, request } = await axios(config)

    if (status == StatusCode.Ok) return data

    const { errors } = request
    throw errors
  }

  return {
    getAllProducts,
    getProductByID
  }
}

export default AppApi
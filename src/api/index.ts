import axios, { AxiosRequestConfig } from 'axios'
import { HEADERS } from 'global';
import { RequestConfig } from 'models/request';
import { StatusCode } from 'models/status-code';
import { GetAllProductsArgs } from 'models'

const AppApi = () => {
  const getAllProducts = async (args: GetAllProductsArgs) => {
    const body: any = {
      args: args
    }

    const config: AxiosRequestConfig<RequestConfig> = {
      method: 'post',
      url: 'https://imcetron-backend-dev.herokuapp.com/api/items',
      headers: HEADERS,
      data: body
    };

    const { status, data, request } = await axios(config)

    if (status === StatusCode.Ok) return data

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

    if (status === StatusCode.Ok) return data

    const { errors } = request
    throw errors
  }

  const getAllCategories = async () => {
    const config: AxiosRequestConfig<RequestConfig> = {
      method: 'get',
      url: `https://imcetron-backend-dev.herokuapp.com/api/categories`,
      headers: HEADERS
    };
    const { status, data, request } = await axios(config)

    if (status === StatusCode.Ok) return data

    const { errors } = request
    throw errors
  }

  const getAllBrands = async () => {
    const config: AxiosRequestConfig<RequestConfig> = {
      method: 'get',
      url: `https://imcetron-backend-dev.herokuapp.com/api/brands`,
      headers: HEADERS
    };
    const { status, data, request } = await axios(config)

    if (status === StatusCode.Ok) return data

    const { errors } = request
    throw errors
  }
  return {
    getAllProducts,
    getProductByID,
    getAllCategories,
    getAllBrands
  }
}

export default AppApi
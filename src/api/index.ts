import axios, { AxiosRequestConfig } from 'axios'
import { HEADERS } from 'global';
import { ProductBodyRequest } from 'models/products';
import { RequestConfig } from 'models/request';
import { Response } from 'models/response'
import { StatusCode } from 'models/status-code';

const AppApi = () => {
  const getAllProducts = async () => {
    const body: any = {
      args: {
        brand: null,
        category: "Niveles de aceite",
        page: 1,
        size: 12
      }
    }

    const config: AxiosRequestConfig<RequestConfig> = {
      method: 'post',
      url: 'https://imcetron-backend-dev.herokuapp.com/api/items',
      headers: HEADERS,
      data: body
    };
    
    const { status, data, request } = await axios(config)
    console.log("\n\ndata")
    console.log(data)
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
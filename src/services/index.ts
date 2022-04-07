import AppApi from "api"

export const AppService = () => {
  const appApi = AppApi()

  const getAllProducts = async () => {
    try {
      const products = await appApi.getAllProducts()
      return products
    } catch (error) {
      console.log(error)
    }
  }

  const getProductByID = async (productID: string) => {
    try {
      const product = await appApi.getProductByID(productID)
      return product
    } catch (error) {
      console.log(error)
    }
  }

  return { getAllProducts, getProductByID }
}
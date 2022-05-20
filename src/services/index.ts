import AppApi from "api"
import 'antd/dist/antd.css';
import { GetAllProductsArgs } from "models";

export const AppService = () => {
  const appApi = AppApi()

  const getAllProducts = async (args: GetAllProductsArgs) => {
    try {
      const products = await appApi.getAllProducts(args)
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

  const getAllCategories = async () => {
    try {
      const categories = await appApi.getAllCategories()
      return categories
    } catch (error) {
      console.log(error)
    }
  }

  const getAllBrands = async () => {
    try {
      const brands = await appApi.getAllBrands()
      return brands
    } catch (error) {
      console.log(error)
    }
  }

  return { getAllProducts, getProductByID, getAllCategories, getAllBrands }
}
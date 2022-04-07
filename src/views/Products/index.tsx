import { Product } from 'models/products'
import { useEffect, useState } from 'react'
import { AppService } from 'services'
import { HeaderProducts, ProductsViewContaiener } from './sections'
import './styles.scss'

const Products = () => {
  const appService = AppService()
  const [products, setProducts] = useState<Product[] | null>(null)
  useEffect(() => {
    const getAllProducts = async () => {
      const { message } = await appService.getAllProducts()

      setProducts(message)
    }
    getAllProducts()
  }, [])
  return (
    <main className="productsListViewContainer">
      <HeaderProducts />
      <ProductsViewContaiener data={products} />
    </main>
  )
}

export default Products

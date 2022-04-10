import { Product } from 'models/products'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { AppService } from 'services'
import { HeaderProducts, ProductsViewContaiener } from './sections'

const ProductsListViewContainer = styled.main`
  background-color: white;
  padding: 6rem 0 2rem;
  display: block;
`

const Products = () => {
  const appService = AppService()
  const [products, setProducts] = useState<Product[] | null>(null)
  useEffect(() => {
    const getAllProducts = async () => {
      const { message } = await appService.getAllProducts()
      setProducts(message.docs)
    }
    getAllProducts()
  }, [])
  return (
    <ProductsListViewContainer className="productsListViewContainer">
      <HeaderProducts />
      <ProductsViewContaiener data={products} />
    </ProductsListViewContainer>
  )
}

export default Products

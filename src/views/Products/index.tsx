import { HeaderProducts, ProductsViewContaiener } from './sections'
import './styles.scss'

const Products = () => {
  return (
    <main className='productsListViewContainer'>
      <HeaderProducts />
      <ProductsViewContaiener />
    </main>
  )
}

export default Products

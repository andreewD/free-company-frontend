import { Filter } from 'components'
import './styles.scss'

const ProductsViewContaiener = () => {
  return (
    <section className="productsViewContaiener">
      <div className="filtersContainer">
        <div className="filterByBrand">
          <Filter label="Marcas" title="- Seleccione marca -" />
          <Filter label="Categorías" title="Todos los productos" />
        </div>
        <div className="filterByCategory"></div>
      </div>
      <div className="productsListContainer"></div>
    </section>
  )
}

export default ProductsViewContaiener

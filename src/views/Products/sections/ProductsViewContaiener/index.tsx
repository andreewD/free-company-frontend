import { Card, Filter } from 'components'
import './styles.scss'
import Pagination from '@mui/material/Pagination'

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
      <div className="productsListContainer">
        <div className="cardsList">
          <Card />
        </div>
        <Pagination count={10} color="primary" />
      </div>
    </section>
  )
}

export default ProductsViewContaiener

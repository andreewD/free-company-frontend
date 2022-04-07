import { Card, Filter } from 'components'
import './styles.scss'
import Pagination from '@mui/material/Pagination'
import { FC, useEffect } from 'react'
import { Product } from 'models/products'

interface ProductsViewProps {
  data: Product[] | null
}

const ProductsViewContaiener: FC<ProductsViewProps> = (props) => {
  const { data } = props
  useEffect(() => {
    console.log(data)
  }, [data])
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
        {data !== null ? (
          <div className="cardsList">
            {data.map((e) => {
              return <Card key={e.id} {...e} />
            })}
          </div>
        ) : (
          <div>CARGANDO...</div>
        )}
        <Pagination count={10} color="primary" />
      </div>
    </section>
  )
}

export default ProductsViewContaiener

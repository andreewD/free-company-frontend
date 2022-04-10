import { Pagination } from 'antd'
import styled from 'styled-components'
import { Card, Filter, Spinner } from 'components'
import { FC } from 'react'
import { Product } from 'models/products'

const CustomProductsView = styled.section`
  padding: 2rem;
  width: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  .filterByBrand {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  .productsListContainer {
    width: 100%;
    margin: 48px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    .cardsList {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
    .spinnerProductsList {
      width: 100%;
      min-height: calc(100vh - 25rem);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
const PaginationContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CustomPagination = styled(Pagination)`
  & > * {
    margin: 0 !important;
    color: black;
    font-weight: 600;
  }
  .ant-pagination-prev {
    margin: 0 1rem 0 0 !important;
    background: #f4f4f4;
    border-radius: 100% !important;
    overflow: hidden;
    * {
      border: none;
      background: none;
    }
  }
  .ant-pagination-next {
    margin: 0 0 0 1rem !important;
    background: #f4f4f4;
    border-radius: 100% !important;
    overflow: hidden;
    * {
      border: none;
      background: none;
    }
  }
  .ant-pagination-item {
    background: #f4f4f4 !important;
    border: none;
    border-radius: 0;
    &:nth-child(2) {
      border-radius: 100% 0 0 100% !important;
    }
    :nth-last-child(2) {
      border-radius: 0 100% 100% 0 !important;
    }
  }
  .ant-pagination-item-active {
    a {
      color: white;
      background: #0378FB;
      border-radius: 100%;
    }
  }
`

interface ProductsViewProps {
  data: Product[] | null
}

const ProductsViewContaiener: FC<ProductsViewProps> = (props) => {
  const { data } = props
  return (
    <CustomProductsView className="productsViewContaiener">
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
          <div className="spinnerProductsList">
            <Spinner />
          </div>
        )}
        <PaginationContainer>
          <CustomPagination defaultCurrent={1} total={50} />
        </PaginationContainer>
      </div>
    </CustomProductsView>
  )
}

export default ProductsViewContaiener

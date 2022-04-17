import { Pagination } from 'antd'
import styled from 'styled-components'
import { Button, Card, Filter, Spinner } from 'components'
import { FC } from 'react'
import { Product } from 'models/products'
import { FilterProps, PaginationProps } from 'models'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

const CustomProductsView = styled.section`
  padding: 2rem;
  width: 100%;
  background-color: #f4f4f4;
  display: grid;
  grid-template-columns: 300px auto;
  gap: 3rem;
  // min-height: 80vh;
  .filterByBrand {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
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
  }
  .paginationContainer {
    grid-area: 2 / 2 / span 1 / span 1;
  }
`

const PaginationContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
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
      background: #0378fb;
      border-radius: 100%;
    }
  }
`
interface ProductsViewProps {
  data: Product[] | null
  loading: boolean
  categories: FilterProps[] | []
  brands: FilterProps[] | []
  pagination: PaginationProps
  applyFilters?(): void
  loadingProducts: boolean
  setBrandsList: any
  setCategoriesList: any
}

const ProductsViewContaiener: FC<ProductsViewProps> = (props) => {
  const {
    data,
    loading,
    categories,
    brands,
    pagination,
    applyFilters,
    loadingProducts,
    setBrandsList,
    setCategoriesList,
  } = props

  return loading ? (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  ) : (
    <CustomProductsView className="productsViewContaiener">
      <div className="filtersContainer">
        <div className="filterByBrand">
          <Filter
            label="Marcas"
            title="- Seleccione marca -"
            options={brands}
            setFilter={setBrandsList}
          />
          <Filter
            label="Categorías"
            title="Todos los productos"
            options={categories}
            setFilter={setCategoriesList}
          />
          <Button onClick={applyFilters}>
            <p>APLICAR</p>
          </Button>
        </div>
        <div className="filterByCategory"></div>
      </div>
      {loadingProducts ? (
        <SpinnerContainer style={{ height: '59vh' }}>
          <Spinner />
        </SpinnerContainer>
      ) : data?.length !== 0 ? (
        <div className="productsListContainer">
          <div className="cardsList">
            {data?.map((e) => {
              return <Card key={e.id} {...e} />
            })}
          </div>
        </div>
      ) : (
        <div
          className="productsListContainer"
          style={{
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: 700,
          }}
        >
          No se encontraron los productos
        </div>
      )}
      <PaginationContainer className="paginationContainer">
        <CustomPagination
          defaultCurrent={1}
          defaultPageSize={12}
          total={pagination.totalDocs}
        />
      </PaginationContainer>
    </CustomProductsView>
  )
}

export default ProductsViewContaiener

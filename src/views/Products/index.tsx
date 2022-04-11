import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { AppService } from 'services'
import { HeaderProducts, ProductsViewContaiener } from './sections'
import { Categories, PaginationProps, ProductsList } from 'models'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import AppApi from 'api'
import { message } from 'antd'

const ProductsListViewContainer = styled.main`
  background-color: white;
  padding: 6rem 0 2rem;
  display: block;
`
interface FilterParams {
  brand: string[] | []
  category: string[] | []
  page: number
  size: number
}

let filtersParamsArray: any = {}

const Products = () => {
  const appService = AppService()
  const [loadingProducts, setLoadingProducts] = useState(false)
  const [products, setProducts] = useState<ProductsList>([])
  const [categories, setCategories] = useState<Categories>([])
  const [brands, setBrands] = useState<Categories>([])
  const [pagination, setPagination] = useState<PaginationProps>({
    totalDocs: 0,
  })
  // const [loadingProducts, setLoadingProducts] = useState(true)
  const [filters, setFilters] = useState<FilterParams>({
    brand: [],
    category: [],
    page: 1,
    size: 12,
  })
  const handleChange = (event: CheckboxChangeEvent) => {
    filtersParamsArray = {
      ...filtersParamsArray,
      [event.target.value]: {
        checked: event.target.checked,
        type: event.target.name,
      },
    }
    let brandValues = []
    let categoriesValues = []
    let filterValues: any = Object.values(filtersParamsArray)
    let filterKeys = Object.keys(filtersParamsArray)
    let i = 0
    for (i = 0; i < Object.keys(filtersParamsArray).length; i++) {
      if (filterValues[i].checked) {
        if (filterValues[i].type === 'brands') {
          brandValues.push(filterKeys[i])
        } else {
          categoriesValues.push(filterKeys[i])
        }
      } else {
      }
    }
    setFilters({ ...filters, brand: brandValues, category: categoriesValues })
  }
  const applyFilters = async () => {
    const appApi = AppApi()
    setLoadingProducts(true)
    try {
      const products = await appApi.getAllProducts(filters)
      setProducts(products.message.docs)
      setPagination(products.message.totalDocs)
      setLoadingProducts(false)
    } catch (error) {
      setLoadingProducts(false)
      message.error('Hubo un error en la carga de servicios')
    }
  }
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getAllData = async () => {
      const categories = await appService.getAllCategories()
      const brands = await appService.getAllBrands()
      const products = await appService.getAllProducts(filters)
      setCategories(categories.message)
      setBrands(brands.message)
      setProducts(products.message.docs)
      setPagination(products.message.totalDocs)
      setLoading(false)
    }
    getAllData()
  }, [])
  return (
    <ProductsListViewContainer className="productsListViewContainer">
      <HeaderProducts />
      <ProductsViewContaiener
        data={products}
        loading={loading}
        categories={categories}
        brands={brands}
        pagination={pagination}
        onChange={handleChange}
        applyFilters={applyFilters}
        loadingProducts={loadingProducts}
        // loadingProducts={loadingProducts}
      />
    </ProductsListViewContainer>
  )
}

export default Products

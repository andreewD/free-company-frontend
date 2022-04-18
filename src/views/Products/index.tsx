import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { AppService } from 'services'
import { HeaderProducts, ProductsViewContaiener } from './sections'
import { Categories, PaginationProps, ProductsList } from 'models'
import AppApi from 'api'
import { message } from 'antd'

const ProductsListViewContainer = styled.main`
  background-color: white;
  padding: 6rem 0 2rem;
  display: block;
`

const Products = () => {
  const appService = AppService()
  const [loadingProducts, setLoadingProducts] = useState(false)
  const [products, setProducts] = useState<ProductsList>([])
  const [categories, setCategories] = useState<Categories>([])
  const [brands, setBrands] = useState<Categories>([])
  const [pagination, setPagination] = useState<PaginationProps>({
    totalDocs: 0,
  })

  const [orderFilter, setOrderFilter] = useState<string | null>(null)
  const [brandsList, setBrandsList] = useState([])
  const [categoriesList, setCategoriesList] = useState([])
  const handleSelectChange = (e: { target: { value: string } }) => {
    setOrderFilter(e.target.value === '' ? null : e.target.value)
  }
  const applyFilters = async () => {
    const appApi = AppApi()
    setLoadingProducts(true)
    const filters = {
      brand: brandsList,
      category: categoriesList,
      page: 1,
      size: 12,
      sort: orderFilter,
    }
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
      const filters = {
        brand: [],
        category: [],
        page: 1,
        size: 12,
        sort: null,
      }
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
      <HeaderProducts onChange={handleSelectChange} />
      <ProductsViewContaiener
        data={products}
        loading={loading}
        categories={categories}
        brands={brands}
        pagination={pagination}
        applyFilters={applyFilters}
        loadingProducts={loadingProducts}
        setBrandsList={setBrandsList}
        setCategoriesList={setCategoriesList}
      />
    </ProductsListViewContainer>
  )
}

export default Products

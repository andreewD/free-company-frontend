import styled from 'styled-components'
import { Select } from 'components'

const HeaderProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`

const HeaderProducts = () => {
  return (
    <HeaderProductsContainer className="headerProducts">
      <h2>Catálogo de Productos</h2>
      <Select />
    </HeaderProductsContainer>
  )
}

export default HeaderProducts

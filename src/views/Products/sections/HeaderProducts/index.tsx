import styled from 'styled-components'
import { Select } from 'components'
import { FC } from 'react'

const HeaderProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`
interface HeaderProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

const HeaderProducts: FC<HeaderProps> = (props) => {
  const { onChange } = props
  return (
    <HeaderProductsContainer className="headerProducts">
      <h2>Catálogo de Productos</h2>
      <Select onChange={onChange} />
    </HeaderProductsContainer>
  )
}

export default HeaderProducts

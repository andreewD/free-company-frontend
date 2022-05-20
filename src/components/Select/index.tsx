import { FC, SelectHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Option {
  id: string
  value: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options?: Option[]
  area?: string
}

const CustomSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  label {
    width: 100%;
    padding: 0 1.5rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
  select {
    width: 100%;
    padding: 1rem 1.5rem;
    border: 0;
    border-right: 1rem solid #f4f4f4;
    cursor: pointer;
    background-color: #f4f4f4;
    border-radius: 30px;
    font-size: 1.25rem;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
      border-right: 1rem solid #f0f0f0;
      background-color: #f0f0f0;
    }
  }
`

const Select: FC<SelectProps> = (props) => {
  const { onChange } = props
  return (
    <CustomSelect style={{ gridArea: props.area || '' }}>
      {props.label && <label>Persona Natural</label>}
      <select onChange={onChange}>
        <option value={''}>Selecciona</option>
        <option value={'asc'}>Nombre: Ordenar A - Z</option>
        <option value={'desc'}>Nombre: Ordenar Z - A </option>
      </select>
    </CustomSelect>
  )
}

export default Select

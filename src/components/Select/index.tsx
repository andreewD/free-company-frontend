import { FC } from 'react'
import './styles.scss'

interface Option {
  id: string
  value: string
}
interface SelectProps {
  label?: string
  options?: Option[]
  area?: string
}

const Select:FC<SelectProps> = (props) => {
  return (
    <div style={{ gridArea: props.area || '' }} className="selectContainer">
      {props.label && <label>Persona Natural</label>}
      <select>
        <option>Selecciona</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  )
}

export default Select

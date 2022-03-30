import { FC, InputHTMLAttributes } from 'react'
import './styles.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  type?: 'number' | 'string'
  area: string
}

const Input: FC<InputProps> = (props) => {
  const { label, type, area, ...rest } = props
  return (
    <div style={{ gridArea: props.area || '' }} className="inputContainer">
      <label>{label}</label>
      <input {...rest} />
      <div style={{ display: 'none' }} className="requiredText">
        Dato inválido
      </div>
    </div>
  )
}

Input.defaultProps = {
  type: 'string',
}

export default Input

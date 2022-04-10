import { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  type?: 'number' | 'string'
  area: string
}

const CustomInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  label {
    width: 100%;
    padding: 0 1.5rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
  input {
    width: 100%;
    padding: 1rem 1.5rem;
    border: 0;
    cursor: pointer;
    background-color: #f4f4f4;
    border-radius: 30px;
    font-size: 1.25rem;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
      background-color: #f0f0f0;
    }
  }
  .requiredText {
    text-align: right;
    padding: 0 1.5rem;
    color: red;
  }
`

const Input: FC<InputProps> = (props) => {
  const { label, type, area, ...rest } = props
  return (
    <CustomInput style={{ gridArea: props.area || '' }} className="inputContainer">
      <label>{label}</label>
      <input {...rest} />
      <div style={{ display: 'none' }} className="requiredText">
        Dato inválido
      </div>
    </CustomInput>
  )
}

Input.defaultProps = {
  type: 'string',
}

export default Input

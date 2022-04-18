import { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Input, Form } from 'antd'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  type?: 'number' | 'string'
  area: string
  message: string
  name: string
}

const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  label {
    width: 100%;
    padding: 0 1.5rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
`

const CustomInput = styled(Input)`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 0;
  cursor: pointer;
  background-color: #e5e5e5;
  border-radius: 30px;
  font-size: 1.25rem;
  font-weight: 600;
  transition: 0.3s;
  // &:hover {
  //   background-color: #f0f0f0;
  // }
  &:focus {
    background-color: #f0f0f0;
  }
`

const FormInput: FC<InputProps> = (props) => {
  const { label, type, area, message, name } = props
  return (
    <CustomContainer style={{ gridArea: area }}>
      <label>{label}</label>
      <Form.Item name={name} rules={[{ required: true, message: message }]}>
        <CustomInput />
      </Form.Item>
    </CustomContainer>
  )
}

export default FormInput

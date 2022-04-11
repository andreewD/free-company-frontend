import styled from 'styled-components'
import { Checkbox } from 'antd'
import { FC } from 'react'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

const CustomCheckbox = styled(Checkbox)`
  width: 100%;
  font-size: 18px;
  color: black;
`
interface CheckboxProps {
  id: string
  label: string
  onChange?(e: CheckboxChangeEvent): void,
  name:string
}

const CheckBox: FC<CheckboxProps> = (props) => {
  const { label,onChange,name } = props


  return (
    <CustomCheckbox value={label} onChange={onChange} name={name} >
      {label}
    </CustomCheckbox>
  )
}

export default CheckBox

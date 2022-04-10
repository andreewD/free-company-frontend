import styled from 'styled-components'
import { Checkbox } from 'antd'

const CustomCheckbox = styled(Checkbox)`
  width: 100%;
  font-size: 18px;
  color: black;
`

const CheckBox = () => {
  const handleChange = (event: any) => {
    console.log('checked')
  }

  return <CustomCheckbox onChange={handleChange}>Checkbox</CustomCheckbox>
}

export default CheckBox

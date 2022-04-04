import './styles.scss'
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'
import { FormControlLabel } from '@mui/material'

const CheckBox = () => {
  const [state, setState] = useState({
    gilad: false,
    jason: false,
    antoine: false,
  })

  const handleChange = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  const { gilad } = state
  return (
    <FormControlLabel
      className='backgroundCheck'
      control={
        <Checkbox checked={gilad} onChange={handleChange} name="gilad" color='default' />
      }
      label="Filtro"
    />
  )
}

export default CheckBox

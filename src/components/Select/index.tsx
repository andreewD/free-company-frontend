import './styles.scss'

const Select = (props: any) => {
  return (
    <div style={{ gridArea: props.area || '' }} className="selectContainer">
      <label>Persona Natural</label>
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

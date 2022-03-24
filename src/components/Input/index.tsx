import './styles.scss'

const Input = (props: any) => {
  return (
    <div style={{ gridArea: props.area || '' }} className="inputContainer">
      <label>Lorem Ipsum</label>
      <input />
      <div style={{ display: 'none' }} className="requiredText">
        Dato inválido
      </div>
    </div>
  )
}

export default Input

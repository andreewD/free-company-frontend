import './styles.scss'

const Textarea = (props: any) => {
  return (
    <div style={{ gridArea: props.area || '' }} className="textareaContainer">
      <label>Lorem Ipsum</label>
      <textarea />
      <div style={{ display: 'none' }} className="requiredText">
        Dato inválido
      </div>
    </div>
  )
}

export default Textarea

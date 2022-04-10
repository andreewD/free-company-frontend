import styled from 'styled-components'

const TextareaComponent=styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  label {
    width: 100%;
    padding: 0 1.5rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
  textarea {
    width: 100%;
    height: 100%;
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
const Textarea = (props: any) => {
  return (
    <TextareaComponent style={{ gridArea: props.area || '' }} className="textareaContainer">
      <label>Lorem Ipsum</label>
      <textarea />
      <div style={{ display: 'none' }} className="requiredText">
        Dato inválido
      </div>
    </TextareaComponent>
  )
}

export default Textarea

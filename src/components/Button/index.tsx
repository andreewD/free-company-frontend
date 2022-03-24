import './styles.scss'

const Button = (props: any) => {
  return (
    <button type={props.type} onClick={props.onClick} className="primary">
      ENVIAR MENSAJE
    </button>
  )
}

export default Button

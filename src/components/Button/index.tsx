import { ButtonHTMLAttributes, FC } from 'react'
import './styles.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button'
  buttonType?: string
  label: string
}

const Button: FC<ButtonProps> = (props) => {
  const { type, label, buttonType, ...rest } = props
  return (
    <button type={props.type} {...rest} className="primary">
      ENVIAR MENSAJE
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  buttonType: 'primary',
}

export default Button

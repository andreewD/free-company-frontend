import { ButtonHTMLAttributes, FC } from 'react'
import './styles.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button'
  buttonType?: 'primary' | 'secondary' | 'outline'
  children: JSX.Element
}

const Button: FC<ButtonProps> = (props) => {
  const { type, children, buttonType, ...rest } = props
  return (
    <button
      type={props.type}
      {...rest}
      className={`buttonStyles ${buttonType}`}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  buttonType: 'primary',
}

export default Button

import { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

const CustomButton = styled.button`
  border-radius: 100px;
  padding: 0.8rem 1.5rem 0.4rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  &.primary {
    background-color: #0472fe;
    color: white;
    border: none;
  }

  &.outline {
    background-color: transparent;
    border: 2px solid black;
    color: black;
  }
  &.secondary {
    background-color: #373a3f;
    color: white;
    border: none;
  }
`
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button'
  buttonType?: 'primary' | 'secondary' | 'outline'
  children: JSX.Element
}

const Button: FC<ButtonProps> = (props) => {
  const { type, children, buttonType, ...rest } = props
  return (
    <CustomButton
      type={props.type}
      {...rest}
      className={`buttonStyles ${buttonType}`}
    >
      {children}
    </CustomButton>
  )
}

Button.defaultProps = {
  type: 'button',
  buttonType: 'primary',
}

export default Button

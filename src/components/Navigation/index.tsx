import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface NavigationProps {
  darkMode?: boolean
  path: string
}

const CustomNavigation=styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  .buttonNavigation {
    border: none;
    background: transparent;
    border-radius: 8px;
    padding: 4px 10px;
    font-size: 18px;
    font-weight: 500;
    transition: 0.3s;
    cursor: pointer;
  }

  .textWhite {
    color: white;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .textDark {
    color: black;
    &:hover {
      background: rgba(173, 173, 173, 0.3);
    }
  }
  .buttonActive {
    background: rgba(173, 173, 173, 0.3);
  }
`

const Navigation: FC<NavigationProps> = (props) => {
  const { darkMode, path } = props
  const navigate = useNavigate()

  return (
    <CustomNavigation className="navigationContainer">
      <button
        className={`buttonNavigation ${darkMode ? 'textDark' : 'textWhite'} ${
          path === 'products' ? 'buttonActive' : ''
        }`}
        onClick={() => {
          navigate('/products')
        }}
      >
        Productos
      </button>
      <button
        className={`buttonNavigation ${darkMode ? 'textDark' : 'textWhite'}`}
      >
        Empresa
      </button>
      <button
        className={`buttonNavigation ${darkMode ? 'textDark' : 'textWhite'} ${
          path === 'contact-us' ? 'buttonActive' : ''
        }`}
        onClick={() => {
          navigate('/contact-us')
        }}
      >
        Contacto
      </button>
    </CustomNavigation>
  )
}

Navigation.defaultProps = {
  darkMode: false,
}
export default Navigation

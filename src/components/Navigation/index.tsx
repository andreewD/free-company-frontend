import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navigation.scss'

interface NavigationProps {
  darkMode?: boolean
}

const Navigation: FC<NavigationProps> = (props) => {
  const { darkMode } = props
  const navigate = useNavigate()

  return (
    <nav className="navigationContainer">
      <button
        className={`buttonNavigation ${darkMode ? 'textDark' : 'textWhite'}`}
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
        className={`buttonNavigation ${darkMode ? 'textDark' : 'textWhite'}`}
        onClick={() => {
          navigate('/contact-us')
        }}
      >
        Contacto
      </button>
    </nav>
  )
}

Navigation.defaultProps = {
  darkMode: false,
}
export default Navigation

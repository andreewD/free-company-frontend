import { useNavigate } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
  const navigate = useNavigate()

  return (
    <nav className="navigationContainer">
      <button
        className={`buttonNavigation textWhite`}
        onClick={() => {
          navigate('/products')
        }}
      >
        Productos
      </button>
      <button className={`buttonNavigation textWhite`}>Empresa</button>
      <button
        className={`buttonNavigation textWhite`}
        onClick={() => {
          navigate('/contact-us')
        }}
      >
        Contacto
      </button>
    </nav>
  )
}

export default Navigation

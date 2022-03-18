import './Navigation.scss'

const Navigation = () => {
  return (
    <nav className='navigationContainer'>
      <button className={`buttonNavigation textWhite`}>Productos</button>
      <button className={`buttonNavigation textWhite`}>Empresa</button>
      <button className={`buttonNavigation textWhite`}>Contacto</button>
    </nav>
  )
}

export default Navigation

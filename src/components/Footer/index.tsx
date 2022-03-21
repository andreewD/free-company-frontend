import './styles.scss'

const Footer = () => {
  const dateToday = new Date().getFullYear()
  return (
    <footer className='generalFooter'>
      <button>Imcetron &copy; {dateToday}</button>
      <button>Productos</button>
      <button>Empresa</button>
      <button>Contacto</button>
    </footer>
  )
}

export default Footer

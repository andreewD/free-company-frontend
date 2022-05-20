import styled from 'styled-components'

const CustomFooter = styled.footer`
  text-align: center;
  padding: 1.5rem;
  color: #7e7e7e;
  font-size: 1rem;
`
const Footer = () => {
  return (
    <CustomFooter className="generalFooter">
      Free company &copy; 2022 | Todos los derechos resevados
    </CustomFooter>
  )
}

export default Footer

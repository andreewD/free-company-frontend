import { device } from 'helpers/media-screen'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FacebookB, LinkedinB } from 'assets'
import { CloseOutlined } from '@ant-design/icons'
interface NavigationProps {
  darkMode?: boolean
  path: string
}

const CustomNavigation = styled.nav`
  .socialButtonMenu {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    a {
      height: 1.75rem;
      cursor: pointer;
      img {
        height: 100%;
      }
    }
  }
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

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media ${device.tablet} {
    display: none;
  }
`

const MenuButton = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`

const MenuContainer = styled.div`
  position: fixed;
  display: none;
  padding-top: 3rem;
  background: white;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100vh;
  @media ${device.tablet} {
    display: block;
    border-left: 3rem solid #a8a8a8;
  }
`
const HeaderMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0 3rem;
  font-size: 2.5rem;
  & > div {
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
`

const MenuButtonsContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  button {
    border: none;
    background: transparent;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    transition: 0.3s;
    cursor: pointer;
    color: #393c41 !important;
  }
  p {
    color: #6f7073;
  }
`

const Navigation: FC<NavigationProps> = (props) => {
  const { darkMode, path } = props
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const goToPath = (path: string) => {
    setShowMenu(false)
    navigate(path)
  }
  return (
    <CustomNavigation className="navigationContainer">
      <NavContainer>
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
          className={`buttonNavigation ${darkMode ? 'textDark' : 'textWhite'} ${
            path === 'services' ? 'buttonActive' : ''
          }`}
          onClick={() => {
            navigate('/services')
          }}
        >
          Servicios
        </button>
        <button
          className={`buttonNavigation ${darkMode ? 'textDark' : 'textWhite'} ${
            path === 'enterprise' ? 'buttonActive' : ''
          }`}
          onClick={() => {
            navigate('/enterprise')
          }}
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
      </NavContainer>
      <MenuButton>
        <button
          onClick={() => {
            setShowMenu(true)
          }}
          className={`buttonActive buttonNavigation ${
            darkMode ? 'textDark' : 'textWhite'
          }`}
        >
          Menú
        </button>
      </MenuButton>
      {showMenu && (
        <MenuContainer>
          <HeaderMenu>
            <div
              onClick={() => {
                setShowMenu(false)
              }}
            >
              <CloseOutlined />
            </div>
          </HeaderMenu>
          <MenuButtonsContainer>
            <button
              className={`textDark ${
                path === 'products' ? 'buttonActive' : ''
              }`}
              onClick={() => {
                goToPath('/products')
              }}
            >
              Productos
            </button>
            <button
              className={`textDark ${
                path === 'services' ? 'buttonActive' : ''
              }`}
              onClick={() => {
                goToPath('/services')
              }}
            >
              Servicios
            </button>
            <button
              className={`textDark ${
                path === 'enterprise' ? 'buttonActive' : ''
              }`}
              onClick={() => {
                goToPath('/enterprise')
              }}
            >
              Empresa
            </button>

            <button
              className={`textDark ${
                path === 'contact-us' ? 'buttonActive' : ''
              }`}
              onClick={() => {
                goToPath('/contact-us')
              }}
            >
              Contacto
            </button>
            <p>Calle La Colonia Nro. 116 - Urb. El Manzano Rímac 15094</p>
            <p>+51 994 013 327 / +51 994 013 330</p>
            <p>ventas@imcetron.com.pe</p>
            <div className="socialButtonMenu">
              <a href="https://www.facebook.com/" target="_blank">
                <img src={FacebookB} alt="facebook" />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={LinkedinB} alt="linkedin" />
              </a>
            </div>
          </MenuButtonsContainer>
        </MenuContainer>
      )}
    </CustomNavigation>
  )
}

Navigation.defaultProps = {
  darkMode: false,
}
export default Navigation

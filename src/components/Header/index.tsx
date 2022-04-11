import {
  ImcetronWhite,
  ImcetronBlack,
  FacebookW,
  FacebookB,
  LinkedinB,
  LinkedinW,
} from 'assets'
import Navigation from 'components/Navigation'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CustomHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 5;
  top: 10px;
  left: 0;
  padding: 0.5rem 2rem;
  .logoContainer {
    height: 2rem;
    cursor: pointer;
    img {
      height: 100%;
    }
    .whiteLogo {
      animation: changeWhiteLogo 25s linear infinite;
    }
    .darkLogo {
      animation: changeBlackLogo 25s linear infinite;
    }
  }

  .socialButton {
    display: flex !important;
    flex-direction: row;
    gap: 0.5rem;

    a {
      height: 1.75rem;
      cursor: pointer;
      img {
        height: 100%;
      }
    }
  }
  @keyframes changeWhiteLogo {
    0% {
      display: block !important;
    }

    45% {
      display: block !important;
    }

    50% {
      display: none !important;
    }

    95% {
      display: none !important;
    }

    100% {
      display: block !important;
    }
  }

  @keyframes changeBlackLogo {
    0% {
      display: none !important;
    }

    45% {
      display: none !important;
    }

    50% {
      display: block !important;
    }

    95% {
      display: block !important;
    }

    100% {
      display: none !important;
    }
  }
`

const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  let path = pathname.slice(1)

  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    setIsDark(path !== '')
  }, [pathname])
  return (
    <CustomHeader className="headerContainer">
      <div className="logoContainer" onClick={() => navigate('/')}>
        {!isDark ? (
          <img className="whiteLogo" src={ImcetronWhite} alt="logo" />
        ) : (
          <img className="darkLogo" src={ImcetronBlack} alt="logo" />
        )}
      </div>
      <Navigation darkMode={isDark} path={path} />
      <div className="socialButton">
        <a href="https://www.facebook.com/" target="_blank">
          <img src={isDark ? FacebookB : FacebookW} alt="facebook" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={isDark ? LinkedinB : LinkedinW} alt="linkedin" />
        </a>
      </div>
    </CustomHeader>
  )
}

export default Header

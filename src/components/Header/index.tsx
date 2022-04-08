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
import './Header.scss'

const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  let path = pathname.slice(1)

  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    setIsDark(path !== '')
    console.log()
  }, [pathname])
  return (
    <header className="headerContainer">
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
    </header>
  )
}

export default Header

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

  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    let path = pathname.slice(1)
    setIsDark(path != '')
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
      <Navigation darkMode={isDark} />
      <div className="socialButton">
        <a>
          <img src={isDark ? FacebookB : FacebookW} alt="facebook" />
        </a>
        <a>
          <img src={isDark ? LinkedinB : LinkedinW} alt="linkedin" />
        </a>
      </div>
    </header>
  )
}

export default Header

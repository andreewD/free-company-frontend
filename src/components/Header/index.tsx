import { ImcetronWhite, Facebook, Linkedin } from 'assets'
import Navigation from 'components/Navigation'
import './Header.scss'

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="logoContainer">
        <img src={ImcetronWhite} alt="logo" />
      </div>
      <Navigation />
      <div className="socialButton">
        <a>
          <img src={Facebook} alt="facebook" />
        </a>
        <a>
          <img src={Linkedin} alt="linkedin" />
        </a>
      </div>
    </header>
  )
}

export default Header

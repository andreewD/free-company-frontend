import { ArrowButton } from 'assets'
import './styles.scss'

const Home = () => {
  const windowHeight = window.innerHeight
  const goToScrooll = () => {
    window.scrollTo(0, windowHeight)
  }
  return (
    <section className="mainContainer">
      <button className="arrowButton" onClick={goToScrooll}>
        <img src={ArrowButton} alt="arrow" />
      </button>
    </section>
  )
}

export default Home

import { ArrowButton } from 'assets'
import './styles.scss'

const Home = () => {
  return (
    <section className="mainContainer">
      <button className="arrowButton">
        <img src={ArrowButton} alt="arrow" />
      </button>
    </section>
  )
}

export default Home

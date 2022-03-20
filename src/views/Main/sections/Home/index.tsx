import { ArrowButton } from 'assets'
import './styles.scss'

const Home = () => {
  return (
    <div className="mainContainer">
      <button className="arrowButton">
        <img src={ArrowButton} alt="arrow" />
      </button>
    </div>
  )
}

export default Home

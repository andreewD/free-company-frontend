import { ArrowButton } from 'assets'
import './Main.scss'

const Main = () => {
  return (
    <div className="mainContainer">
      <button className="arrowButton">
        <img src={ArrowButton} alt="arrow" />
      </button>
    </div>
  )
}

export default Main

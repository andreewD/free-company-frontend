import { MutableRefObject, useRef, useState } from 'react'
import { useIntersectionRevealer } from 'react-intersection-revealer'
import './styles.scss'

const Statistics = () => {
  const [showAnimation, setShowAnimation] = useState(false)
  const ref: MutableRefObject<any> = useRef()
  let { visibleFractionY } = useIntersectionRevealer(ref)
  const showCounter = () => {
    if (!showAnimation) {
      if (visibleFractionY) {
        setShowAnimation(true)
      }
    }
  }
  window.addEventListener('scroll', function (e) {
    showCounter()
  })
  return (
    <section className="statisticsContainer">
      <div className="statisticsBackground" ref={ref}>
        <div data-aos="fade-up">
          <h2>
            <b className={`${showAnimation ? 'clientsAnimation' : ''}`}></b>+
          </h2>
          <p>clientes satisfechos por nuestra atención</p>
        </div>
        <div data-aos="fade-up">
          <h2>
            <b className={`${showAnimation ? 'experienceAnimation' : ''}`}></b>
          </h2>
          <p>años de experiencia en el mercado</p>
        </div>
        <div data-aos="fade-up">
          <h2>
            <b className={`${showAnimation ? 'productsAnimation' : ''}`}></b>
          </h2>
          <p>productos importados y comercializados</p>
        </div>
      </div>
    </section>
  )
}

export default Statistics

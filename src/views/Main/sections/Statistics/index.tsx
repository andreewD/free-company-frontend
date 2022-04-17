import styled from 'styled-components'

const StatisticsSection=styled.section`
  height: 100vh;
  width: 100%;
  padding: 2rem;
  .statisticsBackground {
    width: 100%;
    height: 100%;
    padding: 2rem 5rem;
    background: url('https://i.ibb.co/kgFkbSy/motor-winding-03-mod-2.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    & > div {
      h2 {
        font-size: 4rem;
        color: white;
        * {
          font-size: 4rem;
        }
      }
      p {
        font-size: 1.75rem;
        max-width: 320px;
        font-weight: 600;
      }
    }
  }
`

const Statistics = () => {
  return (
    <StatisticsSection className="statisticsContainer">
      <div className="statisticsBackground">
        <div>
          <h2 data-aos="fade-up">
            <b>300</b>+
          </h2>
          <p>clientes satisfechos por nuestra atención</p>
        </div>
        <div>
          <h2 data-aos="fade-up">
            <b>25</b>
          </h2>
          <p>años de experiencia en el mercado</p>
        </div>
        <div>
          <h2 data-aos="fade-up">
            <b>200</b>
          </h2>
          <p>productos importados y comercializados</p>
        </div>
      </div>
    </StatisticsSection>
  )
}

export default Statistics

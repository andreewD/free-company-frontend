import styled from 'styled-components'

const SectorSection=styled.section`
  display: grid;
  height: 100vh;
  width: 100%;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 1rem 2rem;
  .sector-one {
    background: url('https://i.ibb.co/bWZLQ5c/Imagen-20.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .sector-two {
    background: url('https://i.ibb.co/9478gcB/Imagen-22.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .sector-three {
    background: url('https://i.ibb.co/Lr8XwBJ/Imagen-21.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  & > div {
    position: relative;
    .shadow-container {
      position: absolute;
      z-index: 1;
      background-color: transparent;
      width: 100%;
      height: 100%;
      border: none;
      cursor: pointer;
      transition: 0.5s;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.5rem;
      font-weight: 600;
      &:hover {
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`

const Sectors = () => {
  return (
    <SectorSection>
      <div data-aos="fade-up" className="sector-one">
        <button className="shadow-container">Fierro silicoso</button>
      </div>
      <div data-aos="fade-up" className="sector-two">
        <button className="shadow-container">Ventiladores</button>
      </div>
      <div data-aos="fade-up" className="sector-three">
        <button className="shadow-container">Alambre de cobre</button>
      </div>
    </SectorSection>
  )
}

export default Sectors

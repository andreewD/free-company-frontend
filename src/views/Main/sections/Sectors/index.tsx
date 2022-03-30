import './styles.scss'

const Sectors = () => {
  return (
    <section className="sectorsContainer">
      <div className="sector-one" data-aos="fade-down">
        <button className="shadow-container">Fierro silicoso</button>
      </div>
      <div className="sector-two" data-aos="fade-right">
        <button className="shadow-container">Ventiladores</button>
      </div>
      <div className="sector-three" data-aos="fade-left">
        <button className="shadow-container">Alambre de cobre</button>
      </div>
    </section>
  )
}

export default Sectors

import './styles.scss'

const Contact = () => {
  return (
    <section className="contactContainer">
      <div className="informationContainer">
        <h2>Contacto</h2>
        <div className="lineDiv"></div>
        <div className="information">
          <div className="columnInformation">
            <h4>Ubícanos</h4>
            <div className="blockInformation">
              <b>Oficina</b>
              <p>Calle La Colonia Nro. 116 Urb. El Manzano Rímac 15094</p>
            </div>
          </div>
          <div className="columnInformation">
            <h4>Ventas</h4>
            <div className="blockInformation">
              <b>Llámanos</b>
              <p>+51 994 013 327</p>
              <p>+51 994 013 330</p>
            </div>
            <div className="blockInformation">
              <b>Escríbenos</b>
              <p>ventas@imcetron.com.pe</p>
            </div>
          </div>
          <div className="columnInformation">
            <h4>Horarios de atención</h4>
            <div className="blockInformation">
              <b>Lunes a Viernes</b>
              <p>08:00hs a 18:00hs</p>
            </div>
            <div className="blockInformation">
              <b>Sábado</b>
              <p>08:00hs a 13:00hs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mapSection">
        <h4>Mostrar en el mapa</h4>
        <div className="mapContainer">
          <img src="https://i.ibb.co/CmYjF8W/mapa-ref.png" alt="map" />
        </div>
      </div>
      <form>
        
      </form>
    </section>
  )
}

export default Contact

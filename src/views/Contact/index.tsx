import { Button, Input, Select, Textarea } from 'components'
import './styles.scss'

const Contact = () => {
  const submitForm = (e: any) => {
    e.preventDefault()
    alert('Aún estamos trabajando')
  }
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
        <div className="textInformation">
          <h4>¿Necesitas más información?</h4>
          <p>
            Completa el formulario y escríbenos para solicitar mayor información
            sobre nuestros productos.
          </p>
        </div>
        <div className="fieldsContainer">
          <div style={{ gridArea: 'space1' }} className="space1"></div>
          <div style={{ gridArea: 'space2' }} className="space2"></div>
          <div style={{ gridArea: 'space3' }} className="space3"></div>
          <Select area="contactType" />
          <Input area="fullName" />
          <Input area="documentType" />
          <Input area="socialReason" />
          <Select area="phoneType" />
          <Input area="phoneNumber" />
          <Input area="email" />
          <Textarea area="description" />
        </div>
        <p className="notice">
          Sus datos personales se encuentran protegidos y solo serán utilizados
          para comunicarnos con usted, según la Ley de Protección de Datos
          Personales - Ley 29733 que tiene por objeto garantizar el derecho
          fundamental de las personas a la protección de su privacidad.
        </p>
        <div className="submitButtonContainer">
          <Button type="submit" onClick={submitForm} />
        </div>
      </form>
    </section>
  )
}

export default Contact

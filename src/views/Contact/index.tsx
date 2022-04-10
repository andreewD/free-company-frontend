import styled from 'styled-components'
import { Button, Input, Select, Textarea } from 'components'

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 4rem;
  gap: 3rem;
  .informationContainer {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    h2 {
      font-size: 40px;
      font-weight: 600;
    }
    .lineDiv {
      height: 1px;
      width: 100%;
      background-color: black;
    }
    .information {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .columnInformation {
        display: flex;
        flex-direction: column;
        gap: 10px;
        h4 {
          font-size: 1.25rem;
          font-weight: 700;
        }
        .blockInformation {
          display: flex;
          flex-direction: column;
          * {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
  .mapSection {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1200px;

    h4 {
      font-size: 1.25rem;
      font-weight: 700;
      border-bottom: 1px solid black;
    }
    .mapContainer {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  form {
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .fieldsContainer {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, auto);
      gap: 1.5rem;
      margin: 1rem 0 2rem;
      grid-template-areas:
        'contactType space1 space2 space2'
        'fullName documentType socialReason socialReason'
        'phoneType space3 description description'
        ' phoneNumber email description description';
    }
    .notice {
      font-size: 1rem;
    }
    .submitButtonContainer {
      display: flex;
      justify-content: flex-end;
      button {
        cursor: pointer;
      }
    }
    .space1 {
      height: auto;
      width: auto;
    }
  }
`

const Contact = () => {
  const submitForm = (e: { preventDefault(): void }) => {
    e.preventDefault()
    alert('Aún estamos trabajando')
  }
  return (
    <ContactSection>
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
          <Input label="Nombres" area="fullName" />
          <Input label="Tipo de Documento" area="documentType" />
          <Input label="Razón Social" area="socialReason" />
          <Select area="phoneType" />
          <Input label="Número" area="phoneNumber" />
          <Input label="Email" area="email" />
          <Textarea area="description" />
        </div>
        <p className="notice">
          Sus datos personales se encuentran protegidos y solo serán utilizados
          para comunicarnos con usted, según la Ley de Protección de Datos
          Personales - Ley 29733 que tiene por objeto garantizar el derecho
          fundamental de las personas a la protección de su privacidad.
        </p>
        <div className="submitButtonContainer">
          <Button type="submit" onClick={submitForm}>
            <p>ENVIAR MENSAJE</p>
          </Button>
        </div>
      </form>
    </ContactSection>
  )
}

export default Contact

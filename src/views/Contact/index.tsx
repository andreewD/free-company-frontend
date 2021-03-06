import styled from 'styled-components'
import { FormInput, FormTextarea, Spinner } from 'components'
import { Form, Button, message } from 'antd'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { device } from 'helpers/media-screen'

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 4rem;
  gap: 3rem;
`
const CustomForm = styled(Form)`
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
      'fullName documentType companyName companyName'
      'contactPreference space3 description description'
      ' phoneNumber email description description';

    @media ${device.laptopM} {
      display: flex;
      flex-direction: column;
    }
    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
    }
  }
  @media ${device.laptopM} {
    width: 80vw;
    margin-left: 5vw;
  }
  @media ${device.tablet} {
    width: 80vw;
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
    @media ${device.tablet} {
      justify-content: center;
      align-items: center;
    }
  }
  .space1 {
    height: auto;
    width: auto;
  }
`

const MapSection = styled('div')`
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
    cursor: pointer;
    @media ${device.tablet} {
      margin-left: 16vw;
    }
    @media ${device.laptopM} {
      margin-left: 8vw;
    }
  }
  .mapContainer {
    width: 100%;
    img {
      width: 100%;
      @media ${device.tablet} {
        width: 100wh;
      }
      @media ${device.laptopM} {
        width: 100%;
      }
    }
  }
`

const InformationContainer = styled('div')`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h2 {
    font-size: 40px;
    font-weight: 600;
  }
  @media ${device.tablet} {
    width: 80%;
    margin-left: 12vw;
  }
  @media ${device.laptopM} {
    width: 90%;
    margin-left: 5vw;
  }
`
const CustomLine = styled('div')`
  height: 1px;
  width: 100%;
  background-color: black;
  @media ${device.tablet} {
    display: none;
  }
`

const Information = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`
const ColumnInformation = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`
const BlockInformation = styled('div')`
  display: flex;
  flex-direction: column;
  * {
    font-size: 1.25rem;
  }
`
const CustomSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  label {
    width: 100%;
    padding: 0 1.5rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
  select {
    width: 100%;
    padding: 1rem 1.5rem;
    border: 0;
    border-right: 1rem solid #e5e5e5;
    cursor: pointer;
    background-color: #e5e5e5;
    border-radius: 30px;
    font-size: 1.25rem;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
      border-right: 1rem solid #f0f0f0;
      background-color: #f0f0f0;
    }
  }
`
const CustomButton = styled(Button)`
  height: 6vh;
  border-radius: 100px;
  padding: 0.8rem 1.5rem 0.4rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  &.primary {
    background-color: #0472fe;
    color: white;
    border: none;
  }

  &.outline {
    background-color: transparent;
    border: 2px solid black;
    color: black;
  }
  &.secondary {
    background-color: #373a3f;
    color: white;
    border: none;
  }
`
interface mailData {
  contactType: string
  description: string
  documentType: string
  email: string
  fullName: string
  phoneNumber: string
  contactPreference: string
  companyName: string
}

const SpinnerContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Contact = () => {
  const [loading, setLoading] = useState(false)
  const onFinish = async (values: mailData) => {
    setLoading(true)
    try {
      await emailjs.send(
        'service_krs5pyp',
        'template_m5f7n5c',
        {
          contactType: values.contactType,
          description: values.description,
          documentType: values.documentType,
          email: values.email,
          fullName: values.fullName,
          phoneNumber: values.phoneNumber,
          contactPreference: values.contactPreference,
          companyName: values.companyName,
        },
        'jqt_OAVVu92aSdR3T'
      )
      setLoading(false)
      message.success('Mensaje enviado correctamente')
    } catch (error) {
      message.error('Hubo un error al enviar el formulario')
      setLoading(false)
    }
  }

  return (
    <ContactSection>
      <InformationContainer>
        <h2>Contacto</h2>
        <CustomLine />
        <Information>
          <ColumnInformation>
            <h4>Ub??canos</h4>
            <BlockInformation>
              <b>Oficina</b>
              <p>Calle La Colonia Nro. 116 Urb. El Manzano R??mac 15094</p>
            </BlockInformation>
          </ColumnInformation>
          <ColumnInformation>
            <h4>Ventas</h4>
            <BlockInformation>
              <b>Ll??manos</b>
              <p>+51 994 013 327</p>
              <p>+51 994 013 330</p>
            </BlockInformation>
            <BlockInformation>
              <b>Escr??benos</b>
              <p>ventas@imcetron.com.pe</p>
            </BlockInformation>
          </ColumnInformation>
          <ColumnInformation>
            <h4>Horarios de atenci??n</h4>
            <BlockInformation>
              <b>Lunes a Viernes</b>
              <p>08:00hs a 18:00hs</p>
            </BlockInformation>
            <BlockInformation>
              <b>S??bado</b>
              <p>08:00hs a 13:00hs</p>
            </BlockInformation>
          </ColumnInformation>
        </Information>
      </InformationContainer>
      <MapSection>
        <h4
          onClick={() => {
            window.open('https://goo.gl/maps/RwcZRFZgabbDfcnL8', '_blank')
          }}
        >
          Mostrar en el mapa
        </h4>
        <div className="mapContainer">
          <img src="https://i.ibb.co/CmYjF8W/mapa-ref.png" alt="map" />
        </div>
      </MapSection>

      <CustomForm
        name="basic"
        onFinish={(values: any) => {
          onFinish(values)
        }}
      >
        <div className="textInformation">
          <h4>??Necesitas m??s informaci??n?</h4>
          <p>
            Completa el formulario y escr??benos para solicitar mayor informaci??n
            sobre nuestros productos.
          </p>
        </div>

        {loading ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : (
          <div className="fieldsContainer">
            <div style={{ gridArea: 'space1' }} className="space1"></div>
            <div style={{ gridArea: 'space2' }} className="space2"></div>
            <div style={{ gridArea: 'space3' }} className="space3"></div>
            <Form.Item
              name="contactType"
              rules={[
                { required: true, message: 'Debe seleccionar una opci??n' },
              ]}
            >
              <CustomSelect style={{ gridArea: 'contactType' }}>
                <label>Tipo de Contacto</label>
                <select>
                  <option value={''}>Selecciona</option>
                  <option value={'Persona natural'}>Persona natural</option>
                  <option value={'Persona juridica '}>Persona juridica </option>
                </select>
              </CustomSelect>
            </Form.Item>
            <FormInput
              label="Nombre y apellido"
              area="fullName"
              message="Debe ingresar un dato valido"
              name="fullName"
            />
            <FormInput
              label="DNI / CE / RUC"
              area="documentType"
              message="Debe ingresar un dato valido"
              name="documentType"
            />
            <FormInput
              label="Raz??n social de la empresa"
              area="companyName"
              message="Debe ingresar un dato valido"
              name="companyName"
            />
            <Form.Item
              name="contactPreference"
              rules={[
                { required: true, message: 'Debe seleccionar una opci??n' },
              ]}
            >
              <CustomSelect style={{ gridArea: 'contactPreference' }}>
                <label>Preferencia de Contacto</label>
                <select>
                  <option value={''}>Selecciona</option>
                  <option value={'Tel??fono'}>Tel??fono</option>
                  <option value={'Correo'}>Correo </option>
                </select>
              </CustomSelect>
            </Form.Item>
            <FormInput
              label="N??mero de tel??fono"
              area="phoneNumber"
              message="N??mero de tel??fono inv??lido"
              name="phoneNumber"
            />
            <FormInput
              label="Correo electr??nico"
              area="email"
              message="No es un correo v??lido"
              name="email"
            />
            <FormTextarea
              label="Descripci??n"
              area="description"
              message="Se requieren datos"
              name="description"
            />
          </div>
        )}
        <p className="notice">
          Sus datos personales se encuentran protegidos y solo ser??n utilizados
          para comunicarnos con usted, seg??n la Ley de Protecci??n de Datos
          Personales - Ley 29733 que tiene por objeto garantizar el derecho
          fundamental de las personas a la protecci??n de su privacidad.
        </p>
        <div className="submitButtonContainer">
          <CustomButton type="primary" htmlType="submit">
            <p>ENVIAR MENSAJE</p>
          </CustomButton>
        </div>
      </CustomForm>
    </ContactSection>
  )
}

export default Contact

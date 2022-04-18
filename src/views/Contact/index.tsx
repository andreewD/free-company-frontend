import styled from 'styled-components'
import { FormInput, FormTextarea, Spinner } from 'components'
import { Form, Button, message } from 'antd'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

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
  }
  .mapContainer {
    width: 100%;
    img {
      width: 100%;
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
`
const CustomLine = styled('div')`
  height: 1px;
  width: 100%;
  background-color: black;
`

const Information = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
            <h4>Ubícanos</h4>
            <BlockInformation>
              <b>Oficina</b>
              <p>Calle La Colonia Nro. 116 Urb. El Manzano Rímac 15094</p>
            </BlockInformation>
          </ColumnInformation>
          <ColumnInformation>
            <h4>Ventas</h4>
            <BlockInformation>
              <b>Llámanos</b>
              <p>+51 994 013 327</p>
              <p>+51 994 013 330</p>
            </BlockInformation>
            <BlockInformation>
              <b>Escríbenos</b>
              <p>ventas@imcetron.com.pe</p>
            </BlockInformation>
          </ColumnInformation>
          <ColumnInformation>
            <h4>Horarios de atención</h4>
            <BlockInformation>
              <b>Lunes a Viernes</b>
              <p>08:00hs a 18:00hs</p>
            </BlockInformation>
            <BlockInformation>
              <b>Sábado</b>
              <p>08:00hs a 13:00hs</p>
            </BlockInformation>
          </ColumnInformation>
        </Information>
      </InformationContainer>
      <MapSection>
        <h4>Mostrar en el mapa</h4>
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
          <h4>¿Necesitas más información?</h4>
          <p>
            Completa el formulario y escríbenos para solicitar mayor información
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
                { required: true, message: 'Debe seleccionar una opción' },
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
              label="Razón social de la empresa"
              area="companyName"
              message="Debe ingresar un dato valido"
              name="companyName"
            />
            <Form.Item
              name="contactPreference"
              rules={[
                { required: true, message: 'Debe seleccionar una opción' },
              ]}
            >
              <CustomSelect style={{ gridArea: 'contactPreference' }}>
                <label>Preferencia de Contacto</label>
                <select>
                  <option value={''}>Selecciona</option>
                  <option value={'Teléfono'}>Teléfono</option>
                  <option value={'Correo'}>Correo </option>
                </select>
              </CustomSelect>
            </Form.Item>
            <FormInput
              label="Número de teléfono"
              area="phoneNumber"
              message="Número de teléfono inválido"
              name="phoneNumber"
            />
            <FormInput
              label="Correo electrónico"
              area="email"
              message="No es un correo válido"
              name="email"
            />
            <FormTextarea
              label="Descripción"
              area="description"
              message="Se requieren datos"
              name="description"
            />
          </div>
        )}
        <p className="notice">
          Sus datos personales se encuentran protegidos y solo serán utilizados
          para comunicarnos con usted, según la Ley de Protección de Datos
          Personales - Ley 29733 que tiene por objeto garantizar el derecho
          fundamental de las personas a la protección de su privacidad.
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

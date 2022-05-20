import styled from 'styled-components'
import { Space } from 'antd'
const Container = styled('div')`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10vh auto 15vh auto;
  gap: 20px;
`
const Divider = styled('hr')`
  border-top: 3px solid rgb(237, 231, 231);
`

function AboutUs() {
  return (
    <Container>
      <h1>Sobre nosotros</h1>
      <Divider />
      <Space
        direction="vertical"
        size="large"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <p>
          Somos una empresa peruana fundada en el año 1998, con la finalidad de
          importar y comercializar materiales eléctricos y aislantes utilizados
          en la fabricación, reparación y mantenimiento de motores y generadores
          eléctricos en general.
        </p>
        <p>
          Contamos con una amplia gama de materiales de alta calidad, lo cual
          sin duda ha originado un beneficio significativo al área de
          reparaciones y mantenciones de los sectores: industrias, minerías
          generadores y distribuidores de energía, pesqueras y azucareras.
        </p>
        <p>
          Con el propósito de sustentar adecuadamente la calidad de nuestros
          productos, nos preocupamos de que estos cumplan con las normas
          correspondientes, como fichas técnicas y normas de seguridad, lo cual
          es importante en la actualidad.
        </p>
      </Space>
    </Container>
  )
}

export default AboutUs

import { useRef } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import { ServicesFirstImage } from 'assets'
import './style.css'
import { device } from 'helpers/media-screen'
const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10vh auto 5vh auto;
  gap: 5vh;
  align-items: center;
  justify-content: center;
`

const Title = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5vh;
  @media ${device.tablet} {
    width: 75%;
    flex-direction: column;
  }
`
const H3Custom = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const DescriptionText = styled('div')`
  // margin-left: auto;
  // margin-right: auto;
  width: 70%;
  margin-top: 50px;
  h2 {
    margin-left: 35vw;
  }
  p {
    margin-left: 35vw;
  }
  @media ${device.tablet} {
    width: 80%;

    h2 {
      margin-left: 20vw;
    }
    p {
      margin-left: 20vw;
    }
  }
`

const CustomDescription = styled('p')`
  width: 100%;
  font-weight: normal;
  margin-left: auto;
  margin-right: auto;
`

const CustomButton = styled('button')`
  border-radius: 20px;
  width: 199px;
  height: 40px;
  background-color: white;
  border-width: 3px;
  @media ${device.tablet} {
    display: none;
  }
`

const CustomButton2 = styled('button')`
  border-radius: 20px;
  width: 70vw;
  height: 40px;
  background-color: white;
  border-width: 3px;
  display: none;
  @media ${device.tablet} {
    display: unset;
  }
`

const CustomCarousel = styled(Carousel)`
  // height: 350px;
  width: 100vw;
  z-index: -1;
  @media ${device.tablet} {
    height: 100%;
    width: 100vw;
  }
`

const ButtonContainer = styled('div')`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: -22vh;
  margin-left: -30vw;
  margin-bottom: 20vh;
  z-index: 1;
  position: relative;
  @media ${device.tablet} {
  }
`

const CustomDot = styled('button')`
  width: 10px;
  height: 10px;
  margin: 5px;
  background: gray;
  border: none;
  border-radius: 50%;
`
const CustomImg = styled('img')`
  height: 350px;
  width: 757px;
  border-radius: 20px;
  margin: auto;
  @media ${device.tablet} {
    height: 100%;
    width: 100vw;
  }
`
function Maintenance() {
  const refImg = useRef<any>()

  const goTo = (slide: any) => {
    refImg.current.goTo(slide, false)
  }

  return (
    <Container>
      <Title>
        <div>
          <p style={{ marginBottom: 0 }}>Principales servicios</p>
          <h1>Mantenimiento y pruebas</h1>
          <CustomButton>CONTÁCTANOS</CustomButton>
        </div>
        <CustomDescription>
          Manejamos tecnología sólida y contamos con una alta experiencia en
          nuestros
          <br /> proyectos. Nuestro servicio de mantenimiento y pruebas de
          transformadores de
          <br /> potencia y distribución lo realizamos in situ o en nuestro
          taller de Puente Piedra.
        </CustomDescription>
        <CustomButton2>CONTÁCTANOS</CustomButton2>
      </Title>

      <CustomCarousel ref={refImg} dots={false} autoplay>
        <H3Custom>
          <CustomImg src={ServicesFirstImage} alt="" />
          <DescriptionText>
            <h2>Mantenimiento de Subestaciones (AT,MT,BT)</h2>
            <p>
              Nos destacamos en realizar mantenimientos de seccionadores
              <br /> e interruptores, mantenimiento de celdas y tableros
              eléctricos,
              <br />
              mantenimiento y medición de mallas y pozos a tierra.
            </p>
          </DescriptionText>
        </H3Custom>

        <div>
          <H3Custom>
            <CustomImg src={ServicesFirstImage} alt="" />
          </H3Custom>
          <DescriptionText>
            <h2>Mantenimiento de Item 2 (AT,MT,BT)</h2>
            <p>
              Nos destacamos en realizar mantenimientos de seccionadores
              <br /> e interruptores, mantenimiento de celdas y tableros
              eléctricos,
              <br />
              mantenimiento y medición de mallas y pozos a tierra.
            </p>
          </DescriptionText>
        </div>
        <div>
          <H3Custom>
            <CustomImg src={ServicesFirstImage} alt="" />
          </H3Custom>
          <DescriptionText>
            <h2>Mantenimiento de Item 3 (AT,MT,BT)</h2>
            <p>
              Nos destacamos en realizar mantenimientos de seccionadores e
              interruptores, mantenimiento de celdas y tableros eléctricos,
              mantenimiento y medición de mallas y pozos a tierra.
            </p>
          </DescriptionText>
        </div>
        <div>
          <H3Custom>
            <CustomImg src={ServicesFirstImage} alt="" />
          </H3Custom>
          <DescriptionText>
            <h2>Mantenimiento de Item 4 (AT,MT,BT)</h2>
            <p>
              Nos destacamos en realizar mantenimientos de seccionadores
              <br /> e interruptores, mantenimiento de celdas y tableros
              eléctricos,
              <br />
              mantenimiento y medición de mallas y pozos a tierra.
            </p>
          </DescriptionText>
        </div>
      </CustomCarousel>
      {/* <ButtonContainer>
        <CustomDot onClick={() => goTo(0)} />
        <CustomDot onClick={() => goTo(1)} />
        <CustomDot onClick={() => goTo(2)} />
        <CustomDot onClick={() => goTo(3)} />
      </ButtonContainer> */}
    </Container>
  )
}

export default Maintenance

import { useRef } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import { ServicesFirstImage } from 'assets'
import './style.css'
const Container = styled('div')`
  width: 100vh;
  display: flex;
  flex-direction: column;
  margin: 10vh auto 20vh auto;
  gap: 5vh;
  align-items: center;
  justify-content: center;
`

const Title = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const H3Custom = styled('h3')`
height: '350px'
width: '757px'
`

const DescriptionText = styled('div')`
  margin-top: 50px;
`

function Maintenance() {
  function onChange(a: any) {
    console.log(a)
  }
  const refImg = useRef<any>()
  const refText = useRef<any>()
  const goTo = (slide: any) => {
    refImg.current.goTo(slide, false)
    refText.current.goTo(slide, false)
  }

  const btnStyle = {
    width: '10px',
    height: '10px',
    margin: '5px',
    background: 'gray',
    border: 'none',
    borderRadius: '50%',
  }

  return (
    <Container>
      <Title>
        <div>
          <p style={{ marginBottom: 0 }}>Principales servicios</p>
          <h1>Mantenimiento y pruebas</h1>
          <button
            style={{
              borderRadius: '20px',
              width: '199px',
              height: '40px',
              backgroundColor: 'white',
              borderWidth: '3px',
            }}
          >
            CONTÁCTANOS
          </button>
        </div>
        <p style={{ width: '65%', marginLeft: '20px' }}>
          Manejamos tecnología sólida y contamos con una alta experiencia en
          nuestros
          <br /> proyectos. Nuestro servicio de mantenimiento y pruebas de
          transformadores de
          <br /> potencia y distribución lo realizamos in situ o en nuestro
          taller de Puente Piedra.
        </p>
      </Title>

      <div>
        <Carousel
          ref={refImg}
          afterChange={onChange}
          dots={false}
          autoplay
          style={{ height: '350px', width: '757px', zIndex: '-1' }}
        >
          <div
            style={{
              height: '350px',
              width: '757px',
            }}
          >
            <H3Custom>
              <img
                src={ServicesFirstImage}
                alt=""
                style={{
                  height: '350px',
                  width: '757px',
                  borderRadius: '20px',
                  margin: 'auto',
                }}
              />
              <DescriptionText>
                <h2>Mantenimiento de Subestaciones (AT,MT,BT)</h2>
                <p>
                  Nos destacamos en realizar mantenimientos de seccionadores e
                  interruptores, mantenimiento de celdas y tableros eléctricos,
                  mantenimiento y medición de mallas y pozos a tierra.
                </p>
              </DescriptionText>
            </H3Custom>
          </div>
          <div>
            <H3Custom>
              <img
                src={ServicesFirstImage}
                alt=""
                style={{
                  height: '350px',
                  width: '757px',
                  borderRadius: '20px',
                  margin: 'auto',
                }}
              />
            </H3Custom>
            <DescriptionText>
              <h2>Mantenimiento de Item 2 (AT,MT,BT)</h2>
              <p>
                Nos destacamos en realizar mantenimientos de seccionadores e
                interruptores, mantenimiento de celdas y tableros eléctricos,
                mantenimiento y medición de mallas y pozos a tierra.
              </p>
            </DescriptionText>
          </div>
          <div>
            <H3Custom>
              <img
                src={ServicesFirstImage}
                alt=""
                style={{
                  height: '350px',
                  width: '757px',
                  borderRadius: '20px',
                  margin: 'auto',
                }}
              />
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
              <img
                src={ServicesFirstImage}
                alt=""
                style={{
                  height: '350px',
                  width: '757px',
                  borderRadius: '20px',
                  margin: 'auto',
                }}
              />
            </H3Custom>
            <DescriptionText>
              <h2>Mantenimiento de Item 4 (AT,MT,BT)</h2>
              <p>
                Nos destacamos en realizar mantenimientos de seccionadores e
                interruptores, mantenimiento de celdas y tableros eléctricos,
                mantenimiento y medición de mallas y pozos a tierra.
              </p>
            </DescriptionText>
          </div>
        </Carousel>
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            marginTop: '20px',
            zIndex: '1',
          }}
        >
          <button onClick={() => goTo(0)} style={btnStyle} />
          <button onClick={() => goTo(1)} style={btnStyle} />
          <button onClick={() => goTo(2)} style={btnStyle} />
          <button onClick={() => goTo(3)} style={btnStyle} />
        </div>
      </div>
    </Container>
  )
}

export default Maintenance

import { Carousel, Button } from 'antd'
import { MaquinaTermoVacio } from 'assets'
import React, { useRef } from 'react'
import styled from 'styled-components'
const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5vh auto 20vh auto;
  gap: 5vh;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const Title = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5vh;
`
const H3Custom = styled('h3')`
  height: '350px'
  width: '757px'
`

const CustomButton = styled('button')`
  background-color: white;
  border: none;
  text-align: left;
  color: #c9c7c7;
  &:focus {
    color: #000000;
  }
`
const ButtonTitle = styled('p')`
  font-size: x-large;
  font-weight: bolder;
  &:focus {
    color: #000000;
  }
`

const CustomLine = styled('div')`
  background-color: black;
  height: 0.4vh;
  width: 20vh;
  color: #c9c7c7;
  &:focus {
    color: #000000;
  }
`

const ButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-left: 2vh;
  margin-top: 5vh;
  margin-bottom: 10vh;
  z-index: 3;
  gap: 3vh;
  position: relative;
`

function EquipmentForMedition() {
  function onChange(a: any) {
    console.log('asdasdasd' + a)
  }
  const refImg = useRef<any>()

  const goTo = (slide: any) => {
    refImg.current.goTo(slide, false)
  }

  return (
    <Container>
      <Title>
        <div>
          <p style={{ marginBottom: 0 }}>Alquiler y suministros</p>
          <h1>Equipos para proyectos</h1>
        </div>
        <p style={{ width: '65%', marginLeft: '20px' }}>
          Ofrecemos productos y servicios de excelente calidad, con
          profesionalismo,
          <br /> responsabilidad y eficacia, así como los equipos adecuados para
          atender <br /> eficazmente sus necesidades técnicas y/o tecnológicas
        </p>
      </Title>

      <div>
        <Carousel
          ref={refImg}
          afterChange={onChange}
          dots={false}
          autoplay
          style={{
            height: '350px',
            width: '757px',
            zIndex: '2',
            position: 'relative',
            marginLeft: '5vh',
          }}
        >
          <div
            style={{
              height: '350px',
              width: '757px',
            }}
          >
            <H3Custom>
              <img
                src={MaquinaTermoVacio}
                alt=""
                style={{
                  height: '350px',
                  width: '757px',
                  borderRadius: '20px',
                  margin: 'auto',
                }}
              />
            </H3Custom>
          </div>
          <div>
            <H3Custom>
              <img
                src={MaquinaTermoVacio}
                alt=""
                style={{
                  height: '350px',
                  width: '757px',
                  borderRadius: '20px',
                  margin: 'auto',
                }}
              />
            </H3Custom>
          </div>
          <div>
            <H3Custom>
              <img
                src={MaquinaTermoVacio}
                alt=""
                style={{
                  height: '350px',
                  width: '757px',
                  borderRadius: '20px',
                  margin: 'auto',
                }}
              />
            </H3Custom>
          </div>
          <div>
            <H3Custom>
              <img
                src={MaquinaTermoVacio}
                alt=""
                style={{
                  height: '350px',
                  width: '757px',
                  borderRadius: '20px',
                  margin: 'auto',
                }}
              />
            </H3Custom>
          </div>
        </Carousel>
        <ButtonContainer>
          <CustomButton onClick={() => goTo(0)}>
            <CustomLine />
            <ButtonTitle>
              Espinterómetro <br />
              BAUR DPA75C
            </ButtonTitle>
            <p>
              Ensayador de <br />
              líquidos aislantes
            </p>
          </CustomButton>
          <CustomButton onClick={() => goTo(1)}>
            <CustomLine />
            <ButtonTitle>
              DTR
              <br /> AEMC
            </ButtonTitle>
            <p>
              Medidor de relación
              <br /> de transformación
            </p>
          </CustomButton>
          <CustomButton onClick={() => goTo(2)}>
            <CustomLine />
            <ButtonTitle>
              Megger
              <br /> MIT515
            </ButtonTitle>
            <p>
              Ensayador de nivel
              <br /> de aislamiento
            </p>
          </CustomButton>
          <CustomButton onClick={() => goTo(3)}>
            <CustomLine />
            <ButtonTitle>
              Vaisala
              <br /> DM70
            </ButtonTitle>
            <p>
              Punto de <br />
              Rocio
            </p>
          </CustomButton>
        </ButtonContainer>
      </div>
    </Container>
  )
}

export default EquipmentForMedition

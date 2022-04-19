import { Carousel, Button } from 'antd'
import { MaquinaTermoVacio } from 'assets'
import { device } from 'helpers/media-screen'
import React, { useRef } from 'react'
import styled from 'styled-components'
const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5vh auto 5vh auto;
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
  @media ${device.tablet} {
    width: 75%;
    flex-direction: column;
  }
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
const CustomButton2 = styled('button')`
  background-color: white;
  border: none;
  text-align: left;
  margin: 10vh 0 0 20vw;
  color: #c9c7c7;
  &:focus {
    color: #000000;
  }
  display: none;
  @media ${device.tablet} {
    display: unset;
  }
`
const ButtonTitle = styled('p')`
  font-size: x-large;
  font-weight: bolder;
  // color: #000000;
  &:focus {
    color: #000000;
  }
`
const ButtonTitle2 = styled('p')`
  font-size: x-large;
  font-weight: bolder;
  color: #000000;
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

const CustomLine2 = styled('div')`
  background-color: black;
  height: 0.4vh;
  width: 70vw;
  color: #c9c7c7;
  &:focus {
    color: #000000;
  }

  @media ${device.tablet} {
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
  @media ${device.tablet} {
    display: none;
  }
`
const CustomCarousel = styled(Carousel)`
  // height: 350px;
  width: 100vw;
  z-index: 2;
  positon: relative;
  @media ${device.tablet} {
    width: 100vw;
  }
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

function EquipmentForMedition() {
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
        <CustomCarousel ref={refImg} dots={false} autoplay>
          <H3Custom>
            <CustomImg src={MaquinaTermoVacio} alt="" />
            <CustomButton2 onClick={() => goTo(0)}>
              <CustomLine2 />
              <ButtonTitle2>
                Espinterómetro <br />
                BAUR DPA75C
              </ButtonTitle2>
              <p>
                Ensayador de <br />
                líquidos aislantes
              </p>
            </CustomButton2>
          </H3Custom>

          <div>
            <H3Custom>
              <CustomImg src={MaquinaTermoVacio} alt="" />
              <CustomButton2 onClick={() => goTo(1)}>
                <CustomLine2 />
                <ButtonTitle2>
                  DTR
                  <br /> AEMC
                </ButtonTitle2>
                <p>
                  Medidor de relación
                  <br /> de transformación
                </p>
              </CustomButton2>
            </H3Custom>
          </div>
          <div>
            <H3Custom>
              <CustomImg src={MaquinaTermoVacio} alt="" />
              <CustomButton2 onClick={() => goTo(2)}>
                <CustomLine2 />
                <ButtonTitle2>
                  Megger
                  <br /> MIT515
                </ButtonTitle2>
                <p>
                  Ensayador de nivel
                  <br /> de aislamiento
                </p>
              </CustomButton2>
            </H3Custom>
          </div>
          <div>
            <H3Custom>
              <CustomImg src={MaquinaTermoVacio} alt="" />
              <CustomButton2 onClick={() => goTo(3)}>
                <CustomLine2 />
                <ButtonTitle2>
                  Vaisala
                  <br /> DM70
                </ButtonTitle2>
                <p>
                  Punto de <br />
                  Rocio
                </p>
              </CustomButton2>
            </H3Custom>
          </div>
        </CustomCarousel>
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

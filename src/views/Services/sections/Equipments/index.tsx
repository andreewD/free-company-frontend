import { Carousel } from 'antd'
import { MaquinaTermoVacio } from 'assets'
import { device } from 'helpers/media-screen'
import React, { useRef } from 'react'
import styled from 'styled-components'
import './style.css'

const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5vh auto 5vh auto;
  gap: 5vh;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
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
const H3Custom = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const DescriptionText = styled('div')`
  width: 70%;
  margin-top: 50px;
  h2 {
    margin-left: 15vw;
  }
  p {
    margin-left: 15vw;
  }
  @media ${device.tablet} {
    width: 80%;

    h2 {
      margin-left: 10vw;
    }
    p {
      margin-left: 10vw;
    }
  }
`

const CustomCarousel = styled(Carousel)`
  // height: 10;
  margin-bottom: 5vh;
  width: 80vw;
  z-index: 2;
  positon: relative;
  @media ${device.tablet} {
    width: 100vw;
  }
`
const CustomDescription = styled('p')`
  width: 100%;
`

const CustomImg = styled('img')`
  height: 100%;
  width: 757px;
  border-radius: 20px;
  margin: auto;
  @media ${device.tablet} {
    height: 100%;
    width: 100vw;
  }
`
function Equipment() {
  const refImg = useRef<any>()

  const goTo = (slide: any) => {
    refImg.current.goTo(slide, false)
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
          <p style={{ marginBottom: 0 }}>Alquiler y suministros</p>
          <h1>Equipos para proyectos</h1>
        </div>
        <CustomDescription>
          Ofrecemos productos y servicios de excelente calidad, con
          profesionalismo,
          <br /> responsabilidad y eficacia, así como los equipos adecuados para
          atender <br /> eficazmente sus necesidades técnicas y/o tecnológicas
        </CustomDescription>
      </Title>

      <div>
        <CustomCarousel ref={refImg} dots={false} autoplay>
          <H3Custom>
            <CustomImg src={MaquinaTermoVacio} alt="" />
            <DescriptionText>
              <p>Máquina de Termovacio 4000Lt/h Globe Core</p>
            </DescriptionText>
          </H3Custom>

          <div>
            <H3Custom>
              <CustomImg src={MaquinaTermoVacio} alt="" />
            </H3Custom>
            <DescriptionText>
              <p>Máquina de Termovacio 4000Lt/h Globe Core Item 2</p>
            </DescriptionText>
          </div>
          <div>
            <H3Custom>
              <CustomImg src={MaquinaTermoVacio} alt="" />
            </H3Custom>
            <DescriptionText>
              <p>Máquina de Termovacio 4000Lt/h Globe Core Item 3</p>
            </DescriptionText>
          </div>
          <div>
            <H3Custom>
              <CustomImg src={MaquinaTermoVacio} alt="" />
            </H3Custom>
            <DescriptionText>
              <p>Máquina de Termovacio 4000Lt/h Globe Core Item 4</p>
            </DescriptionText>
          </div>
        </CustomCarousel>
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            marginTop: '-7vh',
            marginLeft: '20vw',
            marginBottom: '10vh',
            zIndex: '3',
            position: 'relative',
          }}
        >
          <button onClick={() => goTo(0)} style={btnStyle} />
          <button onClick={() => goTo(1)} style={btnStyle} />
          <button onClick={() => goTo(2)} style={btnStyle} />
          <button onClick={() => goTo(3)} style={btnStyle} />
        </div> */}
      </div>
    </Container>
  )
}

export default Equipment

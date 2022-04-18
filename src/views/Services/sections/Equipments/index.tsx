import { Carousel } from 'antd'
import { MaquinaTermoVacio } from 'assets'
import React, { useRef } from 'react'
import styled from 'styled-components'
import './style.css'

const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10vh auto 5vh auto;
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
`
const H3Custom = styled('h3')`
height: '350px'
width: '757px'
`

const DescriptionText = styled('div')`
  margin-top: 50px;
`

function Equipment() {
  function onChange(a: any) {
    console.log(a)
  }
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
              <DescriptionText>
                <p>Máquina de Termovacio 4000Lt/h Globe Core</p>
              </DescriptionText>
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
            <DescriptionText>
              <p>Máquina de Termovacio 4000Lt/h Globe Core Item 2</p>
            </DescriptionText>
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
            <DescriptionText>
              <p>Máquina de Termovacio 4000Lt/h Globe Core Item 3</p>
            </DescriptionText>
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
            <DescriptionText>
              <p>Máquina de Termovacio 4000Lt/h Globe Core Item 4</p>
            </DescriptionText>
          </div>
        </Carousel>
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            marginTop: '2vh',
            marginBottom: '10vh',
            zIndex: '3',
            position: 'relative',
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

export default Equipment

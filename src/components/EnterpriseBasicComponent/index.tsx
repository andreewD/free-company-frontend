import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Steps, Popover, StepsProps } from 'antd'
import { device } from 'helpers/media-screen'

interface Props {
  topTitle: string
  mainTitle: string
  rightText: string
  children?: any
  imgPath?: string
}

const Container = styled('div')`
  width: 100vh;

  display: flex;
  flex-direction: column;
  margin: 10vh auto 20vh auto;
  gap: 15px;
  @media ${device.tablet} {
    width: 100vw;

    margin: 10vh auto 10vh auto;
  }
`

const Title = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${device.tablet} {
    width: 80%;
    flex-direction: column;
    margin: auto;
  }
`
const CustomImg = styled('img')`
  margin-top: 20px;
  @media ${device.tablet} {
    height: 100%;
    width: 98vw;
  }
`

const EnterpriseBasicComponent: React.FC<Props> = (props: Props) => {
  const { topTitle, mainTitle, rightText, children, imgPath } = props
  if (children) {
    return (
      <>
        <Container>
          <Title>
            <div>
              <p style={{ marginBottom: 0 }}>{topTitle}</p>
              <h1>{mainTitle}</h1>
            </div>
            <p style={{ width: '65%' }}>{rightText}</p>
          </Title>
          <div> {children}</div>
        </Container>
      </>
    )
  } else {
    return (
      <>
        <Container>
          <Title>
            <div>
              <p style={{ marginBottom: 0 }}>{topTitle}</p>
              <h1>{mainTitle}</h1>
            </div>
            <p style={{ width: '65%' }}>{rightText}</p>
          </Title>
          <CustomImg src={imgPath} alt="img" />
        </Container>
      </>
    )
  }
}

export default EnterpriseBasicComponent

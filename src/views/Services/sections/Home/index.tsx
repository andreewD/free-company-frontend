import { ArrowButton } from 'assets'
import styled, { keyframes } from 'styled-components'
import { ServicesImg } from 'assets'

const flicker = keyframes`
0% {
  bottom: 1.75rem;
}
50% {
  bottom: 1rem;
}
100% {
  bottom: 1.75rem;
}
`
const ArrowButtonContainer = styled('button')`
  background: none;
  border: none;
  color: white;
  position: absolute;
  height: 12px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${flicker} 1.5s linear infinite;
  cursor: pointer;
`
const CustomImg = styled('img')`
  height: 100%;
`

const MainContainer = styled('section')`
  height: 100vh;
  width: 100%;
  position: relative;
  background-image: url(${ServicesImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

function Home() {
  const windowHeight = window.innerHeight
  const goToScrooll = () => {
    window.scrollTo(0, windowHeight)
  }
  return (
    <MainContainer>
      <ArrowButtonContainer onClick={goToScrooll}>
        <CustomImg src={ArrowButton} alt="arrow" />
      </ArrowButtonContainer>
    </MainContainer>
  )
}

export default Home

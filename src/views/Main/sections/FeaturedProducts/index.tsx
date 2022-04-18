import { Swiper } from 'components'
import styled from 'styled-components'

const SwiperSection = styled.div`
  width: 100%;
`

const FeaturedProducts = () => {
  return (
    <SwiperSection className="featuredProductsContainer">
      <Swiper />
    </SwiperSection>
  )
}

export default FeaturedProducts

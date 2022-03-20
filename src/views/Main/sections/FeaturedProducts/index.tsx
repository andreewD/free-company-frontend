import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles.scss'

const FeaturedProducts = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      onResize={(swiper) => {}}
      onSwiper={(swiper) => {}}
      className="mySwiperxDD "
      modules={[Pagination, Navigation]}
    >
      {/* <div className="swiperContainerxD"> */}
        <SwiperSlide className="swiperSlide">
          <div className="featuredProduct">
            <img src="https://i.ibb.co/4ZpMTrY/aceite-distro.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <div className="featuredProduct">
            <img src="https://i.ibb.co/4ZpMTrY/aceite-distro.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <div className="featuredProduct">
            <img src="https://i.ibb.co/4ZpMTrY/aceite-distro.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <div className="featuredProduct">
            <img src="https://i.ibb.co/4ZpMTrY/aceite-distro.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <div className="featuredProduct">
            <img src="https://i.ibb.co/4ZpMTrY/aceite-distro.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <div className="featuredProduct">
            <img src="https://i.ibb.co/4ZpMTrY/aceite-distro.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <div className="featuredProduct">
            <img src="https://i.ibb.co/4ZpMTrY/aceite-distro.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <div className="featuredProduct">
            <img src="https://i.ibb.co/4ZpMTrY/aceite-distro.png" alt="img" />
          </div>
        </SwiperSlide>
      {/* </div> */}
    </Swiper>
  )
}

export default FeaturedProducts

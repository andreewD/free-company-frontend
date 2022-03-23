import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'assets'
import './styles.scss'

const imagesList = [
  {
    url: 'https://i.ibb.co/hmQB5Hj/aceite-distro.png',
    title: 'Aceite distro dt-11',
  },
  {
    url: 'https://i.ibb.co/JH6B2ck/E524.png',
    title: 'Antiflash G-144',
  },
  {
    url: 'https://i.ibb.co/B2xJ5Mx/cinta-polyester.png',
    title: 'Cintas polyester',
  },
  {
    url: 'https://i.ibb.co/hmQB5Hj/aceite-distro.png',
    title: 'Aceite distro dt-112',
  },
  {
    url: 'https://i.ibb.co/JH6B2ck/E524.png',
    title: 'Antiflash G-1442',
  },
  {
    url: 'https://i.ibb.co/B2xJ5Mx/cinta-polyester.png',
    title: 'Cintas polyester2',
  },
  {
    url: 'https://i.ibb.co/hmQB5Hj/aceite-distro.png',
    title: 'Aceite distro dt-113',
  },
  {
    url: 'https://i.ibb.co/JH6B2ck/E524.png',
    title: 'Antiflash G-1443',
  },
  {
    url: 'https://i.ibb.co/B2xJ5Mx/cinta-polyester.png',
    title: 'Cintas polyester3',
  },
]

const Swiper = () => {
  const quantity = 3

  const [swiperLength, setswiperLength] = useState(0)

  const leftButton = () => {
    setswiperLength(swiperLength + 1)
  }
  const rightButton = () => {
    setswiperLength(swiperLength - 1)
  }

  return (
    <div className="swiperComponentContainer">
      <h2>PRODUCTOS DESTACADOS</h2>
      <div className="swiperComponent">
        <button
          className="leftButton"
          onClick={leftButton}
          disabled={swiperLength === 0}
        >
          <img src={ChevronLeft} alt="ChevronLeft" />
        </button>
        <div className="swiperContainer">
          <div
            style={{
              width: `calc(${imagesList.length * 20}vw + ${
                imagesList.length - 1
              }rem)`,
              gridTemplateColumns: `repeat(${imagesList.length}, 1fr)`,
              transform: `translateX(calc( ${swiperLength} * ( (100vw - 200px - 4rem) / ${quantity} - ${
                quantity - 1
              }rem + 7px + 2rem) ))`,
            }}
            className="swiperList"
          >
            {imagesList.map((image) => {
              return (
                <button
                  style={{
                    width: `calc((100vw - 200px - 4rem) / ${quantity} - ${
                      quantity - 1
                    }rem + 7px)`,
                  }}
                  className="productContainer"
                  key={image.title}
                >
                  <div className="imageContainer">
                    <img src={image.url} alt={image.title} />
                  </div>
                  <p>{image.title}</p>
                </button>
              )
            })}
          </div>
        </div>

        <button
          className="rightButton"
          onClick={rightButton}
          disabled={swiperLength === -(imagesList.length - quantity)}
        >
          <img src={ChevronRight} alt="ChevronRight" />
        </button>
      </div>
    </div>
  )
}

export default Swiper

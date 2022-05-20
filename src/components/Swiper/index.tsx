import styled from 'styled-components'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'assets'

const CustomSwiper=styled.div`
  padding: 1rem 0;
  h2 {
    margin: 2rem 3rem;
    font-size: 18px;
  }
  .swiperComponent {
    position: relative;
    height: 60vh;
    padding: 0 8.25rem;
    button {
      border: none;
      background-color: whitesmoke;
      height: 100%;
      transition: 0.4s;
      cursor: pointer;
      &:hover {
        background-color: rgb(233, 233, 233);
      }
    }
    & > button {
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100px;
      img {
        height: 1rem;
        opacity: 0.5;
        transition: 0.4s;
      }
      &:disabled {
        cursor: not-allowed;
        background-color: whitesmoke;
        img {
          opacity: 0.2;
        }
      }
    }
    .leftButton {
      left: 0;
    }
    .rightButton {
      right: 0;
    }
    .swiperContainer {
      width: 100%;
      overflow-x: hidden;
      height: 100%;

      .swiperList {
        height: 100%;
        display: grid;
        gap: 2rem;
        transition: 0.4s;
        .productContainer {
          height: 100%;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 80% 20%;
          .imageContainer {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            overflow: hidden;
            height: 100%;
            padding: 1rem 0 0;
            img {
              height: 100%;
            }
          }
          p {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            color: black;
            font-weight: 600;
            font-size: 1rem;
          }
        }
      }
    }
  }
`

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
    <CustomSwiper className="swiperComponentContainer">
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
    </CustomSwiper>
  )
}

export default Swiper

import Button from 'components/Button'
import { Slide } from 'react-slideshow-image'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FC } from 'react'
import { Product } from 'models/products'
import {
  LeftOutlined,
  RightOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons'
import { device } from 'helpers/media-screen'

const CustomCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  &:hover {
    .buttonsCardContainer {
      opacity: 100%;
    }
    .arrowCardContainer {
      display: block;
      opacity: 100%;
    }
  }
  .descriptionCardContainer {
    * {
      font-weight: 700;
    }
    h3 {
      font-size: 24px;
    }
    h4 {
      font-size: 20px;
    }
    h5 {
      font-size: 16px;
    }
  }
  .imagesCardContainer {
    width: 100%;
    height: 20rem !important;
    overflow: hidden;
    .contSliderAbsolute {
      width: 100%;
      height: 100%;
      position: relative;
      .contSliderRelative {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    .image {
      height: 18rem !important;
      padding: 2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 100%;
      }
    }
  }
  .buttonsCardContainer {
    transition: 0.4s;
    opacity: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .arrowCardContainer {
    transition: 0.4s;
    background-color: #7f7f7f;
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0;
    * {
      fill: white;
    }
  }
  @media ${device.mobile} {
    .buttonsCardContainer {
      grid-template-columns: 1fr;
    }
  }
`

const properties = {
  autoplay: false,
  transitionDuration: 350,
  infinite: false,
  prevArrow: (
    <div className="arrowCardContainer">
      <LeftOutlined />
    </div>
  ),
  nextArrow: (
    <div className="arrowCardContainer">
      <RightOutlined />
    </div>
  ),
}

const Card: FC<Product> = (props) => {
  const navigate = useNavigate()
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const goToWhatsapp = (data: any) => {
    openInNewTab(
      `https://wa.me/51959168186?text=Buenas!%20%20Estoy%20interesad@%20en%20el%20producto%20${data.names}%20de%20la%20marca%20${data.brand}`
    )
  }

  const goToProductInformation = (productID: string) => {
    navigate(`/products/${productID}`)
  }

  return (
    <CustomCard className="cardComponent">
      <div className="descriptionCardContainer">
        <h3>{props.names}</h3>
        <h4>{props.details1}</h4>
        <h5>{props.brand}</h5>
      </div>
      <div className="imagesCardContainer">
        <div className="contSliderAbsolute">
          <div className="contSliderRelative">
            <Slide {...properties}>
              {props.images.map((url, index) => (
                <div key={index} className="each-slide">
                  <div className="image">
                    <img src={url} alt={`${index}`} />
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
      <div className="buttonsCardContainer">
        <Button onClick={() => goToWhatsapp(props)}>
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <WhatsAppOutlined /> CONSULTAR
          </p>
        </Button>
        <Button
          buttonType="outline"
          onClick={() => goToProductInformation(props.id)}
        >
          <p>VER PRODUCTO</p>
        </Button>
      </div>
    </CustomCard>
  )
}

export default Card

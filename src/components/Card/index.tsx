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

const CustomCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 500px;
  &:hover {
    .buttonsCardContainer {
      display: grid;
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
    height: 18rem;
    overflow: hidden;
    & > * {
      width: 100%;
      height: 100%;
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
    display: none;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .arrowCardContainer {
    background-color: #7f7f7f;
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;
    * {
      fill: white;
    }
  }
`

const properties = {
  duration: 5000,
  transitionDuration: 500,
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
  const goToWhatsapp = () => {
    alert('Go to WHATSAPP')
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
      <div className="buttonsCardContainer">
        <Button onClick={goToWhatsapp}>
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

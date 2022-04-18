import styled from 'styled-components'
import { Slide } from 'react-slideshow-image'
import { Button, Spinner } from 'components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AppService } from 'services'
import { Product } from 'models/products'
import {
  LeftOutlined,
  RightOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons'

const ProductView = styled.main`
  background-color: white;
  padding: 6rem 2rem 2rem !important;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  .productInfoImages {
    width: 100%;
    height: calc(100vh - 6rem);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    & > * {
      width: 100%;
      height: 100%;
    }
    .image {
      height: 500px;
      padding: 2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 100%;
      }
    }
  }
  .productInformation {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .tagsInformation {
      h3 {
        font-size: 2rem;
      }
      h4 {
        font-size: 25px;
      }
      h5 {
        font-size: 20px;
        font-weight: 500;
      }
    }
    .buttonsInformationContainer {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
    .descriptionInformationContainer {
      * {
        font-size: 20px;
      }
      p {
        font-weight: 400;
      }
    }
  }
`
const ProductSpinner = styled.div`
  width: 100%;
  min-height: calc(100vh - 6.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
`
const ArrowInfoContainer = styled.div`
  background-color: #eeeeee;
  padding: 8px 10px;
  border-radius: 5px;
  border-radius: 100%;
  cursor: pointer;
  * {
    fill: black;
  }
`

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  prevArrow: (
    <ArrowInfoContainer>
      <LeftOutlined />
    </ArrowInfoContainer>
  ),
  nextArrow: (
    <ArrowInfoContainer>
      <RightOutlined />
    </ArrowInfoContainer>
  ),
}

const ProductsInformation = () => {
  const { productID } = useParams()
  const appService = AppService()
  const [data, setData] = useState<Product | null>(null)
  const goToWhatsapp = () => {
    alert('Go to WHATSAPP')
  }

  useEffect(() => {
    const getProductByID = async () => {
      const response = await appService.getProductByID(productID || '')
      setData(response.message)
    }
    getProductByID()
  }, [])
  return data ? (
    <ProductView className="productInfoViewContainer">
      <div className="productInfoImages">
        <Slide {...properties}>
          {data.images.map((url, index) => (
            <div key={index} className="each-slide">
              <div className="image">
                <img src={url} alt={`${index}`} />
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="productInformation">
        <div className="tagsInformation">
          <h3>{data.names}</h3>
          <h4>{data.details1}</h4>
          <h5>{data.brand}</h5>
        </div>
        <div className="buttonsInformationContainer">
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
          <Button buttonType="secondary">
            <p>FICHA TÉCNICA</p>
          </Button>
        </div>
        <div className="descriptionInformationContainer">
          <h5>Descripción</h5>
          <p>{data.description}</p>
        </div>
      </div>
    </ProductView>
  ) : (
    <ProductSpinner>
      <Spinner />
    </ProductSpinner>
  )
}

export default ProductsInformation

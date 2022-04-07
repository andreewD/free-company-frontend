import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import { Slide } from 'react-slideshow-image'
import { Button } from 'components'
import './styles.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AppService } from 'services'
import { Product } from 'models/products'

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  prevArrow: (
    <div className="arrowInfoContainer">
      <ArrowBackIosRoundedIcon color="inherit" fontSize="small" />
    </div>
  ),
  nextArrow: (
    <div className="arrowInfoContainer">
      <ArrowForwardIosRoundedIcon color="inherit" fontSize="small" />
    </div>
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
      console.log(response.message)
    }
    getProductByID()
  }, [])
  return (
    <main className="productInfoViewContainer">
      {data ? (
        <>
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
                  <WhatsAppIcon /> CONSULTAR
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
        </>
      ) : (
        <div>Cargando ...</div>
      )}
    </main>
  )
}

export default ProductsInformation

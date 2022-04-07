import Button from 'components/Button'
import { Slide } from 'react-slideshow-image'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { FC } from 'react'
import { Product } from 'models/products'

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  prevArrow: (
    <div className="arrowCardContainer">
      <ArrowBackIosRoundedIcon color="inherit" fontSize="small" />
    </div>
  ),
  nextArrow: (
    <div className="arrowCardContainer">
      <ArrowForwardIosRoundedIcon color="inherit" fontSize="small" />
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
    <div className="cardComponent">
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
            <WhatsAppIcon /> CONSULTAR
          </p>
        </Button>
        <Button
          buttonType="outline"
          onClick={() => goToProductInformation(props.id)}
        >
          <p>VER PRODUCTO</p>
        </Button>
      </div>
    </div>
  )
}

export default Card

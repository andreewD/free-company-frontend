import Button from 'components/Button'
import { Slide } from 'react-slideshow-image'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import './styles.scss'
import { useNavigate } from 'react-router-dom'

const slideImages = [
  'https://i.ibb.co/4PQtCpf/aceite-distro-2.png',
  'https://i.ibb.co/GJf5t25/Mask-group-1.png',
  'https://i.ibb.co/wSGms9X/Mask-group.png',
]

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



const Card = () => {
  const navigate =useNavigate()
  const goToWhatsapp = () => {
    alert('Go to WHATSAPP')
  }
  
  const goToProductInformation = () => {
    navigate('/products/idProduct')
  }
  return (
    <div className="cardComponent">
      <div className="descriptionCardContainer">
        <h3>Aceite Dieléctrico</h3>
        <h4>Distro DT-11</h4>
        <h5>NYNAS</h5>
      </div>
      <div className="imagesCardContainer">
        <Slide {...properties}>
          {slideImages.map((each, index) => (
            <div key={index} className="each-slide">
              <div className="image">
                <img src={each} alt={`${index}`} />
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
        <Button buttonType="outline" onClick={goToProductInformation}>
          <p>VER PRODUCTO</p>
        </Button>
      </div>
    </div>
  )
}

export default Card

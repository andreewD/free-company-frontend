import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import { Slide } from 'react-slideshow-image'
import { Button } from 'components'
import './styles.scss'

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
  const goToWhatsapp = () => {
    alert('Go to WHATSAPP')
  }
  return (
    <main className="productInfoViewContainer">
      <div className="productInfoImages">
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
      <div className="productInformation">
        <div className="tagsInformation">
          <h3>Aceite Dieléctrico</h3>
          <h4>Distro DT-11</h4>
          <h5>NYNAS</h5>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            vestibulum ante. Nullam suscipit turpis a leo ultrices pretium.
            Donec nec consequat mi. Fusce et justo auctor, elementum velit
            vitae, dictum dolor. Fusce egestas egestas mi eget vulputate.
            Pellentesque malesuada urna sed eros porttitor, quis commodo massa
            tincidunt.
          </p>
        </div>
      </div>
    </main>
  )
}

export default ProductsInformation

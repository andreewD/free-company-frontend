import React from 'react'
import { EnterpriseBasicComponent } from '../../../../components'
import { VisionImg } from 'assets'
function Vision() {
  const visionText = `Ser un actor relevante en el mercado nacional e internacional como una empresa líder en la comercialización de materiales eléctricos utilizados en la fabricación y reparación de todo tipo de motores eléctricos y transformadores de distribución y potencia.`
  return (
    <EnterpriseBasicComponent
      topTitle="Enfoque y meta"
      mainTitle="Nuestra visión"
      rightText={visionText}
      imgPath={VisionImg}
    ></EnterpriseBasicComponent>
  )
}

export default Vision

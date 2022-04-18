import React from 'react'
import { EnterpriseBasicComponent } from '../../../../components'
import { MisionImg } from 'assets'
function Mision() {
  const objetiveText = `Imcetron sigue una filosofía empresarial simple: suministrar materiales eléctricos y ofrecer soluciones eléctricas confiables para las condiciones particulares de nuestro país, cumpliendo con las normas nacionales e internacionales exigidas por nuestros clientes.`
  return (
    <EnterpriseBasicComponent
      topTitle="Objetivo principal"
      mainTitle="Nuestra misión"
      rightText={objetiveText}
      imgPath={MisionImg}
    ></EnterpriseBasicComponent>
  )
}

export default Mision

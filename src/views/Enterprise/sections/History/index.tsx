import styled from 'styled-components'
import { Steps, Popover } from 'antd'
import { EnterpriseBasicComponent } from '../../../../components'
import { HistoryImg } from 'assets'

function History() {
  const trayectoryText = ` Conozca un poco más acerca de nuestra trayectoria y nuestros logros
  cumplidos desde los inicios de Imcetrons hasta la actualidad.`

  return (
    <EnterpriseBasicComponent
      topTitle="Trayectoria"
      mainTitle="Nuestra historia"
      rightText={trayectoryText}
      imgPath={HistoryImg}
    ></EnterpriseBasicComponent>
  )
}

export default History

import styled from 'styled-components'
import { Steps, Popover } from 'antd'
import { EnterpriseBasicComponent } from '../../../../components'
import { HistoryImg } from 'assets'

function History() {
  const trayectoryText = ` Conozca un poco más acerca de nuestra trayectoria y nuestros logros
  cumplidos desde los inicios de Imcetrons hasta la actualidad.`

  return (
    <>
      <EnterpriseBasicComponent
        topTitle="Trayectoria"
        mainTitle="Nuestra historia"
        rightText={trayectoryText}
        imgPath={HistoryImg}
      />
    </>
  )
}

export default History

{
  /* <>
{/* <EnterpriseBasicComponent
  topTitle="Trayectoria"
  mainTitle="Nuestra historia"
  rightText={trayectoryText}
>
  <></>
</EnterpriseBasicComponent> */
}

// <GrayContainer>
// <Steps
//   progressDot
//   current={4}
//   style={{ margin: '150px 0 150px 0', width: '80%' }}
// >
//   <Step
//     title="1998"
//     description="Se funda la empresa Imcetron S.R.L."
//     style={{ fontWeight: 'bold' }}
//   />
//   <Step
//     title="1998"
//     description="Se funda la empresa Imcetron S.R.L."
//     style={{ fontWeight: 'bold' }}
//   />
//   <Step
//     title="1998"
//     description="Se funda la empresa Imcetron S.R.L."
//     style={{ fontWeight: 'bold' }}
//   />
//   <Step
//     title="1998"
//     description="Se funda la empresa Imcetron S.R.L."
//     style={{ fontWeight: 'bold' }}
//   />
// </Steps>
// </GrayContainer>

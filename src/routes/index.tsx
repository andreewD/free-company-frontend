import { Header } from 'components'
import render from './render'
import routes from './routes'

const Root = () => {
  return (
    <div>
      <Header />
      {render(routes)}
    </div>
  )
}

export default Root

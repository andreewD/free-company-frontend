import Root from 'routes'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'react-slideshow-image/dist/styles.css'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return <Root />
}

export default App

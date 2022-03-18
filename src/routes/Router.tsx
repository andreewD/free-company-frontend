import { Route, Routes } from 'react-router-dom'
import { Main } from 'views'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default Router

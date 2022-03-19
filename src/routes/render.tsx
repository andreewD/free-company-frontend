import { Route, Routes } from 'react-router-dom'

interface Route {
  path: string
  exact: boolean
  component: JSX.Element
}

type RenderRoutes = (routes: Route[]) => JSX.Element

const render: RenderRoutes = (routes) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
    </Routes>
  )
}

export default render

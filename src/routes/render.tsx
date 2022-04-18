import { Route, Routes } from 'react-router-dom'

interface RouteProps {
  path: string
  exact: boolean
  component: JSX.Element
}

type RenderRoutes = (routes: RouteProps[]) => JSX.Element

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

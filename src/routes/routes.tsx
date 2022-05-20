import {
  Contact,
  Main,
  ProductInformation,
  Products,
  Enterprise,
  Services,
} from 'views'

const routes = [
  {
    path: '/',
    exact: true,
    component: <Main />,
  },
  {
    path: '/products',
    exact: true,
    component: <Products />,
  },
  {
    path: '/products/:productID',
    exact: true,
    component: <ProductInformation />,
  },
  {
    path: '/contact-us',
    exact: true,
    component: <Contact />,
  },
  {
    path: '/enterprise',
    exact: true,
    component: <Enterprise />,
  },
  {
    path: '/services',
    exact: true,
    component: <Services />,
  },
]

export default routes

import { Contact, Main, ProductInformation, Products } from 'views'

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
]

export default routes

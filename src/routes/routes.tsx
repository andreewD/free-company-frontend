import { Contact, Main, ProductInformation, Products } from 'views'

export const routes = [
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
    path: '/products/idProduct',
    exact: true,
    component: <ProductInformation />,
  },
  {
    path: '/contact-us',
    exact: true,
    component: <Contact />,
  },
]

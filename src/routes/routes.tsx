import { Contact, Main, Products } from 'views'

export default [
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
    path: '/contact-us',
    exact: true,
    component: <Contact />,
  },
]

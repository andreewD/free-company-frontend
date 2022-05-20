import {
  Customers,
  FeaturedProducts,
  Home,
  Sectors,
  Statistics,
} from './sections'

const Main = () => {
  return (
    <main>
      <Home />
      {/* <FeaturedProducts /> */}
      <Sectors />
      <Customers />
      <Statistics />
    </main>
  )
}

export default Main

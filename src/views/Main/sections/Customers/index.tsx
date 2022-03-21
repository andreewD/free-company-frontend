import './styles.scss'

const customersLogos = [
  {
    url: 'https://i.ibb.co/yXcGf6m/abb.png',
    alt: 'abb',
  },
  {
    url: 'https://i.ibb.co/wscHR0d/ayq.png',
    alt: 'ayc',
  },
  {
    url: 'https://i.ibb.co/R6Vbcqp/cathodic.png',
    alt: 'cathodic',
  },
  {
    url: 'https://i.ibb.co/s6d8b7y/cda.png',
    alt: 'cda',
  },
  {
    url: 'https://i.ibb.co/61SWPGM/cea.png',
    alt: 'cea',
  },
  {
    url: 'https://i.ibb.co/Gdw6xtX/cym.png',
    alt: 'cym',
  },
  {
    url: 'https://i.ibb.co/mbGTP2L/delcrosa.png',
    alt: 'delcrosa',
  },
  {
    url: 'https://i.ibb.co/YpTqRvz/elise.png',
    alt: 'elise',
  },
  {
    url: 'https://i.ibb.co/jTjb8cy/gr.png',
    alt: 'gr',
  },
  {
    url: 'https://i.ibb.co/VmQCcxH/itesa.png',
    alt: 'itesa',
  },
  {
    url: 'https://i.ibb.co/qj0XKdF/reselec-logo.png',
    alt: 'reselec',
  },
  {
    url: 'https://i.ibb.co/Nj6qwsv/td.png',
    alt: 'td',
  },
  {
    url: 'https://i.ibb.co/FBQv7pS/tecsur.png',
    alt: 'tecsur',
  },
]

const Customers = () => {
  return (
    <section className="customersContainer">
      <div className="logoListContainer">
        <header>
          <h3>Ellos confían en nosotros</h3>
        </header>
        <main>
          {/* <img src="" alt={} alt="" /> */}
          {customersLogos.map((customer) => {
            return (
              <img src={customer.url} alt={customer.alt} key={customer.alt} />
            )
          })}
        </main>
      </div>
    </section>
  )
}

export default Customers

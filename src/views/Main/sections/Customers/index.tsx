import styled from 'styled-components'

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

const CustomersSection = styled.section`
  padding: 1rem 2rem;
  .logoListContainer {
    background-color: rgb(168, 168, 168);
    padding: 1rem 3rem;
    header {
      margin: 2rem 0 3rem;
      h3 {
        font-size: 1.5rem;
        color: white;
        text-align: center;
      }
    }
    main {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;
      img {
        height: 5rem;
      }
    }
  }
`

const Customers = () => {
  return (
    <CustomersSection className="customersContainer">
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
    </CustomersSection>
  )
}

export default Customers

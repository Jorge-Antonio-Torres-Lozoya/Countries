// hooks
import useGetData from '../hooks/useGetData'

// componentes
import Card from './Card'

const Countries = () => {
  const { data, loading } = useGetData('https://restcountries.com/v3.1/all')

  return (
    <section className='container py-4'>
      <div className='row gy-4'>
        {
        loading
          ? <p className='text-center text-white'>Cargando...</p>
          : data.map((country, index) => (
            <aside key={index} className='col-12 col-md-6 col-lg-3'>
              <Card {...country} />
            </aside>
          ))
        }
      </div>
    </section>
  )
}

export default Countries

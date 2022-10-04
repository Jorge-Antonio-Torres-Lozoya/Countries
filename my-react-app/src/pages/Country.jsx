import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { alphaCode } = useParams()
  const navigate = useNavigate()

  const { data, loading } = useGetData(
    `https://restcountries.com/v3.1/alpha/${alphaCode}`
  )

  useEffect(() => {
    data.status === 400 && navigate('/404')
  }, [data.status])
  console.log(data)
  return (
    <section className='container py-3'>
      <div className='row justify-content-center text-white'>
        <aside className='col-6 '>
          {loading
            ? <p className='text-center text-white'>Cargando...</p>
            : (
              <article className='d-flex p-2 row justify-content-center containerWrap '>
                <img className='img-fluid img' src={data[0]?.flags?.svg} alt='bandera' />
                <h1 className='text-center'>{data[0]?.name?.common || data.message}</h1>
                <h2 className='text-center'>Capital: {data[0]?.capital[0] || data.message}</h2>
                <h2 className='text-center'>Continente: {data[0]?.continents[0] || data.message}</h2>
                <h2 className='text-center'>Zona horaria: {data[0]?.timezones[0] || data.message}</h2>
                <h2 className='text-center'>Ubicación en el mapa:  </h2> <a target='_blank' className='text-center text-white fs-2 text' href={data[0]?.maps?.googleMaps} rel='noopener noreferrer'>{data[0]?.maps?.googleMaps}</a>

              </article>
              )}
        </aside>
        {/* {data.status === 400 && <Navigate to='/404' />} */}
      </div>
    </section>
  )
}

export default Country

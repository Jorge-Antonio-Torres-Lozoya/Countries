import { Link } from 'react-router-dom'
import toLowerCase from '../utils/toLowerCase'

const Card = ({ name = {}, flags = {}, capital = [], cca3 = '' }) => {
  return (
    <Link className='text-decoration-none text-body' to={toLowerCase(cca3)}>
      <div className='card'>
        <img src={flags.svg} className='card-img-top' alt={name.common} />
        <div className='card-body'>
          <h5 className='card-title'>{name.common}</h5>
          <p className='m-0'>{capital[0]}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card

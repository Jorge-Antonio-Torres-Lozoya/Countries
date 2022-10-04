import { NavLink } from 'react-router-dom'
import Container from './Container'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Container>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link' aria-current='page'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/link' className='nav-link'>
                Link
              </NavLink>
            </li>
            <li className='nav-item'>
              <a target='_blank' className='nav-link' href='https://google.com' rel='noreferrer'>
                Google
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar

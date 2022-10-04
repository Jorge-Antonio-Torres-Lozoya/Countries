import { Outlet } from 'react-router-dom'

// componentes
import Navbar from '../components/Navbar'

// funciones propias

function App () {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App

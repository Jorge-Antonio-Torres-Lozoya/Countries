import { BrowserRouter, Routes, Route } from 'react-router-dom'

// componentes
// import Navbar from './components/Navbar'
import Countries from './components/Countries'
import App from './pages/App'
import Country from './pages/Country'
// import Navbar from './components/Navbar'

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Countries />} />
          <Route path=':alphaCode' element={<Country />} />
          <Route path='404' element={<p>Página no encontrada</p>} />
        </Route>
        {/* <Route path='*' element={<p>Página no encontrada</p>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router

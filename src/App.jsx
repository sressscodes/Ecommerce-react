import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Product from './Pages/Product'
import Shopcategory from './Pages/Shopcategory'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/indoors' element={<Shopcategory banner={men_banner} category='indoor'/>}></Route>
          <Route path='/outdoors' element={<Shopcategory banner={women_banner} category='outdoor'/>}></Route>
          <Route path='/flowerings' element={<Shopcategory banner={kid_banner} category= 'flowering' />}></Route>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import ItemPage from './ItemPage.jsx'
import Navbar from './Navbar.jsx'
import ShopPage from './ShopPage.jsx'
import { Routes, Route } from 'react-router-dom'
import Wrapper from './Wrapper.jsx'
import HomePage from './HomePage.jsx'
import ContactPage from './ContactPage.jsx'
import CustomPage from './CustomPage.jsx'
import './App.css'
import InfoPage from './InfoPage.jsx'
import Cart from './Cart.jsx'

function App() {
 
  return (
    <>
    <Navbar />
      {/* <Wrapper> */}
        <Routes>
        <Route path='/' element={<HomePage />}/>
          <Route path='/shop' element={<ShopPage />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/info' element={<InfoPage />}/>
          <Route path='/custom' element={<CustomPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path="/shop/:id" element={<ItemPage />} />
        </Routes>
        {/* <ShopPage /> */}
        {/* <ItemPage /> */}
      {/* </Wrapper> */}
    </>
  )
}

export default App

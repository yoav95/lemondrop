import ItemPage from './pages/ItemPage.jsx'
import Navbar from './components/Navbar.jsx'
import ShopPage from './pages/ShopPage.jsx'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import CustomPage from './pages/CustomPage.jsx'
import './App.css'
import InfoPage from './pages/InfoPage.jsx'
import Cart from './components/Cart.jsx'
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from './context/LanguageContext.jsx'

function App() {
 
  return (
    <>
        <CartProvider>
          <LanguageProvider>
        <Navbar />
        <Routes>
        <Route path='/' element={<HomePage />}/>
          <Route path='/shop' element={<ShopPage />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/info' element={<InfoPage />}/>
          <Route path='/custom' element={<CustomPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path="/shop/:type" element={<ShopPage />} /> 
          <Route path="/shop/item/:id" element={<ItemPage />} />
        </Routes>
        </LanguageProvider>
        </CartProvider>
    </>
  )
}

export default App

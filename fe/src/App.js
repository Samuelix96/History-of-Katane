import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './middlewares/ProtectedRoutes'
import AncientKatane from './pages/AncientKatane'
import Armor from './pages/Armor'
import CartShop from './pages/CartShop'
import CheckoutSuccess from './pages/CheckoutSuccess'
import Contact from './pages/Contact'
import DetailArmor from './pages/DetailArmor'
import DetailHelmet from './pages/DetailHelmet'
import DetailKatane from './pages/DetailKatane'
import DetailSupport from './pages/DetailSupport'
import ForgetPassword from './pages/ForgetPassword'
import Helmet from './pages/Helmet'
import Home from './pages/Home'
import Login from './pages/Login'
import Museum from './pages/Museum'
import NewKatane from './pages/NewKatane'
import PageNotFound from './pages/PageNotFound'
import Registration from './pages/Registration'
import Reset from './pages/Reset'
import Support from './pages/Support'
import Travel from './pages/Travel'
import User from './pages/User'
import Wish from './pages/Wish'




const App = () =>
{
 
  return (
    <>
      <Router>
        <Routes>
                {/* //* ROTTE LIBERE  */ }
          <Route exact path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/registration' element={ <Registration /> } />
          <Route path='/forgetpassword' element={ <ForgetPassword /> } />
          <Route path='/resetpassword/:resetoken' element={ <Reset /> } />
          <Route path= '*' element={ <PageNotFound /> } />


              {/* //? ROTTE PROTETTE  // */}
          <Route element={ <ProtectedRoutes /> }>
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/newKatane' element={ <NewKatane /> } />
            <Route path='/ancientKatane' element={ <AncientKatane /> } />
            <Route path='/armor' element={ <Armor /> } />
            <Route path='/helmet' element={ <Helmet /> } />
            <Route path='/support' element={ <Support /> } />
            <Route path='/detailkatane/:idkatane' element={ <DetailKatane /> } />
            <Route path='/detailarmor/:idarmor' element={ <DetailArmor /> } />
            <Route path='/detailsupport/:idsupport' element={ <DetailSupport /> } />
            <Route path='/detailhelmet/:idhelmet' element={ <DetailHelmet /> } />
            <Route path='/museum' element={ <Museum /> } />
            <Route path='/travel' element={ <Travel /> } />
            <Route path='/cartshop' element={ <CartShop /> } />
            <Route path='/wishList' element={ <Wish /> } />
            <Route path='/profile/:sessionid' element={ <User /> } />
            <Route path='/checkoutsuccess' element={ <CheckoutSuccess /> } />

            



          </Route>

        </Routes>
      </Router>

    </>
  )
}

export default App

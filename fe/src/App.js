import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './middlewares/ProtectedRoutes'
import AncientKatane from './pages/AncientKatane'
import Armor from './pages/Armor'
import CartShop from './pages/CartShop'
import Contact from './pages/Contact'
import DetailArmor from './pages/DetailArmor'
import DetailHelmet from './pages/DetailHelmet'
import DetailKatane from './pages/DetailKatane'
import DetailSupport from './pages/DetailSupport'
import Helmet from './pages/Helmet'
import Home from './pages/Home'
import Login from './pages/Login'
import Museum from './pages/Museum'
import NewKatane from './pages/NewKatane'
import Registration from './pages/Registration'
import Support from './pages/Support'
import Travel from './pages/Travel'




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

              {/* //? ROTTE PROTETTE  // */}
          <Route element={ <ProtectedRoutes /> }>
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/newKatane' element={ <NewKatane /> } />
            <Route path='/ancientKatane' element={ <AncientKatane /> } />
            <Route path='/armor' element={ <Armor /> } />
            <Route path='/helmet' element={ <Helmet /> } />
            <Route path='/support' element={ <Support /> } />
            <Route path='/detailkatane/:id' element={ <DetailKatane /> } />
            <Route path='/detailarmor/:id' element={ <DetailArmor /> } />
            <Route path='/detailsupport/:id' element={ <DetailSupport /> } />
            <Route path='/detailhelmet/:id' element={ <DetailHelmet /> } />
            <Route path='/museum' element={ <Museum /> } />
            <Route path='/travel' element={ <Travel /> } />
            <Route path='/cartshop' element={ <CartShop /> } />

          </Route>

        </Routes>
      </Router>

    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './middlewares/ProtectedRoutes'
import AncientKatane from './pages/AncientKatane'
import Armor from './pages/Armor'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Museum from './pages/Museum'
import NewKatane from './pages/NewKatane'
import Registration from './pages/Registration'
import Travel from './pages/Travel'


const App = () =>
{
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/login' element={ <Login /> } />
          <Route exact path='/registration' element={ <Registration /> } />
          <Route path='/contact' element={ <Contact /> } />
            <Route path='/armor' element={ <Armor /> } />
            <Route path='/museum' element={ <Museum /> } />
            <Route path='/travel' element={ <Travel /> } />
            <Route path='/newKatane' element={ <NewKatane /> } />
            <Route path='/ancientKatane' element={ <AncientKatane /> } />
          <Route element={ <ProtectedRoutes /> }>
            
          </Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App

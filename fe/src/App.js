import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './middlewares/ProtectedRoutes'
import AncientKatane from './pages/AncientKatane'
import Armor from './pages/Armor'
import Contact from './pages/Contact'
import DetailKataneNew from './pages/DetailKataneNew'
import Home from './pages/Home'
import Login from './pages/Login'
import Museum from './pages/Museum'
import NewKatane from './pages/NewKatane'
import Registration from './pages/Registration'
import Travel from './pages/Travel'
import { ChakraProvider } from '@chakra-ui/react'



const App = () =>
{
  return (
    <>
    <ChakraProvider >
     
      <Router>
        <Routes>
       
        
            
          <Route exact path='/' element={ <Home /> } />
          <Route  path='/login' element={ <Login /> } />
          <Route  path='/registration' element={ <Registration /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/detailkatanenew/:category/:id' element={ <DetailKataneNew /> } />
            <Route path='/armor' element={ <Armor /> } />
            <Route path='/museum' element={ <Museum /> } />
            <Route path='/travel' element={ <Travel /> } />
            <Route path='/newKatane' element={ <NewKatane /> } />
            <Route path='/ancientKatane' element={ <AncientKatane /> } />
          <Route element={ <ProtectedRoutes /> }>
            
          </Route>
         
          
        </Routes>
      </Router>
      </ChakraProvider>
    </>
  )
}

export default App

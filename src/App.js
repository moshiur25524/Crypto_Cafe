import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Coins from './components/Coins/Coins';
import CoinDetails from './components/CoinDetails/CoinDetails'
import Contact from './components/Contact/Contact';
import BdAddress from './components/Contact/BdAddress'
import UsAddress from './components/Contact/UsAddress'
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/coins' element={<Coins></Coins>} />
        <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>} />
        <Route path='/contact' element={<Contact />}>
          <Route path='bd-address' element={<BdAddress></BdAddress>} />
          <Route path='us-address' element={<UsAddress></UsAddress>} />
        </Route>
        <Route path='/about' element={
          <RequireAuth>
            <About />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  )
}

export default App

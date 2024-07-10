import './App.css';
import * as React from "react";
import Body from './composents/Body';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Page404' element={<Page404/>}></Route>
        <Route path='/Portfolio' element={<Portfolio/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

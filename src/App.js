import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import './index.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Myform from "./pages/MyForm";
import Product from "./pages/Product";
function App() {
 return (
  <BrowserRouter>
   <div className="list">
     <h1>Учебное SPA</h1>
     <ul className="header">
      <li><Link to="/">Главная</Link></li>
      <li><Link to="about">О нас</Link></li>
      <li><Link to="contact">Контакты</Link></li>
      <li><Link to="frm">Форма</Link></li>
      <li><Link to="prod">Продукты</Link></li>
    </ul>
    </div>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="contact" element={<Contact/>} />
    <Route path="frm" element={<Myform/>}/>
    <Route path="prod" element={<Product/>}></Route>
   </Routes>
  </BrowserRouter>
 );
}

export default App;
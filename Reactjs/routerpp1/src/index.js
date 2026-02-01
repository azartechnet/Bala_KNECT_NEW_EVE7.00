import React from "react";
import ReactDOM from 'react-dom/client';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Product from "./pages/Product";
import { BrowserRouter, Route,Routes } from "react-router-dom";

export default function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)
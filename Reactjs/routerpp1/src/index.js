import React from "react";
import ReactDOM from 'react-dom/client';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Route,Routes } from "react-router-dom";

export default function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="contact" element={<Contact/>}/>
      <Route path="blogs" element={<Blogs/>}/>
      <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)
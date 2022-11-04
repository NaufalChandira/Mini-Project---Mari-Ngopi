import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './page';
import Home from './page/home';
import Catalogue from "./page/catalogue";
import Komentar from "./page/komentar";
import Form from "./page/form";
import AboutUs from "./page/aboutus";
import Admin from "./page/admin";
import Tanatap from "./page/katalog/tanatap";
import Teras from "./page/katalog/teras";
import Nako from "./page/katalog/nako";
import Talk from "./page/katalog/talk";
import Kobain from "./page/katalog/kobain";
import Stuja from "./page/katalog/stuja";
import Acre from "./page/katalog/acre";
import Atelier from "./page/katalog/atelier";
import Goodhand from "./page/katalog/goodhand";




function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Index/>}/>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/catalogue' exact element={<Catalogue/>}/>
        <Route path='/komentar' exact element={<Komentar/>}/>
        <Route path='/tanatap' exact element={<Tanatap/>}/>
        <Route path='/teras' exact element={<Teras/>}/>
        <Route path='/nako' exact element={<Nako/>}/>
        <Route path='/talk' exact element={<Talk/>}/>
        <Route path='/kobain' exact element={<Kobain/>}/>
        <Route path='/stuja' exact element={<Stuja/>}/>
        <Route path='/acre' exact element={<Acre/>}/>
        <Route path='/atelier' exact element={<Atelier/>}/>
        <Route path='/goodhand' exact element={<Goodhand/>}/>
        <Route path='/form' exact element={<Form/>}/>
        <Route path='/aboutus' exact element={<AboutUs/>}/>
        <Route path='/admin' exact element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
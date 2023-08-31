import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./App.css"
import React from "react"
import { BrowserRouter } from "react-router-dom"

import Logo from "../componentes/templates/Logo"
import Nav from "../componentes/templates/Nav"
import Route from "./Route"
import Footer from "../componentes/templates/Footer"

export default props =>(
   <BrowserRouter>
      <div className="app">
         <Logo />
         <Nav />
         <Route />
         <Footer />
      </div>
   </BrowserRouter>
);

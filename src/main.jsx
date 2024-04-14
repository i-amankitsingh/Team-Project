import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Form, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import {About, Service, Portfolio, Contact} from "./components/index.js"
import Web from './components/Home/Project/Web.jsx'
import Graphic from './components/Home/Project/Graphic.jsx'
import CAD from './components/Home/Project/CAD.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home />} >
        {/* <Route path='/' element={<Home />} />
        <Route path='/web' element={<Web />} />
        <Route path='/graphic' element={<Graphic />} /> */}
      </Route>
      <Route path='about' element={<About />} />
      <Route path='service' element={<Service />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home'
import HotelListing from './pages/Hotels'
import BusinessListingPage from './pages/Restaurants'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home/>} />
        <Route path="Restaurant" element={<BusinessListingPage />} />
        <Route path="Hotel" element={<HotelListing />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

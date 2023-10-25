import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import MenuPage from "./components/MenuPage";
import OurStory from "./components/OurStory";
import Events from "./components/Events";
import YourStory from "./components/YourStory";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import './App.css'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/your-story" element={<YourStory />} />
          <Route path="/cart" element={<Cart />} /> 

        </Routes>
    </>
  )
}

export default App

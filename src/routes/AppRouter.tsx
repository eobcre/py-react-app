import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import Home from '../components/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter
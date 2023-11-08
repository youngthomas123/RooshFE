import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router, BrowserRouter } from "react-router-dom";

import './App.css'
import TopNavbar from './components/TopNavbar';
import Dashboard from './pages/Dashboard';
import Providers from './pages/Providers';
import Bookings from './pages/Bookings';
import Airports from './pages/Airports';



export default function App() {
  return (
    

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopNavbar />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="providers" element={<Providers/> } />
          <Route path="bookings" element={<Bookings/> } />
          <Route path="airports" element={<Airports/> } />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


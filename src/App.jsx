import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router, BrowserRouter } from "react-router-dom";

import './App.css'
import TopNavbar from './components/TopNavbar';
import Dashboard from './pages/Dashboard';
import Providers from './pages/Providers';
import Bookings from './pages/Bookings';
import Airports from './pages/Airports';
import ProviderDetails from './pages/ProviderDetails';
import DetailGeneral from './components/ProvidersComponent/Details/DetailGeneral';
import DetailBusiness from './components/ProvidersComponent/Details/DetailBusiness';
import DetailBookings from './components/ProvidersComponent/Details/DetailBookings';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';



export default function App() {
  return (


    <BrowserRouter>
      <Routes>

        <Route path="/" element={<TopNavbar />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="airports" element={<Airports />} />

          <Route path="providers">
            <Route index element={<Providers />} />
            <Route path="details/:rowData" element={<ProviderDetails />} >
              <Route index element={<DetailGeneral />} />
              <Route exact path="general" element={<DetailGeneral />} />
              <Route exact path="business-info" element={<DetailBusiness />} />
              <Route exact path="bookings" element={<DetailBookings />} />
            </Route>
          </Route>
        </Route>


        <Route path="/SignIn" element={<SignIn />}/>
        <Route path="/SignUp" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}


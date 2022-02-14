import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import HomePage from '../HomePage/HomePage'
import TransportationPage from '../TransportationPage/TransportationPage'
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import NavBar from '../../components/NavBar/NavBar'
// import apiRequest from '../../utilities/api-request'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/transportation" element={<TransportationPage />} />
              {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
              {/* < Route path="/*" element={<Navigate to="/" />} /> */}
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { accessToken, logout } from './spotify';
import { Login, Profile } from './pages';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <>
          <button onClick={logout}>Log Out</button>
          <Router>
            <Routes>
              <Route path='/' element={<Profile />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  )
}

export default App

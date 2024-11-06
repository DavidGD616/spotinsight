import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { accessToken } from "./spotify";
import { Login, Profile, TopArtists } from "./pages";
import "./App.css";
import { Nav } from "./components";

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
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="artists" element={<TopArtists />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;

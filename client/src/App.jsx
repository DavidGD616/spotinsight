import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { accessToken } from "./spotify";
import { Genres, Login, Profile, RecentlyPlayed, TopArtists } from "./pages";
import "./App.css";
import { Nav } from "./components";
import TopTracks from "./pages/TopTracks";

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
            <div className="pl-0 pb-[50px] md:pl-[100px]">
              <Nav />
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="artists" element={<TopArtists />} />
                <Route path="tracks" element={<TopTracks />} />
                <Route path="recent" element={<RecentlyPlayed />} />
                <Route path="genres" element={<Genres />} />
              </Routes>
            </div>
          </Router>
        </>
      )}
    </>
  );
}

export default App;

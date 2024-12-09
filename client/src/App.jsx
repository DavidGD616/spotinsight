import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { accessToken } from "./spotify";
import { TopGenres, Login, Profile, RecentlyPlayed, TopArtists, GenrePage, ArtistPage, TrackPage } from "./pages";
import "./App.css";
import { Nav } from "./components";
import TopTracks from "./pages/TopTracks";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
            <ScrollToTop />
            <div className="pl-0 pb-[50px] md:pl-[100px]">
              <Nav />
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="artists" element={<TopArtists />} />
                <Route path="/artist/:artistId" element={<ArtistPage />} />
                <Route path="tracks" element={<TopTracks />} />
                <Route path="/track/:trackId" element={<TrackPage />} />
                <Route path="recent" element={<RecentlyPlayed />} />
                <Route path="genres" element={<TopGenres />} />
                <Route path="/genre/:genreName" element={<GenrePage />} />
              </Routes>
            </div>
          </Router>
        </>
      )}
    </>
  );
}

export default App;

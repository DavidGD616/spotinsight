import React, { useEffect } from 'react';
import './App.css';

const backendUrl = 'http://localhost:8888'

function App() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');

    console.log(accessToken);
    console.log(refreshToken);
  }, []);

  return (
    <div className='bg-red-900'>
      <a href={backendUrl + "/login"}>
        Log in to Spotify
      </a>
    </div>
  )
}

export default App

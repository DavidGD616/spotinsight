import React from "react";

const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : "https://spotinsight-server.vercel.app/login";

const Login = () => (
  <main className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-[32px] font-extrabold">SpotInsight</h1>
    <a
      className="inline-block bg-green text-white rounded-pill
        font-bold text-2xl py-[17px] px-[35px]
        hover:no-underline focus:no-underline hover:brightness-110 focus:brightness-110"
      href={LOGIN_URI}
    >
      Log in to Spotify
    </a>
  </main>
);

export default Login;
